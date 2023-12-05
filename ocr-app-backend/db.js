import mongoose from 'mongoose';

// mongodb://localhost:27017/ocrDB
// mongodb+srv://anirudhsharma221b:An1rudh96@ocrdata.vufnbfq.mongodb.net/ocrDB

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/ocrDB");

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    process.exit(1);
  }
};

export default connectDB;
