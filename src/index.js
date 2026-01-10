 

import dotnenv from "dotenv";

import {connectDB} from "../db/index.js";





dotnenv.config(
    { path: './.env' }  
);


connectDB()

