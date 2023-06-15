import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongo connected: ${connection.host}`);
  } catch (error) {
    console.log(`Error in db connection: ${error.message}`);
    process.exit(1);
  }
};

export default connectDb;
