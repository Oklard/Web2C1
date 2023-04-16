import { Router } from "express";
export const BuildPath = require("../utils/BuildPath");

export const roteador = Router();

roteador.get("/", async function (req, res) {
  res.sendFile(`${BuildPath(__dirname)}/views/index.html`);
});

roteador.get("*", async function (req, res) {
  res.sendFile(`${BuildPath(__dirname)}/views/404.html`);
});
export default Router;