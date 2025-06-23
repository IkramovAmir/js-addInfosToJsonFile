import fs from "fs";

let users = JSON.parse(fs.readFileSync("db/addUser.json", "utf-8"));
let todos = JSON.parse(fs.readFileSync("db/addTodo.json", "utf-8"));

if (users.length == 0 && todos.length == 0) throw new Error("No infos to update!");

;
(function () {
    let [, , command1, command2, command3, command4] = process.argv;
    if (!users.some(user => user.id == command2)) throw new Error("User is not found!");
    if (command1 == "user") {
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == command2) {
                users[i].name = command3;
                break;
            };
        };
        fs.writeFileSync("db/addUser.json", JSON.stringify(users, null, 4));
    } else if (command1 == "todo") {
        if (!todos.some(values => values.id == command3)) throw new Error("Todo is not found!");
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].userId == command2 && todos[i].id == command3) {
                todos[i].title = command4;
                break;
            };
        };
        fs.writeFileSync("db/addTodo.json", JSON.stringify(todos, null, 4));
    };
}())

// Commands
// 1.node update user userId newName
// 2.node update todo userId id newTitle