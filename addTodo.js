import fs from "fs";

let users = JSON.parse(fs.readFileSync("db/addUser.json", "utf-8"));
let todos = JSON.parse(fs.readFileSync("db/addTodo.json", "utf-8"));
console.log(process.argv)

;(function () {
        let [, , userId, ...t] = process.argv;
        if (!users.some(user => user.id == userId)) throw new Error("User is not found!")
        if (process.argv.length >= 4) {
            todos.push({
                id: todos.length + 1,
                userId,
                title: t.join(" ")
            });
        }else throw new Error("Enter userID and title. Try again!");

        fs.writeFileSync("db/addTodo.json", JSON.stringify(todos, null, 4));
        console.log("Added successfully!")
}());