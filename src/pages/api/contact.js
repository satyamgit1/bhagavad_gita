import mongoose from "mongoose";
import clientPromise from "@/utils/mongodb";
import nodemailer from "nodemailer";

async function connectDB() {
  const client = await clientPromise;
  const db = client.db();

  if (!mongoose.connection.readyState) {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
  return db;
}

// Call connectDB at the top of your handler
connectDB();

// Create a Contact Us schema
const contactUsSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  message: String,
});

const ContactUs =
  mongoose.models.ContactUs || mongoose.model("ContactUs", contactUsSchema);

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export default async function handler(req, res) {
  await connectDB(); // Ensure the database is connected

  switch (req.method) {
    case "GET":
      try {
        const contacts = await ContactUs.find();
        res.status(200).json(contacts);
      } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
      }
      break;
    case "POST":
      try {
        const { name, email, mobile, message } = req.body;
        const newContact = new ContactUs({ name, email, mobile, message });
        const savedContact = await newContact.save();

        // Send email
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.DESTINATION_EMAIL,
          subject: "New Contact Form Submission",
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

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        });

        res.status(201).json(savedContact);
      } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
      }
      break;
    default:
      res.status(405).send("Method Not Allowed");
  }
}
