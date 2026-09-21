import express, { type Request, type Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.json("Servidor iniciado");
});

app.listen(3000, () => {
  console.log("Servidor escuchando");
});
