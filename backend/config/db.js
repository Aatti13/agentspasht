import mongoose from "mongoose";

export const connectDB = async ()=>{
  try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Mongo Connection Successful');
  }catch(error){
    console.error('Error Connecting to DB', error.message);
    process.exit(1);
  }
}