import fs from "fs";

(function () {
    try {
        let [, , command] = process.argv;
        let listTodos = JSON.parse(fs.readFileSync("db/addTodo.json", "utf-8"));

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