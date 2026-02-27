import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface VerificationCodeEmailProps {
  verificationCode: string;
  username?: string;
}

export default function VerificationCodeEmail({
  verificationCode = "000000",
  username = "User",
}: VerificationCodeEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Your verification code: {verificationCode}</Preview>
      <Body style={body}>
        <Container style={container}>
          <Section style={headerSection}>
            <Heading style={logo}>Swift Code</Heading>
          </Section>

          <Section style={contentSection}>
            <Heading style={heading}>Verify Your Email Address</Heading>

            <Text style={paragraph}>Hi {username},</Text>

            <Text style={paragraph}>
              Thank you for signing up! Please use the following verification
              code to complete your registration:
            </Text>

            <Section style={codeContainer}>
              <Text style={code}>{verificationCode}</Text>
            </Section>

            <Text style={paragraph}>
              This code will expire in <strong>10 minutes</strong>. If you
              didn&apos;t request this code, you can safely ignore this email.
            </Text>

            <Hr style={divider} />

            <Text style={footerText}>
              If you&apos;re having trouble, please contact our support team.
            </Text>
          </Section>

          <Section style={footer}>
            <Text style={footerCopyright}>
              © {new Date().getFullYear()} Swift Code. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

/* --- Styles matching globals.css (light mode) --- */

const body: React.CSSProperties = {
  backgroundColor: "#f5f5f5", // --secondary: oklch(0.967) ≈ light gray
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  margin: 0,
  padding: "40px 0",
};

const container: React.CSSProperties = {
  maxWidth: "480px",
  margin: "0 auto",
  borderRadius: "10px", // --radius: 0.625rem
  overflow: "hidden",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
};

const headerSection: React.CSSProperties = {
  backgroundColor: "#1a1a1e", // --primary: oklch(0.21) ≈ near black
  padding: "32px 40px",
  textAlign: "center" as const,
};

const logo: React.CSSProperties = {
  color: "#fafafa", // --primary-foreground: oklch(0.985) ≈ near white
  fontSize: "24px",
  fontWeight: 700,
  margin: 0,
  letterSpacing: "-0.5px",
};

const contentSection: React.CSSProperties = {
  backgroundColor: "#ffffff", // --background / --card: oklch(1) = white
  padding: "40px",
};

const heading: React.CSSProperties = {
  color: "#1a1a1e", // --foreground: oklch(0.141) ≈ near black
  fontSize: "22px",
  fontWeight: 600,
  textAlign: "center" as const,
  margin: "0 0 24px 0",
};

const paragraph: React.CSSProperties = {
  color: "#1a1a1e", // --foreground
  fontSize: "15px",
  lineHeight: "1.6",
  margin: "0 0 16px 0",
};

const codeContainer: React.CSSProperties = {
  backgroundColor: "#f5f5f5", // --secondary / --muted
  borderRadius: "8px", // --radius-md
  border: "1px solid #e5e5e7", // --border: oklch(0.92)
  padding: "24px",
  textAlign: "center" as const,
  margin: "24px 0",
};

const code: React.CSSProperties = {
  color: "#1a1a1e", // --foreground
  fontSize: "36px",
  fontWeight: 700,
  letterSpacing: "8px",
  fontFamily: '"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace',
  margin: 0,
};

const divider: React.CSSProperties = {
  borderTop: "1px solid #e5e5e7", // --border
  margin: "24px 0",
};

const footerText: React.CSSProperties = {
  color: "#8b8b8f", // --muted-foreground: oklch(0.552)
  fontSize: "13px",
  lineHeight: "1.5",
  margin: 0,
};

const footer: React.CSSProperties = {
  backgroundColor: "#f5f5f5", // --secondary
  padding: "20px 40px",
  textAlign: "center" as const,
};

const footerCopyright: React.CSSProperties = {
  color: "#8b8b8f", // --muted-foreground
  fontSize: "12px",
  margin: 0,
};