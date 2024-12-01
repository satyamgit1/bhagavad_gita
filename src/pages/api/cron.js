// pages/api/cron.js
export default function handler(req, res) {
    console.log('Cron job triggered at', new Date().toISOString()); // Logs the timestamp for debugging
    res.status(200).end('Hello Cron!');
  }
  