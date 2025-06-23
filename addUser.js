import fs from "fs";
let users = JSON.parse(fs.readFileSync("db/addUser.json", "utf-8"));
(function () {
    let [, , command] = process.argv;
    if (command) {
        users.push({
            id: users.length + 1,
            name: command
        });
        if (!isNaN(Number(command))) {
            throw new Error("enter string")
        }
        fs.writeFileSync("db/addUser.json", JSON.stringify(users, null, 4));
        console.log("Added successfully!");
    } else {
        throw new Error("Enter a name!");
    };
})();