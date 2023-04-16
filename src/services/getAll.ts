import openDB from "../database/sqlite";
import { Database } from "sqlite";

async function getAll(): Promise<{ nome: string | any}> {
  try {
    const db: Database = await openDB();
    const result: { nome: string }| any= await db.get("SELECT nome FROM alunos");
    return result;
  } catch (error) {
    throw(error);
  }
}

export default getAll;