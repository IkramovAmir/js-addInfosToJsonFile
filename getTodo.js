import fs from "fs";

(function () {
    try {
        let [, , command] = process.argv;
        let listTodos = JSON.parse(fs.readFileSync("db/addTodo.json", "utf-8"));

        if (process.argv.length == 2) {
            console.log(listTodos);
        } else if (process.argv.length == 3) {
            for (let todo of listTodos) {
                if (todo.userId == command) {
                    console.log(todo);
                }
            }
        }
    } catch (error) {
        console.error("Xatolik yuz berdi:", error.message);
    }
}());

// commands
// 1.node getTodo  (for all)
// 2.node getTodo userId