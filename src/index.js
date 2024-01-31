import express from "express";
import volleyball from "volleyball";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";

import authRouter from "./routes/userRoute";
import subredditRouter from "./routes/subredditRoute";
import postRouter from "./routes/postRoute";

const app = express();
const port = process.env.PORT;

app.use(volleyball);
app.use(cors());

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.DATABASE_URL);
  console.log("[📡 DATABASE] - Connected");
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", authRouter);
app.use("/", subredditRouter);
app.use("/", postRouter);

app.get("/", (req, res) => {
  res.send("reddit-like-back");
});

app.listen(port, () => {
  console.log(`Reddit-Like Back running: http://localhost:${port}`);
});
