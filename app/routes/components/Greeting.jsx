import { Card, TextContainer } from "@shopify/polaris";

export default function Greeting({ name = "World" }) {
  return (
    <Card>
      <TextContainer>
        <p>Hello {name}! 👋 This is coming from a reusable component.</p>
      </TextContainer>
    </Card>
  );
}
