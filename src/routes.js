//Importação do módulo Router do pacote "express".
const { Router } = require("express");
//Importação dos módulos ProductModel
const ProductController = require("./Constrollers/ProductController");
//Inicialização da função routes
const routes = Router();
//Cria uma rota GET na URL "/health" que retorna um objeto JSON com uma mensagem.
//O método get é um método HTTP que é usado para solicitar informações a partir de um recurso da web.
routes.get("/health", (req, res) => {
  return res.status(200).json({ message: "server is on..." });
});

routes.post("/products", ProductController.store);
routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.show);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.destroy);

module.exports = routes;
