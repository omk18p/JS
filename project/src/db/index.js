// Importing mongoose, which is an Object Data Modeling (ODM) library for MongoDB.
// It provides a schema-based solution to model your application data.
import mongoose from "mongoose";

// Importing your constant database name from a centralized config/constants file.
// This helps avoid hardcoding and keeps the DB name easily manageable.
import { DB_NAME } from "../constants.js";

// Creating an asynchronous function named connectDB
// This will connect your app to MongoDB using the mongoose library.
const connectDB = async () => {
    try {
        // Attempt to connect to MongoDB using the URI and database name from your .env and constants
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );

        // Logging a success message with the host info (useful for debugging or logs)
        console.log(`\n✅ MongoDB connected!! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        // If the connection fails, catch the error and print a descriptive message
        console.log("❌ MONGODB connection FAILED:", error);

        // Exit the process with status code 1 (indicates failure)
        process.exit(1);
    }
};

// Exporting the function as the default export
// This allows you to import and call `connectDB()` in your main server file
export default connectDB;
