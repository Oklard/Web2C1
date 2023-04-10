import { getAll } from "../execQuery";
export function listarAlunos() {
  try {
    const result =  getAll("SELECT nome FROM alunos");
    return result;
  } catch (error) {
    console.log(error);
  }
}

module.exports = listarAlunos;
