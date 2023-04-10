import { Request, Response } from "express";
import deletarAluno from "../services/AlunosServices/deletarAluno";
import inserirAluno from "../services/AlunosServices/inserirAluno";
import listarAlunos from "../services/AlunosServices/listarAlunos";

class AlunosController {
  constructor() {}

  async getAlunos(req: Request, res: Response): Promise<void> {
    const alunos = await listarAlunos();
    console.log(alunos);
    res.end(JSON.stringify(alunos));
  }

  async inserirAluno(req: Request, res: Response): Promise<void> {
    const aluno = req.body;
    console.log(aluno.nome);
    const alunoInserido = await inserirAluno(aluno);
    res.end(JSON.stringify(aluno));
  }

  async excluirAluno(req: Request, res: Response): Promise<void> {
    const aluno = req.body;
    const alunoExcluido = await deletarAluno(aluno);
    res.end(alunoExcluido);
  }
}

export default new AlunosController();