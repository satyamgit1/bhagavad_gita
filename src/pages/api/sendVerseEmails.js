// pages/api/sendVerseEmails.js
import { sendVerseEmails } from '../../utils/sendVerseEmails';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      console.log('Triggering the Bhagavad Gita email send process...');
      await sendVerseEmails();
      return res.status(200).json({ message: 'Emails sent successfully.' });
    } catch (error) {
      console.error('Error triggering the email process:', error);
      return res.status(500).json({ message: 'Failed to send emails.', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed. Only GET requests are allowed.' });
  }
}
