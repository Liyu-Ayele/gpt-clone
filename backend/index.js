import 'dotenv/config';

import express from "express";
import cors from "cors";
import db from "./db/db_config.js";
import { errorHandler } from './src/middleware/error-handler.js';

import mainRouter from "./src/api/main.route.js";

const app = express();
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175', 'http://localhost:5176'],
  credentials: true
}));

app.use(express.json());
app.use('/api', mainRouter);
app.use(express.json());
app.use('/api', mainRouter);

// final middleware for error handling
app.use(errorHandler)

async function startServer() {
  try{
    const connection = await db.getConnection();
    connection.release();

  app.listen(3888, (err) => {
    if (err) {
      throw err;
    }
  console.log("Server is running on port http://localhost:3888");
});
} catch (error) {
  console.error("Error starting the server:", error);
}
}

startServer();  