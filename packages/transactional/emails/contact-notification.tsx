import { Heading, Text, Section } from "@react-email/components";
import EmailLayout, { type BrandConfig, defaultBrand } from "./_components/email-layout";

interface Props {
  name: string;
  email: string;
  message: string;
  brand: BrandConfig;
  submissionId?: string;
}

export default function ContactNotification({ name, email, message, brand, submissionId }: Props) {
  return (
    <EmailLayout preview={`Neue Anfrage von ${name}`} brand={brand}>
      <Section style={badge}>
        <Text style={badgeText}>📨 Neue Nachricht aus deinem Kontaktformular</Text>
      </Section>

      <Heading style={h1}>Neue Anfrage von {name}</Heading>

      <Section style={infoSection}>
        <Text style={infoLabel}>Name</Text>
        <Text style={infoValue}>{name}</Text>

        <Text style={infoLabel}>E-Mail</Text>
        <Text style={infoValue}>
          <a href={`mailto:${email}`} style={mailLink}>
            {email}
          </a>
        </Text>

        <Text style={infoLabel}>Nachricht</Text>
        <Text style={messageBox}>{message}</Text>
      </Section>

      {submissionId && <Text style={metaText}>Submission-ID: {submissionId}</Text>}
    </EmailLayout>
  );
}

ContactNotification.PreviewProps = {
  name: "Max Mustermann",
  email: "max@example.com",
  message: "Hallo, ich interessiere mich für Ihre Dienstleistungen...",
  submissionId: "preview-id-12345",
  brand: defaultBrand,
} satisfies Props;

// Styles
const badge = {
  backgroundColor: "#fef3c7",
  padding: "12px 16px",
  borderRadius: "6px",
  borderLeft: "4px solid #f59e0b",
  marginBottom: "24px",
};

const badgeText = {
  margin: 0,
  fontSize: "13px",
  color: "#92400e",
};

const h1 = {
  fontSize: "24px",
  color: "#111827",
  marginTop: "16px",
  marginBottom: "16px",
};

const infoSection = {
  marginTop: "24px",
};

const infoLabel = {
  fontSize: "12px",
  fontWeight: "bold" as const,
  color: "#6b7280",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  margin: "16px 0 4px 0",
};

const infoValue = {
  fontSize: "16px",
  color: "#111827",
  margin: "0 0 12px 0",
};

const mailLink = {
  color: "#3b82f6",
  textDecoration: "none",
};

const messageBox = {
  backgroundColor: "#f9fafb",
  padding: "16px",
  borderLeft: "3px solid #3b82f6",
  borderRadius: "4px",
  whiteSpace: "pre-wrap" as const,
  fontSize: "14px",
  lineHeight: "1.6",
  color: "#374151",
  margin: "8px 0 0 0",
};

const metaText = {
  fontSize: "11px",
  color: "#9ca3af",
  marginTop: "16px",
  fontFamily: "monospace",
};
