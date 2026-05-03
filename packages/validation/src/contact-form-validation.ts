import { z } from "zod";

export const contactSchema = z.object({
  name: z.string({ error: "Name ist erforderlich" }).min(2, "Name zu kurz"),
  email: z.email({ error: "E-Mail ist erforderlich" }).min(2, "E-Mail zu kurz"),
  tel: z
    .string({ error: "Telefonnummer ist erforderlich" })
    .regex(/^[\d\s\-\+\(\)\/]+$/, "Nur Ziffern, Leerzeichen, +, -, (), / erlaubt")
    .min(6, "Mobile Nummer ist zu kurz")
    .max(20, "Mobile Nummber ist zu lang")
    .optional()
    .or(z.literal("")),
  message: z.string({ error: "Text ist erforderlich" }).min(10, "Text ist zu kurz").max(1000, "Text ist zu lang"),
  website: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
