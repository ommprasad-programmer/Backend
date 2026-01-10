import mongoose from "mongoose";
import { DB_NAME } from "../src/constant.js";
import express from "express";


const app = express();


 const connectDB = async () => {
    try {

      const connectionInstance =  await mongoose.connect(`${process.env.DB_URI}`);
      console.log(`Database connected . DB HOST ${connectionInstance.connection.host}`);

   
        
    } catch (error) {
        console.error('ERROR : ' , error);
        
          process.exit(1);
        
    }

 }

    export {connectDB};