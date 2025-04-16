import express from "express";
import cors from "cors";
import "dotenv/config.js";
import connectDB from "./config/dbConfig.js";
import path from "path";
import jobRouter from "./routes/jobRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use('/',jobRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});
