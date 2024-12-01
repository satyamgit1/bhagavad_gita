// src/pages/api/trigger-email.js
import sendDailyEmails from '../../utils/sendEmails';

export default async function handler(req, res) {
  try {
    // Call the function to send the daily emails
    await sendDailyEmails();
    res.status(200).json({ message: 'Emails sent successfully!' });
  } catch (error) {
    console.error('Error sending daily emails:', error);
    res.status(500).json({ message: 'Failed to send daily emails', error: error.message });
  }
}
