import fs from "fs";

let users = JSON.parse(fs.readFileSync("db/addUser.json", "utf-8"));
let todos = JSON.parse(fs.readFileSync("db/addTodo.json", "utf-8"));
if (users.length == 0 && todos.length == 0) throw new Error("No infos to update!");
;
(function () {
    let [, , command1, command2, command3] = process.argv;
    if (!users.some(user => user.id == command2)) throw new Error("User is not found or check commands queue!");
    if (command1 == "todo") {
        if (!todos.some(values => values.id == command3)) throw new Error("Todo is not found or check commands queue!");
        todos.splice(todos.findIndex(t => t.userId == command2 && t.id == command3), 1);
        fs.writeFileSync("db/addTodo.json", JSON.stringify(todos, null, 4));
    } else if (command1 == "user") {
        users.splice(users.findIndex(a => a.id == command2), 1);
        let newTodos = [];
        for (let val of todos) {
            if (val.userId != command2) {
                newTodos.push(val);
            };
        };
        fs.writeFileSync("db/addTodo.json", JSON.stringify(newTodos, null, 4));
        fs.writeFileSync("db/addUser.json", JSON.stringify(users, null, 4));
    };
}());


// commands
// 1.node delete user userId
// 2.node delete todo userId id

