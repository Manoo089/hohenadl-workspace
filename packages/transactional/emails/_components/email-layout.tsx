import { Html, Head, Body, Container, Section, Text, Hr, Preview, Img } from "@react-email/components";
import { ReactNode } from "react";

export interface BrandConfig {
  name: string;
  logoUrl?: string;
  websiteUrl: string;
  accentEmoji: string;
  personalSignOff?: string;
  footer: string;
}

interface Props {
  preview: string;
  brand?: BrandConfig;
  children: ReactNode;
}

export const defaultBrand: BrandConfig = {
  name: "Hohenadl Development",
  websiteUrl: "https://hohenadl.dev",
  accentEmoji: "🎸",
  footer: "Hohenadl Development · Landshut, Bayern · Manuel Hohenadl",
};

export default function EmailLayout({ preview, brand, children }: Props) {
  return (
    <Html lang="de">
      <Head />
      <Preview>{preview}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header mit Branding */}
          <Section style={header}>
            {brand?.logoUrl ? (
              <Img src={brand.logoUrl} alt={brand.name} width="120" />
            ) : (
              <Text style={brandText}>{brand?.name}</Text>
            )}
          </Section>

          <Hr style={divider} />

          {/* Eigentlicher Inhalt vom Template */}
          {children}

          <Hr style={divider} />

          {/* Footer mit Trust-Marker */}
          <Section style={footerSection}>
            <Text style={footerText}>
              {brand?.accentEmoji} Diese Mail vom Kontaktformular auf{" "}
              <a href={brand?.websiteUrl} style={link}>
                {brand?.websiteUrl.replace("https://", "")}
              </a>
            </Text>
            <Text style={footerSmall}>{brand?.footer}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: "#f4f4f4",
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  margin: 0,
  padding: 0,
};

const container = {
  margin: "20px auto",
  padding: "32px",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  maxWidth: "600px",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
};

const header = {
  textAlign: "center" as const,
  marginBottom: "16px",
};

const brandText = {
  fontSize: "20px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: 0,
  letterSpacing: "-0.5px",
};

const divider = {
  borderColor: "#e5e7eb",
  margin: "24px 0",
};

const footerSection = {
  textAlign: "center" as const,
};

const footerText = {
  fontSize: "13px",
  color: "#6b7280",
  margin: "8px 0",
};

const footerSmall = {
  fontSize: "11px",
  color: "#9ca3af",
  margin: "4px 0",
};

const link = {
  color: "#3b82f6",
  textDecoration: "none",
};
