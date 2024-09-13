const express = require('express');
const app = express();

app.get("/",(req,res) => {
    res.render("index")
})

app.set("view engine", "ejs");

app.get("/clientes",(req,res) => {
    const cliente = [
        {nome: "Ana kuzendorff", cpf: "123.456.789.10", endereco: "Rua São Luis, 79"},
        {nome: "Isabely Lemos", cpf: "693.678.823.06", endereco:"Rua das limeiras, 192"},
        {nome: "Gustavo Lanna", cpf: "731.463.098.67", endereco:"Rua Aracaju, 03"},
        {nome: "Yasmin Pires", cpf: "982.378.432.09", endereco:"Rua Santo Antônio, 232"}
    ];

    res.render("clientes", { cliente:cliente })
})

app.get("/produtos", (req,res) => {
    const produtos = [
        {produto:"Notebook", preco:3450, categoria:"Eletronicos"},
        {produto:"Celular", preco:1980, categoria:"Eletronicos"},
        {produto:"Fones de ouvido", preco:70, categoria:"Acessórios"},
        {produto:"Mouse", preco:75, categoria:"Acessórios"}
    ]
    res.render("produtos")
})

app.get("/pedidos", (req,res) => {
    res.render("pedidos")
})

const port = 4000
app.listen(port, (error) => {
    if (error) {
        console.log(`Ocorreu um erro: ${error}`);
      } else {
        console.log(`Servidor iniciado em http://localhost:${port}`);
      }
})