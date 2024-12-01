import nodemailer from 'nodemailer';
import clientPromise from './mongodb';

async function sendDailyEmails() {
  const client = await clientPromise;
  const db = client.db('myDatabase');
  const collection = db.collection('subscribers');
  const subscribers = await collection.find({}).toArray();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const emailPromises = subscribers.map(async (subscriber) => {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: subscriber.email,
      subject: 'Daily Update',
      text: 'Hello from Developer Side!',
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent to:', subscriber.email);
    } catch (error) {
      console.error('Error sending email to:', subscriber.email, error);
    }
  });

  await Promise.all(emailPromises); // Send all emails concurrently
}

export default sendDailyEmails;
