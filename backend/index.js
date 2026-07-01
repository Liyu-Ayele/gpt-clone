import "dotenv/config";

import express from "express";
import cors from "cors";
import db from "./db/db_config.js";
import { errorHandler } from "./src/middleware/error-handler.js";
import mainRouter from "./src/api/main.route.js";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:5175",
      "http://localhost:5176",
      "https://gpt-clone-kappa-six.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use("/api", mainRouter);

app.use(errorHandler);

async function startServer() {
  try {
    const connection = await db.getConnection();
    connection.release();

    const PORT = process.env.PORT || 3888;

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
}

startServer();