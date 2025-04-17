//app.js
// src/app.js

import express from "express";
import cors from "cors";    
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN, // Allow requests from this origin
    credentials: true, // Include credentials (like cookies) in requests
})); // Enable CORS for all routes

app.use(express.json({
  limit: "16kb", // Limit the size of incoming JSON requests to 50MB  
})); // Parse incoming JSON requests

app.use(express.urlencoded({
  extended: true,
  limit: "16kb", // Limit the size of incoming URL-encoded requests to 50MB
})); // Parse incoming URL-encoded requests

app.use(express.static("public")); // Serve static files from the "public" directory


app.use(cookieParser()); // Parse cookies from incoming requests

export { app };
