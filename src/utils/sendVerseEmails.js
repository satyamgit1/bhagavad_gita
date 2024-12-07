// utils/sendVerseEmails.js
import clientPromise from './mongodb';
import nodemailer from 'nodemailer';

// Function to send the email
export async function sendVerseEmails() {
  try {
    console.log('Starting to send Bhagavad Gita verse emails...');

    // Fetch all subscribers from MongoDB
    const client = await clientPromise;
    const db = client.db('myDatabase');
    const collection = db.collection('subscribers');
    const subscribers = await collection.find({}).toArray();

    if (subscribers.length === 0) {
      console.log('No subscribers found.');
    } else {
      console.log(`Found ${subscribers.length} subscribers.`);
    }

    // Fetch the verse of the day
    const chaptersRes = await fetch('https://bhagavadgita-api-psi.vercel.app/api/chapters');
    const chaptersData = await chaptersRes.json();
    const randomChapter = chaptersData.chapters[Math.floor(Math.random() * chaptersData.chapters.length)];

    const versesRes = await fetch(`https://bhagavadgita-api-psi.vercel.app/api/verses/${randomChapter.chapter_number}`);
    const versesData = await versesRes.json();
    const randomVerse = versesData.verses[Math.floor(Math.random() * versesData.verses.length)];

    const verseDetailsRes = await fetch(`https://bhagavadgita-api-psi.vercel.app/api/verse/${randomChapter.chapter_number}.${randomVerse.verse_number}`);
    const verseDetailsData = await verseDetailsRes.json();
    const verseDetails = verseDetailsData.verseDetails;

    const sanskrit = verseDetails.sanskrit_shlok || "Sanskrit text not available";
    const transliteration = verseDetails.english_shlok || "Transliteration not available";
    const translation = verseDetails.translation || "Translation not available";

    // Configure the email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send emails concurrently using Promise.all()
    const emailPromises = subscribers.map((subscriber) => {
      const { name, email } = subscriber;

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Your Bhagavad Gita Verse of the Day',
        html: `
          <div style="font-family: Arial, sans-serif; color: orange;">
            <div style="background-color: orange; padding: 20px; text-align: center; border-bottom: 1px solid #006666;">
              <h1 style="color: #ffffff; margin: 0;">Bhagavad Gita</h1>
              <h2 style="color: #ffffff; margin: 5px 0;">Verse of the Day</h2>
            </div>
            <div style="padding: 20px;">
              <p style="font-size: 18px; color: #555;">Dear ${name},</p>
              <p style="font-size: 16px;">We are pleased to share with you the verse of the day from the Bhagavad Gita:</p>
              <div style="border-left: 4px solid #008080; padding-left: 16px; margin: 20px 0;">
                <h3 style="color: #8B0000; margin: 0;">Chapter ${randomChapter.chapter_number}, Verse ${randomVerse.verse_number}</h3>
                <p style="font-size: 16px; color: #333; margin: 10px 0;"><strong>Sanskrit:</strong></p>
                <p style="font-size: 16px; font-style: italic; color: #555;">${sanskrit}</p>
                <p style="font-size: 16px; color: #333; margin: 10px 0;"><strong>Transliteration:</strong></p>
                <p style="font-size: 16px; font-style: italic; color: #555;">${transliteration}</p>
                <p style="font-size: 16px; color: #333; margin: 10px 0;"><strong>Translation:</strong></p>
                <p style="font-size: 16px; font-style: italic; color: #555;">${translation}</p>
              </div>
              <p style="margin-top: 40px; font-size: 16px; color: #555;">Reflect on this verse and let it guide you through your day.</p>
              <p style="font-size: 16px; color: #555;">May the teachings of the Bhagavad Gita bring you peace and wisdom.</p>
              <p style="margin-top: 40px; font-size: 16px; color: #555;">Best regards,<br>The Bhagavad Gita Team</p>
            </div>
            <div style="background-color: #f4f4f4; padding: 10px; text-align: center; border-top: 1px solid #ddd;">
              <p style="font-size: 12px; color: #666;">You are receiving this email because you subscribed to the Bhagavad Gita Verse of the Day service.</p>
              <p style="font-size: 12px; color: #666;">To unsubscribe, please click here.</p>
            </div>
          </div>
        `,
      };

      return transporter.sendMail(mailOptions)
        .then(() => {
          console.log(`Email sent to ${email}`);
        })
        .catch((error) => {
          console.error(`Failed to send email to ${email}:`, error.message);
        });
    });

    // Wait for all email promises to resolve
    await Promise.all(emailPromises);

    console.log('All emails have been sent.');
  } catch (error) {
    console.error('Error sending Bhagavad Gita verse emails:', error);
  }
}
