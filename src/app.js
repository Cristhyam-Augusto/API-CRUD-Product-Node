// Carrega o módulo do express
const express = require("express");
//Carrega o módulo da pasta routes
const routes = require("./routes");
//Inicializa o servidor express
const app = express();
//Analisa as solicitações JSON recebidas e coloca os dados analisados ​​em arquivos req.body.
//É usada para configurar o suporte a dados em formato JSON na aplicação Express.
//Ele adiciona o middleware JSON à pilha de middleware da aplicação usando o método app.use(). Assim, todas as requisições HTTP subsequentes serão passadas por este middleware, que irá analisar o corpo da requisição em busca de dados JSON e os converte em um objeto JavaScript acessível através da propriedade req.body.
app.use(express.json());

app.use(routes);
module.exports = app;
