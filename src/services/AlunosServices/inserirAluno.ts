import { execQuery } from "../execQuery";
export function inserirAluno(aluno: any) {
  try {
    const resultado =  execQuery(
      `INSERT into alunos VALUES ('${aluno.nome}')`
    );
  } catch (erro) {
    console.log(erro);
  }
}

module.exports = inserirAluno;
