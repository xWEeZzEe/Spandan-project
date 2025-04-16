import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dbconn from './database/dbconn.js';
import { errorMiddleware } from './middleware/error.js';
import userRouter from './Routes/userRoute.js';
import eventRouter from './Routes/eventRoute.js';
import soloEventRouter from './Routes/soloEventRoute.js';
import groupEventRouter from './Routes/groupEventRoute.js';
import contactRouter from './Routes/contactRoute.js';

// Import your User model here (optional, for DB check route)
import User from './Models/userSchema.js';

const app = express();

// Load env variables
dotenv.config({ path: './config/config.env' });

// CORS setup
app.use(cors({
  origin: [process.env.PORTFOLIO_URL],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  credentials: true,
}));

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ---------- ✅ Base Route for Health Check ----------
app.get('/', (req, res) => {
  res.send('✅ Backend is Live & Running!');
});

// ---------- ✅ Optional Route to Test DB Connectivity ----------
app.get('/test-db', async (req, res) => {
  try {
    const count = await User.countDocuments();
    res.send(`✅ DB Connected. Total Users: ${count}`);
  } catch (err) {
    res.status(500).send(`❌ DB Connection Error: ${err.message}`);
  }
});

// ---------- Routes ----------
app.use('/api/v2/user', userRouter);
app.use('/api/v2/event', eventRouter);
app.use('/api/v2/solo', soloEventRouter);
app.use('/api/v2/group', groupEventRouter);
app.use('/api/v2/send', contactRouter);

// ---------- MongoDB Connection ----------
dbconn();

// ---------- Error Handling Middleware ----------
app.use(errorMiddleware);

export default app;
