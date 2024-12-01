// src/utils/sendEmails.js
import nodemailer from 'nodemailer';
import clientPromise from './mongodb';

async function sendDailyEmails() {
  const client = await clientPromise;
  const db = client.db('myDatabase');
  const collection = db.collection('subscribers');
  const subscribers = await collection.find({}).toArray();

  // Fetch the Shloka of the Day (you can replace this with your own logic)
  const shloka = await fetchShloka();

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
      subject: 'Shloka of the Day',
      text: `Dear ${subscriber.name},\n\nHere is your Shloka of the Day:\n\n${shloka}`,
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

// Fetch Shloka of the day (you can customize this)
async function fetchShloka() {
  // Example API call to fetch the Shloka, replace with your API or logic
  const res = await fetch('https://bhagavadgita-api-psi.vercel.app/api/verse/random');
  const data = await res.json();
  return data.sanskrit_shlok || 'Shloka not available';
}

export default sendDailyEmails;
