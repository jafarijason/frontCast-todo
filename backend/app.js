const express = require("express");

const bodyParser = require("body-parser");

const todoRoutes = require("./routes/todo-routes");

const app = express();

app.use(bodyParser.json());

app.use("/api/todo", todoRoutes);

app.listen(3100);