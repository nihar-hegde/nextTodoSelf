import mongoose from "mongoose";

let isConnected = false;

export const connectToDb = async()=>{
    mongoose.set('strictQuery',true);
    if(!process.env.MONGODB_URI) return console.log("Mongodb url not found");
    if(isConnected) return console.log("mongodb already connected");

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        isConnected =true;
        console.log("connection to Mongodb successfull");
    } catch (error) {
        console.log("Error while connecting to mongodb uri",error);
        
    }
}