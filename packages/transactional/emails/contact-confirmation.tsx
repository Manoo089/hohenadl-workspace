import { Heading, Text, Section } from "@react-email/components";
import EmailLayout, { type BrandConfig, defaultBrand } from "./_components/email-layout";

interface Props {
  name: string;
  contactEmail: string;
  brand: BrandConfig;
}

export default function ContactConfirmation({ name, contactEmail, brand }: Props) {
  return (
    <EmailLayout preview={`Vielen Dank für deine Nachricht an ${brand.name}!`} brand={brand}>
      <Heading style={h1}>Hallo {name},</Heading>

      <Text style={paragraph}>
        vielen Dank für deine Nachricht! Ich habe deine Anfrage erhalten und melde mich so schnell wie möglich bei dir –
        meist innerhalb von 24 Stunden.
      </Text>

      <Text style={paragraph}>Falls deine Anfrage besonders dringend ist, erreichst du mich auch direkt unter:</Text>

      <Section style={contactBox}>
        <Text style={contactItem}>
          📧{" "}
          <a href={`mailto:${contactEmail}`} style={link}>
            {contactEmail}
          </a>
        </Text>
      </Section>

      <Text style={signature}>
        Bis bald,
        <br />
        {brand.personalSignOff}
      </Text>
    </EmailLayout>
  );
}

ContactConfirmation.PreviewProps = {
  name: "Max Mustermann",
  contactEmail: "kontakt@hohenadl.dev",
  brand: defaultBrand,
} satisfies Props;

const h1 = {
  fontSize: "22px",
  color: "#111827",
  marginBottom: "16px",
};

const paragraph = {
  fontSize: "15px",
  lineHeight: "1.6",
  color: "#374151",
  margin: "12px 0",
};

const contactBox = {
  backgroundColor: "#f9fafb",
  padding: "16px",
  borderRadius: "6px",
  margin: "16px 0",
};

const contactItem = {
  fontSize: "14px",
  margin: "4px 0",
  color: "#374151",
};

const link = {
  color: "#3b82f6",
  textDecoration: "none",
};

const signature = {
  fontSize: "15px",
  color: "#374151",
  marginTop: "32px",
  lineHeight: "1.6",
};
