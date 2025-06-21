const {
    count
} = require("console");

(function () {
    try {
        let [, , command] = process.argv;
        let listTodos = require("./addTodo.json");

        if (process.argv.length == 2) {
            console.log(listTodos);
        } else if (process.argv.length == 3) {
            for (let todo of listTodos) {
                let count = 0;
                if (todo.userId == command) {
                    count++;
                    console.log(todo);
                }
            }
            if (count) console.log("UserId is not found!")
        }
    } catch (error) {
        console.error("Xatolik yuz berdi:", error.message);
    }
}());