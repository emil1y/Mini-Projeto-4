// Importa a função uuidv4 do pacote 'uuid' para gerar IDs únicos
import { v4 as uuidv4 } from "uuid";

// Lista de alimentos naturais
export const naturais = [
  {
    id: uuidv4(), // Gera um ID único para o alimento
    nome: "Cenoura", // Nome do alimento
    caloria: 41, // Valor calórico por 100g
    quantidade_padrao: "100g", // Quantidade de referência
    proteinas: "0.9g", // Quantidade de proteínas
    carboidratos: "9.6g", // Quantidade de carboidratos
    lipidios: "0.2g" // Quantidade de gorduras (lipídios)
  },
  {
    id: uuidv4(),
    nome: "Banana",
    caloria: 89,
    quantidade_padrao: "100g",
    proteinas: "1.1g",
    carboidratos: "22.8g",
    lipidios: "0.3g"
  },
  {
    id: uuidv4(),
    nome: "Maçã",
    caloria: 52,
    quantidade_padrao: "100g",
    proteinas: "0.3g",
    carboidratos: "14g",
    lipidios: "0.2g"
  },
  {
    id: uuidv4(),
    nome: "Abobrinha",
    caloria: 17,
    quantidade_padrao: "100g",
    proteinas: "1.2g",
    carboidratos: "3.1g",
    lipidios: "0.3g"
  }
];

// Lista de alimentos transgênicos
export const transgenicos = [
  {
    id: uuidv4(),
    nome: "Milho transgênico",
    caloria: 96,
    quantidade_padrao: "100g",
    proteinas: "3.4g",
    carboidratos: "21g",
    lipidios: "1.2g"
  },
  {
    id: uuidv4(),
    nome: "Soja transgênica",
    caloria: 446,
    quantidade_padrao: "100g",
    proteinas: "36g",
    carboidratos: "30g",
    lipidios: "20g"
  },
  {
    id: uuidv4(),
    nome: "Óleo de canola transgênico",
    caloria: 884,
    quantidade_padrao: "100g",
    proteinas: "0g",
    carboidratos: "0g",
    lipidios: "100g"
  },
  {
    id: uuidv4(),
    nome: "Pipoca industrializada",
    caloria: 510,
    quantidade_padrao: "100g",
    proteinas: "7g",
    carboidratos: "60g",
    lipidios: "30g"
  }
];

// Lista de alimentos que contêm alérgenos
export const alergenos = [
  {
    id: uuidv4(),
    nome: "Pão de trigo",
    caloria: 265,
    quantidade_padrao: "100g",
    proteinas: "9g",
    carboidratos: "49g",
    lipidios: "3.2g",
    alergenos: "glúten" // Especifica o alérgeno presente
  },
  {
    id: uuidv4(),
    nome: "Leite de vaca",
    caloria: 42,
    quantidade_padrao: "100ml",
    proteinas: "3.4g",
    carboidratos: "5g",
    lipidios: "1g",
    alergenos: "lactose"
  },
  {
    id: uuidv4(),
    nome: "Ovo",
    caloria: 155,
    quantidade_padrao: "100g",
    proteinas: "13g",
    carboidratos: "1.1g",
    lipidios: "11g",
    alergenos: "ovo"
  },
  {
    id: uuidv4(),
    nome: "Camarão",
    caloria: 99,
    quantidade_padrao: "100g",
    proteinas: "24g",
    carboidratos: "0.2g",
    lipidios: "0.3g",
    alergenos: "frutos do mar"
  }
];
