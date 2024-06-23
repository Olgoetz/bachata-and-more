import { TContactFormEmail } from "@/lib/types";
import { getBaseUrl } from "@/lib/utils";
import {
  Body,
  Container,
  Html,
  Text,
  Tailwind,
  Section,
  Hr,
  Img,
} from "@react-email/components";

import * as React from "react";

const baseUrl =
  process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:4000/static";

export default function ContactFormEmail({
  name,
  email,
  message,
}: TContactFormEmail) {
  return (
    <Html>
      <Tailwind>
        <Body className="font-sans max-w-[800px] my-4 mx-auto  border-solid border-black/5 ">
          <Container className="rounded-lg bp-4">
            <Img
              src={`${baseUrl}/logo.png`}
              alt="Bachata & More"
              width="100"
              height="100"
              className="mx-auto my-4"
            />

            <Hr className="my-4" />

            <h1 className="py-4 text-2xl">Hi Michi und Oli,</h1>

            <Text>
              Eine neue Nachricht kam gerade über das Kontakformular herein:
            </Text>

            <Section className="space-y-4 py-4">
              <Text>Name: {name}</Text>

              <Text>Email: {email}</Text>

              <Text>Nachricht: {message}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

ContactFormEmail.PreviewProps = {
  name: "Foo",
  email: "goetzoliver@web.de",
  message: "Hello World",
} as TContactFormEmail;
