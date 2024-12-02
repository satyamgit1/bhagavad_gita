import mongoose from 'mongoose';
import clientPromise from '@/utils/mongodb';
import nodemailer from 'nodemailer';

// Function to connect to MongoDB and Mongoose
async function connectDB() {
  try {
    const client = await clientPromise;
    const db = client.db();

    if (!mongoose.connection.readyState) {
      await mongoose.connect(process.env.MONGODB_URI, {
        useUnifiedTopology: true,
      });
    }
    return db;
  } catch (error) {
    console.error('Database connection failed:', error.message);
    throw new Error('Failed to connect to the database');
  }
}

// Mongoose schema and model for contact
const contactUsSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  message: String,
});

const ContactUs = mongoose.models.ContactUs || mongoose.model('ContactUs', contactUsSchema);

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// API route handler
export default async function handler(req, res) {
  await connectDB(); // Ensure the database is connected

  switch (req.method) {
    case 'GET':
      try {
        const contacts = await ContactUs.find();
        res.status(200).json(contacts);
      } catch (error) {
        console.error('Failed to retrieve contacts:', error.message);
        res.status(500).send('Internal Server Error');
      }
      break;

    case 'POST':
      try {
        const { name, email, mobile, message } = req.body;
        const newContact = new ContactUs({ name, email, mobile, message });
        const savedContact = await newContact.save();

        // Send email notification
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.DESTINATION_EMAIL, // Set the destination email here
          subject: 'New Contact Form Submission',
          html: `
            <style>
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                border: 1px solid #ccc;
                border-radius: 5px;
                font-family: Arial, sans-serif;
              }
              .header {
                background-color: #007bff;
                color: #fff;
                text-align: center;
                padding: 10px;
                border-radius: 5px 5px 0 0;
              }
              .table-container {
                margin-top: 20px;
              }
              .table {
                width: 100%;
                border-collapse: collapse;
              }
              .table th,
              .table td {
                border: 1px solid #ddd;
                padding: 8px;
                text-align: left;
              }
              .table th {
                background-color: #f2f2f2;
              }
            </style>
            <div class="container">
              <div class="header">
                <h1>New Contact Form Submission</h1>
              </div>
              <div class="table-container">
                <table class="table">
                  <tr>
                    <th>Name</th>
                    <td>${name}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>${email}</td>
                  </tr>
                  <tr>
                    <th>Mobile</th>
                    <td>${mobile}</td>
                  </tr>
                  <tr>
                    <th>Message</th>
                    <td>${message}</td>
                  </tr>
                </table>
              </div>
            </div>
          `,
        };

        // Send the email using Nodemailer
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error('Failed to send email:', error.message);
            return res.status(500).json({ message: 'Failed to send email' });
          }
          console.log('Email sent: ' + info.response);
        });

        // Respond with saved contact details
        res.status(201).json(savedContact);
      } catch (error) {
        console.error('Failed to save contact:', error.message);
        res.status(500).send('Internal Server Error');
      }
      break;

    default:
      res.status(405).send('Method Not Allowed');
  }
}
