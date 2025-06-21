let fs = require("fs");
let filePath = "addUser.json";

let arrUser = fs.existsSync(filePath)
  ? JSON.parse(fs.readFileSync(filePath, "utf8"))
  : [];

(function () {
    let [, , command] = process.argv;
    if (command) {
        arrUser.push({
            id: arrUser.length + 1,
            name: command
        });
        fs.writeFileSync("addUser.json", JSON.stringify(arrUser, null, 4));
        console.log("Added successfully!");
    } else {
        console.log("Enter a name.");
    }
})();
