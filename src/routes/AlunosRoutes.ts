import { Router } from "express";

export const AlunosController = require("../controllers/AlunosController");
export const {
  AuthMiddleware,
  ManagerMiddleware,
} = require("../middlewares/AuthMiddleware");

export const roteador = Router();

roteador.get(
  "/alunos",
  AuthMiddleware,
  ManagerMiddleware,
  AlunosController.getAlunos
);

roteador.post("/aluno", AlunosController.inserirAluno);

roteador.delete("/aluno", AlunosController.excluirAluno);
export default roteador;

