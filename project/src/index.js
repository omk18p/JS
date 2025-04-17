//src/index.js

// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from './app.js'
// import app from './app.js'
dotenv.config({
    path: './.env'
})



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})









// // Importing DB_NAME from a separate constants.js file.
// // This allows us to keep important variables (like database name) in one place for easy management.
// import { DB_NAME } from "./constants.js";

// // Importing Mongoose, which is an ODM (Object Data Modeling) library for MongoDB and Node.js.
// // It helps us interact with MongoDB using JavaScript objects (models/schemas).
// import mongoose from "mongoose";

// // Importing Express framework to create a web server.
// import express from "express";

// // Initializing the Express app
// const app = express();

// // Immediately Invoked Async Function Expression (IIFE)
// // This function runs immediately after it's defined.
// // We use it here to allow `await` calls at the top level (like for connecting to MongoDB).
// (async () => {
//     try {
//         // Connect to MongoDB using the mongoose library.
//         // `process.env.MONGODB_URI` should contain the cluster URI from your .env file
//         // `DB_NAME` is appended to select the database to use (MongoDB creates it if it doesn't exist)
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         console.log("✅ MongoDB connected successfully");

//         // This is an error listener for the Express app.
//         // If any unexpected error happens at the application level, this will catch and log it.
//         app.on("errror", (error) => { // ⚠️ TYPO HERE: Should be "error" not "errror"
//             console.log("🚨 App Error: ", error);
//             throw error;
//         });

//         // Start the Express server and listen on the port defined in .env (e.g., 8000).
//         // This makes your API accessible to clients.
//         app.listen(process.env.PORT, () => {
//             console.log(`🚀 App is listening on port ${process.env.PORT}`);
//         });

//     } catch (error) {
//         // This block catches any error that occurs in the try block (like DB connection failure).
//         console.error("❌ Startup Error: ", error);

//         // ⚠️ ERROR: You wrote `throw err`, but `err` is not defined.
//         // You should throw the caught `error` instead:
//         throw error;
//     }
// })();


