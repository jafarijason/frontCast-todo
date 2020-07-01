const express = require('express');
const todoContollers = require('../controllers/todo-controllers')

const router = express.Router()


router.get("/", todoContollers.getTodos);

router.post('/', todoContollers.createTodo)

module.exports = router