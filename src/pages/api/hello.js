// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from "@/utils/db"
// const authRoutes = require('./routes/auth.routes');

connectDB();


app.use('/api/auth', authRoutes);

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
