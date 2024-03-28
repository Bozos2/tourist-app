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

type ContactProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactEmail = ({ name, email, subject, message }: ContactProps) => {
  return (
    <Html>
      <Head />
      <Preview>Contact user form</Preview>
      <Body style={main}>
        <Container>
          <Section style={content}>
            <Row>
              <Img
                style={image}
                width={620}
                src="https://res.cloudinary.com/djlkrfxbq/image/upload/v1711321683/profile/w451uv5rfhj6tcer2jrn.png"
              />
            </Row>

            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Section style={upperSection}>
                <Heading style={h1}>{subject}</Heading>
                <Text style={mainText}>{message}</Text>
                <Heading style={userText}>
                  <strong>{name}</strong>({email})
                </Heading>
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

export default ContactEmail;

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
  fontSize: "22px",
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

const mainText = { ...text, marginBottom: "14px" };

const userText = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
};
