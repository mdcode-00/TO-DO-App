import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import todoRouter from './routes/to-do.routes.js';
import cors from 'cors';

dotenv.config();

const app = express();



app.use(express.json());
app.use(cors());

connectDB();


app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}))

app.use('/api', todoRouter);


const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

/////