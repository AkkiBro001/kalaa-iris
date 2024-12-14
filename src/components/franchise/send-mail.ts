'use server';

import nodemailer from 'nodemailer';
// import { ReactNode } from 'react';
const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;
const transporter = nodemailer.createTransport({
  service: 'gmail', //gmail
  host: SMTP_SERVER_HOST,
  port: 587,
  secure: true, //true
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
  
});
// import { render } from '@react-email/components';
// import  { FranchiesFormType } from './email-templeate';

export async function sendMail({
  subject,
  html,
}: {
  subject: string;
  html: string;
}) {
  try {
    const isVerified = await transporter.verify();
    console.log(isVerified)
    
  } catch (error) {
    console.error('Something Went Wrong', SMTP_SERVER_USERNAME, SMTP_SERVER_PASSWORD, error);
    if (error instanceof Error) {
      throw new Error(error.message)
    } else {
      console.log("Unknown error:", error);
    }
    return;
  }

  // const emailHtml = await render(<div></div>);

  const info = await transporter.sendMail({
    from: SMTP_SERVER_USERNAME,
    to: SITE_MAIL_RECIEVER,
    subject: subject,
    html: html,
  });
  console.log('Message Sent', info.messageId);
  console.log('Mail sent to', SITE_MAIL_RECIEVER);
  return info;
}