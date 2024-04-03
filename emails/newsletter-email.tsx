import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const NewsletterEmail = () => {
  return (
    <Html>
      <Head />
      <Preview>Newsletter subscription!</Preview>
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
                <Heading style={h1}>
                  Stay Updated with Trip Teasers Newsletter!
                </Heading>
                <Text style={mainText}>
                  Thank you for subscribing! You will soon receive the latest
                  updates, offers, and travel tips from the Trip Teasers team.
                </Text>
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

export default NewsletterEmail;

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
