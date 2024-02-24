"use server"
import EmailTemplate from '@/components/Email-template';
import { getErrorMessage, validateString } from '@/lib/utils';
import React from 'react';
import { Resend } from 'resend';


const resend = new Resend(process.env.RESEND_API_KEY);
export const sendEmail = async (formData: FormData) => {
 
  const senderEmail = formData.get("email");
  const message = formData.get("message");

  
  if (!validateString(senderEmail, 500)) {
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
      to: 'mkprojects78@gmail.com',
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(EmailTemplate, {
        message: message,
        email: senderEmail,
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