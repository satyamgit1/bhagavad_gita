
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
// import { MongoClient } from 'mongodb';

// const uri = process.env.MONGODB_URI;
// const options = {};

// let client;
// let clientPromise;

// if (!process.env.MONGODB_URI) {
//   throw new Error('Please add your MongoDB URI to .env.local');
// }

// if (process.env.NODE_ENV === 'development') {
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }

// export default clientPromise;


import { MongoClient } from 'mongodb';

// Ensure MongoDB URI is in the environment variables
const uri = process.env.MONGODB_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let clientPromise;

// Check if the MongoDB URI is defined in the environment variables
if (!uri) {
  throw new Error('Please add your MongoDB URI to .env.local');
}

// If we're in development mode, use a global variable to reuse the connection (helps with hot reloading in Next.js)
if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, we don't want to reuse connections, so we create a new client for each request
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
