import mongoose from "mongoose";
import connectDB from "@/utils/db";
import nodemailer from "nodemailer";

connectDB();

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
          text: `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${message}`,
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
