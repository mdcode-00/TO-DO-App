import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import todoRouter from './routes/to-do.routes.js';

dotenv.config();

const app = express();

app.use(express.json());

connectDB();


app.use('/api', todoRouter);


const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

/////