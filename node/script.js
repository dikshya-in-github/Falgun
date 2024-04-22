// console.log("js connected");
// console.log(__filename);
// console.log(__dirname);

const fs = require("fs");
const bcrypt = require("bcrypt");
const { log } = require("console");

fs.writeFileSync("custom.txt", "Hello World");

let DB = [];

function signup(username, myPlaintextPassword) {
  let saltRounds = 10;
  bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
    let user = {
        username,
        password: hash,
    }
    DB.push(user);
    console.log(user);
    });
}

signup("ram", "123456");
