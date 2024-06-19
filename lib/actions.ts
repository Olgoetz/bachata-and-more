"use server";

import { z } from "zod";

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

  await new Promise((resolve) => setTimeout(resolve, 2000));
  //   return {
  //     success: false,
  //     message: "Fehlgeschlagen. Bitte versuch es erneut!",
  //   };
  return {
    success: true,
    message: "Nachricht verschickt!",
  };
}
