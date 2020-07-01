const express = require("express");

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
    .connect(
        "mongodb+srv://frontcast-todo:XPUeiwOPdwlv9X9R@jasondevconnector-xi2qh.mongodb.net/frontcast-todo?retryWrites=true&w=majority"
    )
    .then(() => {
        app.listen(3100);
    })
    .catch((err) => {
        console.log(err);
    });