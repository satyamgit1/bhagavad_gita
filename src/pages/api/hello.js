// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from "@/utils/db";

connectDB();

export default function handler(req, res) {
  // Here you can handle different HTTP methods like GET, POST, etc.
  // For now, let's just send a JSON response with a sample data
  res.status(200).json({ name: 'John Doe' });
}
