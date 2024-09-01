// import clientPromise from '../../utils/mongodb';
// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { email } = req.body;

//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: 'Welcome!',
//       text: 'Thank you for subscribing! Hello from Developer Side!',
//     };

//     try {
//       console.log('Starting to send email...');
//       await transporter.sendMail(mailOptions);
//       console.log('Email sent successfully.');

//       const client = await clientPromise;
//       const db = client.db('myDatabase');
//       const collection = db.collection('subscribers');

//       await collection.insertOne({ email });
//       console.log('Subscription saved to MongoDB.');

//       return res.status(200).json({ message: 'Subscribed and email sent successfully!' });
//     } catch (error) {
//       console.error('Error during subscription:', error);
//       return res.status(500).json({ message: 'Subscription failed.', error: error.message });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }



import clientPromise from '../../utils/mongodb';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email } = req.body;

    try {
      // Fetch a random verse from the Bhagavad Gita (assuming this part already exists in your code)
      // Example placeholder values:
      const verse = {
        chapter: "2",
        verse_number: "47",
        sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन |",
        transliteration: "karmaṇy-evādhikāras te mā phaleṣhu kadāchana",
        translation: "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions."
      };

      // Configure the email transporter
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Compose the email with personalized greeting
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Your Bhagavad Gita Verse of the Day',
        html: `
          <div style="font-family: Arial, sans-serif; color: #333;">
            <div style="background-color: orange; padding: 20px; text-align: center; border-bottom: 1px solid #006666;">
              <h1 style="color: #ffffff; margin: 0;">Bhagavad Gita</h1>
              <h2 style="color: #ffffff; margin: 5px 0;">Verse of the Day</h2>
            </div>
            <div style="padding: 20px;">
              <p style="font-size: 18px; color: #555;">Dear ${name},</p>
              <p style="font-size: 16px;">We are pleased to share with you the verse of the day from the Bhagavad Gita:</p>
              <div style="border-left: 4px solid #008080; padding-left: 16px; margin: 20px 0;">
                <h3 style="color: #8B0000; margin: 0;">Chapter ${verse.chapter}, Verse ${verse.verse_number}</h3>
                <p style="font-size: 16px; color: #333; margin: 10px 0;"><strong>Sanskrit:</strong></p>
                <p style="font-size: 16px; font-style: italic; color: #555;">${verse.sanskrit}</p>
                <p style="font-size: 16px; color: #333; margin: 10px 0;"><strong>Transliteration:</strong></p>
                <p style="font-size: 16px; font-style: italic; color: #555;">${verse.transliteration}</p>
                <p style="font-size: 16px; color: #333; margin: 10px 0;"><strong>Translation:</strong></p>
                <p style="font-size: 16px; font-style: italic; color: #555;">${verse.translation}</p>
              </div>
              <p style="margin-top: 40px; font-size: 16px; color: #555;">Reflect on this verse and let it guide you through your day.</p>
              <p style="font-size: 16px; color: #555;">May the teachings of the Bhagavad Gita bring you peace and wisdom.</p>
              <p style="margin-top: 40px; font-size: 16px; color: #555;">Best regards,<br>The Bhagavad Gita Team</p>
            </div>
            <div style="background-color: #f4f4f4; padding: 10px; text-align: center; border-top: 1px solid #ddd;">
              <p style="font-size: 12px; color: #666;">You are receiving this email because you subscribed to the Bhagavad Gita Verse of the Day service.</p>
            </div>
          </div>
        `,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      // Save the subscription to MongoDB (if you are saving subscriptions)
      const client = await clientPromise;
      const db = client.db('myDatabase');
      const collection = db.collection('subscribers');
      await collection.insertOne({ name, email });

      // Respond to the client
      res.status(200).json({ message: 'Subscribed successfully!' });
    } catch (error) {
      console.error('Subscription error:', error);
      res.status(500).json({ message: 'Subscription failed.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

