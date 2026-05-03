"use server";

import { z } from "zod";
import { Resend } from "resend";
import { contactSchema } from "@repo/validation";
import { ContactConfirmation } from "@repo/transactional";
import { ContactNotification } from "@repo/transactional";
import { brand } from "@/lib/email-brand";
import { randomUUID } from "crypto";

// TODO
// Rate-Limits
// Cloudflare Turnstile

const resend = new Resend(process.env.RESEND_API_KEY);

const CONTACT_EMAIL = "kontakt@hohenadl.dev";
const FROM_NAME = "Hohenadl Dev";

export async function sendContactForm(data: unknown) {
  const parsed = contactSchema.safeParse(data);
  if (!parsed.success) {
    return {
      success: false as const,
      errors: z.flattenError(parsed.error).fieldErrors,
    };
  }

  // Honeypot check
  if (parsed.data.website && parsed.data.website.length > 0) {
    console.warn("Honeypot triggered - ignoring submission");
    return { success: true as const };
  }

  const submissionId = randomUUID();
  console.log(`[Contact Form] Submission ${submissionId} – from: ${parsed.data.email}`);

  // Notification
  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM!,
      to: process.env.RESEND_TO!,
      replyTo: parsed.data.email,
      subject: `Neue Anfrage von ${parsed.data.name}`,
      text: `Name: ${parsed.data.name}\n\nNachricht: ...`,
      react: ContactNotification({
        name: parsed.data.name,
        email: parsed.data.email,
        message: parsed.data.message,
        brand,
        submissionId,
      }),
    });

    // Confirmation
    try {
      await resend.emails.send({
        from: `${FROM_NAME} <${CONTACT_EMAIL}>`,
        to: parsed.data.email,
        subject: "Deine Anfrage ist angekommen",
        react: ContactConfirmation({
          name: parsed.data.name,
          contactEmail: CONTACT_EMAIL,
          brand,
        }),
      });
    } catch (confirmError) {
      console.warn("Confirmation email failed:", confirmError);
    }

    return { success: true as const };
  } catch (error) {
    console.error("Resend error:", error);
    return {
      success: false as const,
      errors: { _form: ["E-Mail konnte nicht versendet werden."] },
    };
  }
}
