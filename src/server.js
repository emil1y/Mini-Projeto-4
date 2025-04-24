// Importa o framework Express para criar o servidor HTTP
import express from "express";

// Importa os dados dos alimentos das três categorias (naturais, transgênicos e alérgenos)
import { naturais, transgenicos, alergenos } from "./data.js";

// Cria uma instância do aplicativo Express
const app = express();

// Define a porta onde o servidor vai rodar
const port = 3000;

// Rota raiz (http://localhost:3000/)
// Quando acessada, retorna uma mensagem simples
app.get("/", (req, res) => {
    res.send("Olá mundo!"); // Envia resposta em texto plano
});

// Rota /naturais (http://localhost:3000/naturais)
// Retorna uma lista de produtos naturais no formato JSON
app.get("/naturais", (req, res) => {
    res.status(200).json({ produtos_naturais: naturais });
});

// Rota /transgenicos (http://localhost:3000/transgenicos)
// Retorna uma lista de produtos transgênicos no formato JSON
app.get("/transgenicos", (req, res) => {
    res.status(200).json({ produtos_transgenicos: transgenicos });
});

// Rota /alergenos (http://localhost:3000/alergenos)
// Retorna uma lista de produtos com alérgenos no formato JSON
app.get("/alergenos", (req, res) => {
    res.status(200).json({ produtos_alergenos: alergenos });
});

// Inicia o servidor na porta especificada
// Exibe no terminal a URL onde o servidor está rodando
app.listen(port, () => {
    console.log(`Servidor rodando no endereço http://localhost:${port}`);
});
