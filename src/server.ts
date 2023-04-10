import dotenv from "dotenv";
import express from "express";
import roteadorAlunos from "./routes/AlunosRoutes";
import roteadorStatic from "./routes/StaticRoutes";

dotenv.config({
  path: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env",
});

const port: number = Number(process.env.PORT);
const app: express.Application = express();

app.use(express.json());
app.use("/public", express.static(`${__dirname}/public`));

app.use(roteadorAlunos);
app.use(roteadorStatic);

app.listen(port, function () {
  console.log(`Servidor funcionando na porta ${port}`);
});