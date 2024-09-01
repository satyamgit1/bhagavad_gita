// src/pages/api/test-db.js
import clientPromise from '../../utils/mongodb';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db('myDatabase');
    await db.command({ ping: 1 });
    res.status(200).json({ message: 'Successfully connected to the database' });
  } catch (error) {
    console.error('Database connection failed:', error);
    res.status(500).json({ message: 'Failed to connect to the database', error: error.message });
  }
}
