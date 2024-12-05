import nodemailer from 'nodemailer';
import fetch from 'node-fetch';

export const sendVerseOfTheDay = async (name, email) => {
  // Fetch a random chapter from the Bhagavad Gita API
  const chaptersRes = await fetch('https://bhagavadgita-api-psi.vercel.app/api/chapters');
  const chaptersData = await chaptersRes.json();
  const randomChapter = chaptersData.chapters[Math.floor(Math.random() * chaptersData.chapters.length)];

  // Fetch verses for the selected chapter
  const versesRes = await fetch(`https://bhagavadgita-api-psi.vercel.app/api/verses/${randomChapter.chapter_number}`);
  const versesData = await versesRes.json();
  const randomVerse = versesData.verses[Math.floor(Math.random() * versesData.verses.length)];

  // Fetch detailed information for the selected verse
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
      user: process.env.EMAIL_USER,  // Use your Gmail email address
      pass: process.env.EMAIL_PASS,  // Use your Gmail app password
    },
  });

  // Email content
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your Bhagavad Gita Verse of the Day',
    html: `
      <div style="font-family: Times New Roman, sans-serif; color: orange;">
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
        </div>
      </div>
    `,
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    console.log(`Verse sent to: ${email}`);
  } catch (error) {
    console.error(`Error sending email to ${email}:`, error);
  }
};
