// 1. CommonJS (CJS)
// This is the older and default module system in Node.js.

// You use require() to load modules.

// You export things using module.exports.

// 🧩 Think of it like:

// “I’m requiring (pulling) a file into this one, and I export things from this file if I want others to use them.”

// ✅ Used in:

// Most traditional Node.js projects

// Libraries and backend code since the early days

// Example:
// js
// Copy
// Edit
// const express = require('express'); // import
// module.exports = myFunction;       // export
// 2. ES Modules (ESM)
// This is the modern JavaScript module system, like what browsers use.

// You use import to bring in modules.

// You use export to share functions, classes, or variables.

// 🔗 This system is more structured and native to JS, especially when writing frontend + backend projects.

// But in Node.js, it needs a bit of setup:

// Either name your file with .mjs, or

// In package.json, add "type": "module"

// Example:
// js
// Copy
// Edit
// import express from 'express';  // import
// export default myFunction;      // export
// ⚠️ You Can't Mix Them Directly
// You can't use import in a file unless Node knows you’re using ES Modules. That’s why:

// You either switch to .mjs extension

// Or add "type": "module" in your package.json

// 🧾 Summary in Words
// CommonJS is the classic Node style using require(), great for backward compatibility.

// ES Modules use import/export, and are better if you're using modern JS or working on full-stack apps with frameworks like React.

// Choose one and stick with it in a project to avoid confusion and errors.




// 💡 What is Axios?
// Axios is a promise-based HTTP client for Node.js and the browser.
// It helps you:
// Make HTTP requests (GET, POST, PUT, DELETE, etc.)
// Handle responses and errors easily
// Send data to and receive data from servers
// const axios = require('axios');

// axios.get('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => {
//     console.log(response.data);  // logs the data
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });
//   🔄 Here's a Breakdown:
//   1. In the Browser:
//   Axios replaces the built-in fetch() function.
  
//   Example with fetch:
//   js
//   Copy code
//   fetch('https://api.example.com/data')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.error(err));
//   Same with axios:
//   js
//   Copy code
//   axios.get('https://api.example.com/data')
//     .then(res => console.log(res.data))
//     .catch(err => console.error(err));
//   Axios is easier to use than fetch because:
//   You don’t need to manually parse JSON
//   Better error handling
//   Cleaner syntax with async/await




// 🌐 What is CORS?
// CORS stands for Cross-Origin Resource Sharing.

// It's a security feature built into web browsers that restricts web pages from making requests to a different domain than the one they came from — unless the server allows it.

// 🔥 Real-World Example:
// You're building a frontend on:

// arduino
// Copy code
// http://localhost:3000
// And your backend (Express server) is on:

// arduino
// Copy code
// http://localhost:5000
// When the frontend tries to make an API request to the backend, the browser blocks it unless the backend explicitly says:

// “Hey, it's okay for localhost:3000 to talk to me.”

// This is where CORS comes in.

// 🚫 What Happens Without CORS?
// You'll see an error like:

// pgsql
// Copy code
// Access to fetch at 'http://localhost:5000/data' from origin 'http://localhost:3000' has been blocked by CORS policy
// ✅ How to Fix CORS in Express
// Just use the cors middleware!

// Step 1: Install it
// bash
// Copy code
// npm install cors
// Step 2: Use it in your Express app
// js
// Copy code
// const express = require('express');
// const cors = require('cors');

// const app = express();

// // Enable CORS for all routes
// app.use(cors());

// app.get('/', (req, res) => {
//   res.send('Hello from server with CORS enabled');
// });

// app.listen(5000, () => {
//   console.log('Server running on port 5000');
// });
// 🔐 Want to Allow Only Specific Origins?
// js
// Copy code
// app.use(cors({
//   origin: 'http://localhost:3000'  // Only allow this origin
// }));
// 💡 Summary
// CORS is a browser security feature.

// It blocks requests between different origins unless allowed.

// You fix it on the backend using the cors package.

// It’s very common in full-stack development (React frontend + Express backend).




// 🔁 How to Set Up a Proxy in Vite
// Instead of adding "proxy" to package.json like in CRA, Vite uses a vite.config.js file for this.

// 🛠️ Steps to Add Proxy in Vite
// 1. Go to your Vite project and open/create vite.config.js
// If you used TypeScript, the file will be vite.config.ts.

// 2. Add this proxy config:
// js
// Copy code
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api': {
//         target: 'http://localhost:5000',  // Your Express backend URL
//         changeOrigin: true,
//         secure: false
//       }
//     }
//   }
// });
// ✅ What This Does
// Any request starting with /api from the React app (e.g. /api/jokes) is automatically forwarded to http://localhost:5000/api/jokes

// Helps you avoid CORS and write clean API calls

// 📦 Example Axios Call in Vite + React
// js
// Copy code
// import axios from 'axios';

// axios.get('/api/jokes')
//   .then(res => {
//     console.log(res.data);
//   })
//   .catch(err => {
//     console.error('Error:', err);
//   });
// Let me know if you want to test it out live, deploy it, or connect your backend & frontend now. I can guide you step-by-step!

