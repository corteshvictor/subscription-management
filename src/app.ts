import express from "express";
import { pinoHttp } from "pino-http";

const app = express();

app.use(express.json());
app.use(pinoHttp());

app.get("/", (_req, res) => {
  res.send({ message: "Hello World!" });
});

export default app;
