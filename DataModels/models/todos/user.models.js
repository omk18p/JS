// Importing mongoose (used to define schemas and interact with MongoDB)
import mongoose from 'mongoose';

// Define the schema (structure) for the User collection
const userSchema = new mongoose.Schema(
  {
    // Username field
    username: {
      type: String,        // Data type is String
      required: true,      // This field must be provided
      unique: true,        // No two users can have the same username
      lowercase: true      // Automatically convert input to lowercase
    },

    // Email field
    email: {
      type: String,        // Data type is String
      required: true,      // This field must be provided
      unique: true,        // Ensures email is unique for each user
      lowercase: true      // Normalize email to lowercase
    },

    // Password field
    password: {
      type: String,        // Data type is String
      required: true       // This field must be provided
      // Note: You should hash this password before saving it to the DB
    }
  },

  // Options object
  {
    timestamps: true       // Adds createdAt and updatedAt fields automatically
  }
);

// Create and export the User model based on the schema
export const User = mongoose.model('User', userSchema);


// ✅ What's happening here:
// mongoose.model('User', userSchema):
// Registers a Mongoose model called "User" using the schema you defined.
// Mongoose automatically links it to a MongoDB collection called users (lowercased, pluralized)