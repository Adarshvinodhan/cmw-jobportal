import express from "express";
import cors from "cors";
import "dotenv/config.js";
import connectDB from "./config/dbConfig.js";
import path from "path";
import { fileURLToPath } from 'url'; 
import jobRouter from "./routes/jobRoute.js";

const app = express();
app.use(cors());
app.use(express.json());

// Set up paths for serving static files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the client/dist folder
app.use(express.static(path.join(__dirname, "client", "dist")));

// Define API routes after static file serving
app.use('/', jobRouter);

// Fallback route to serve index.html for single-page application (SPA) routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});
