"use server";

import { Resend } from "resend";
import { z } from "zod";
import ContactFormEmail from "@/emails/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

const formSchema = z.object({
  name: z.string().min(1, { message: "Name ist erforderlich!" }),
  email: z.string().email({ message: "Gültige Email-Adresse erforderlich!" }),
  message: z
    .string()
    .min(20, { message: "Nachricht muss mindenstens 20 Zeichen enthalten!" }),
});

export async function sendEmail(prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData);

  const zodResult = formSchema.safeParse(data);

  console.log(zodResult);
  if (!zodResult.success) {
    return {
      success: false,
      message: "Validierungsfehler",
      errors: zodResult.error.flatten().fieldErrors,
    };
  }

  // await new Promise((resolve) => setTimeout(resolve, 2000));
  //   return {
  //     success: false,
  //     message: "Fehlgeschlagen. Bitte versuch es erneut!",
  //   };

  try {
    const { data, error } = await resend.emails.send({
      from: "Bachata & More <no-reply@dev.goetz-oliver.de>",
      to: "info@bachata-and-more.de",
      subject: "Neue Nachricht von Bachata & More",
      react: ContactFormEmail({
        ...zodResult.data,
      }),
    });

    if (error) {
      console.error(error);
      return {
        success: false,
        message:
          "Nachricht konnte nicht verschickt werden. Versuche es später nochmal!",
      };
    }
    return {
      success: true,
      message: "Nachricht verschickt!",
    };
  } catch (err) {
    console.error(err);

    return {
      success: false,
      message:
        "Nachricht konnte nicht verschickt werden. Versuche es später nochmal!",
    };
  }
}
