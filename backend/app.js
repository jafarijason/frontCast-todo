const express = require("express");

const todoRoutes = require('./routes/todo-routes')

const app = express();

app.use('/api/todo', todoRoutes)


app.listen(3100)