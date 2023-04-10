import { execQuery } from "../execQuery";
export default function deletarAluno(aluno: any) {
  try {
    const 
    resultado = execQuery(
      `DELETE FROM alunos WHERE alunos.nome = '${aluno.nome}'`
    );
  } catch (erro) {
    console.log(erro);
  }
}

