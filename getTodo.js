(function () {
    let [, ,command] = process.argv;
    let listTodos = require("./addTodo.json");
    if (process.argv.length == 2) {
        console.log(listTodos)
    } else if (process.argv.length == 3) {
        for (let todo of listTodos) {
            if (todo.userId == command) {
                console.log(todo)
            }
        }
    };
}());