import express from "express";
import cors from "cors";
import "dotenv/config";
import todoRouter from "./routes/todoRoutes.js";

//app config
const app = express();
const port = process.env.PORT || 4000;

//middlewares
app.use(express.json());
app.use(cors());

//api endpoints
app.use("/api/task", todoRouter);

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => console.log("Server Started ", port));
