import sendDailyEmails from '../../utils/sendEmails';  // Import your send email function

export default async function handler(req, res) {
  try {
    // Call the function to send the daily emails
    await sendDailyEmails();

    // Respond with a success message
    res.status(200).json({ message: 'Daily emails sent successfully!' });
  } catch (error) {
    // Handle errors
    console.error('Error sending daily emails:', error);
    res.status(500).json({ message: 'Failed to send daily emails', error: error.message });
  }
}
