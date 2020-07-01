const express = require("express");

const mongoStringConnect = require('./mongostringConnect')

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const todoRoutes = require("./routes/todo-routes");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    res.setHeader('Access-Control-Allow-Methods', '*')
    next();
});

app.use("/api/todo", todoRoutes);

mongoose
    .connect(mongoStringConnect)
    .then(() => {
        app.listen(3100);
    })
    .catch((err) => {
        console.log(err);
    });