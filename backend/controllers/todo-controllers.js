let todos = [{ title: "Todo Title" }];

const getTodos = (req, res, next) => {
    res.json(todos);
};

const createTodo = (req, res, next) => {
    const title = req.body.title;

    const createdTodo = {
        title: title,
    };

    todos.push(createdTodo);

    res.json(todos);
};

exports.getTodos = getTodos;
exports.createTodo = createTodo;