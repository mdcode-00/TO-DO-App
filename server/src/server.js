import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();

const app = express();

connectDB();

// Example route
app.get("/", (req, res) => {
  res.send("MongoDB connection successful ✅");
});


const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

/////