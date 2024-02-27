'use server'
import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import EmailTemplate from "@/components/Email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
 
  const email = formData.get("email");
  const message = formData.get("message");

  
  if (!validateString(email, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: 'gogol.projects@gmail.com',
      subject: "🎉 New message from Your portfolio site",
      reply_to: email,
      react: React.createElement(EmailTemplate, {
        message: message,
        email: email,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};