let fs = require("fs");
let filePath = "addTodo.json";

let addTodos = fs.existsSync(filePath)
    ? JSON.parse(fs.readFileSync(filePath, "utf8"))
    : [];

;(function () {
    if (process.argv.length >= 4) {
        let [, , userId, ...t] = process.argv;
        addTodos.push({
            id: addTodos.length + 1,
            userId,
            title: t.join(" ")
        });
        fs.writeFileSync("addTodo.json", JSON.stringify(addTodos, null, 4));
        console.log("Added successfully!")
    } else console.log("Enter userID and title. Try again!");
}());