import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import rateLimit from 'express-rate-limit';
import errorMiddleware from "./middlewares/ErrorMiddleware";

dotenv.config()

const app = express();

app.use(cors());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

app.use(bodyParser.json());

import storyGenerator from "./routes";
app.use("/api", storyGenerator);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})

export default server;