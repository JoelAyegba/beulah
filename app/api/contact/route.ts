import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, phone, subject, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: 'beulahwalkofhope@gmail.com',
    subject: `New message from ${firstName} ${lastName}: ${subject}`,
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error submitting form' }, { status: 500 });
  }
}