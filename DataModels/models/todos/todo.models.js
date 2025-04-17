// Import mongoose for schema definition and database operations
import mongoose from 'mongoose';

// Define the schema for the "Todo" collection
const todoSchema = new mongoose.Schema(
  {
    // The actual task or content of the todo item
    content: {
      type: String,       // Must be a string
      required: true      // This field is required
    },

    // Status of the todo task (whether it is completed or not)
    complete: {
      type: Boolean,      // Boolean value: true or false
      default: false      // Defaults to false when a new todo is created
    },

    // The user who created this todo
    createdBy: {
      type: mongoose.Schema.Types.ObjectId, // Stores a reference to another document
      ref: 'User'                           // Refers to the User model
    },

    // Array of sub-todo IDs associated with this main todo
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId, // Stores a reference to each sub-todo
        ref: 'SubTodo'                        // Refers to the SubTodo model
      }
    ]
  },

  // Automatically add createdAt and updatedAt fields to each document
  { timestamps: true }
);

// Create and export the model based on the schema
// 'Todo' is the name of the model and collection will be named 'todos'
export const Todo = mongoose.model('Todo', todoSchema);
