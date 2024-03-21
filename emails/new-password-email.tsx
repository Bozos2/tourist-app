import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

const NewPassword = ({ token }: { token: string }) => {
  return (
    <Html>
      <Head />
      <Preview>Trip Teaser Password reset</Preview>
      <Body style={main}>
        <Container>
          <Section style={content}>
            <Row>
              <Img
                style={image}
                width={620}
                src="https://res.cloudinary.com/djlkrfxbq/image/upload/v1711030742/profile/erelwhplnf6g3i8mkvkr.png"
              />
            </Row>

            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Section style={upperSection}>
                <Heading style={h1}>Reset your password</Heading>
                <Text style={mainText}>
                  Someone recently requested a password change for your Trip
                  Teasers account.If this was you, you can click on link below
                  to set new one.
                </Text>
                <Section style={verificationSection}>
                  <Text style={verifyText}>Reset password</Text>
                  <Link
                    style={link}
                    href={`${baseUrl}/auth/new-password?token=${token}`}
                  >
                    <strong>Click here to reset password</strong>
                  </Link>
                  <Text style={validityText}>
                    (This link is valid for 60 minutes)
                  </Text>
                </Section>
                <Text style={mainText}>
                  If you haven't initiated this process, you can safely ignore
                  this message.
                </Text>
              </Section>
            </Row>
          </Section>

          <Section style={containerImageFooter}>
            <Img
              style={image}
              width={620}
              src="https://res.cloudinary.com/djlkrfxbq/image/upload/v1711030752/profile/td8bpsnulypi4z9e9w8v.png"
            />
          </Section>

          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            © 2024 | Trip Teasers
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default NewPassword;

const main = {
  marginTop: "15px",
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "15px",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  maxWidth: "100%",
};

const boxInfos = {
  padding: "20px",
};

const containerImageFooter = {
  padding: "12px 0 0 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const upperSection = { padding: "25px 35px" };

const verifyText = {
  ...text,
  margin: 0,
  fontWeight: "bold",
  textAlign: "center" as const,
};

const validityText = {
  ...text,
  margin: "0px",
  textAlign: "center" as const,
};

const verificationSection = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const mainText = { ...text, marginBottom: "14px" };

const link = {
  color: "#454dd8",
  display: "flex",
  padding: "3px 0",
  alignItems: "center",
  justifyContent: "center",
};
