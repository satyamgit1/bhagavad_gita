
// // db.js
// import mongoose from 'mongoose';

// let isConnected;

// const connectDB = async () => {
//   if (isConnected) {
//     console.log('Using existing database connection');
//     return;
//   }

//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//     });
//     console.log('Connected to MongoDB');
//     isConnected = true;
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//     process.exit(1); // Exit the process with an error
//   }
// };

// export default connectDB;


// src/utils/mongodb.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MongoDB URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
