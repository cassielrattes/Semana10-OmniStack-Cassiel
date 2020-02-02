const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const routes = require("./routes");
const { setupWebSocket } = require("./websocket");

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect("your MongoDB connection", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(5000);

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

// Query Params: request.query (Filtros, Ordenação, Paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body:         request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)
