"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { contactSchema, ContactInput } from "@repo/validation";
import { sendContactForm } from "./actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Inputfield } from "@repo/ui";
import Form from "../components/Form/Form";

export default function ContactForm() {
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      message: "",
      website: ""
    },
  });
  const onSubmit: SubmitHandler<ContactInput> = async (data) => {
    const result = await sendContactForm(data);

    if (result.success) {
      setServerMessage("✅ Nachricht erfolgreich gesendet!");
      reset();
    } else {
      setServerMessage("❌ Etwas ist schiefgelaufen.");
    }
  };

  //   TODOS:
  //   Bestätigungsmail an den Absender

  return (
    <div>
      <h1>Kontaktformular</h1>
      <div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Inputfield
            {...register("name")}
            type="text"
            placeholder="name"
            error={errors.name?.message}
            autoComplete="on"
            required
          />
          <Inputfield
            {...register("email")}
            type="text"
            placeholder="email"
            label="Email"
            error={errors.email?.message}
            autoComplete="on"
            required
          />
          <Inputfield
            {...register("message")}
            type="text"
            placeholder="Message"
            error={errors.message?.message}
            autoComplete="off"
          />
          <Inputfield {...register("website")} type="text" placeholder="webseite" isHidden label="website" />

          <button type="submit">Senden</button>

          {serverMessage && <p>{serverMessage}</p>}
        </Form>
      </div>
    </div>
  );
}
