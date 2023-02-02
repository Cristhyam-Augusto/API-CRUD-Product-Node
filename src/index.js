//Importação do módulo na pasta .app
const app = require("./app");
//Importação do módulo index
const Loaders = require("./loaders/index");
//Inicializa o módulo Loaders
Loaders.start();
//Ouvinte de eventos da porta 3333
app.listen(3333, () => console.log("server is running"));
