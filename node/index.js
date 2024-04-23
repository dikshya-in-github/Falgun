// console.log("js connected");
// console.log(__filename);
// console.log(__dirname);

const fs = require("fs");
// const bcrypt = require("bcrypt");
const signup = require("./auth")

fs.writeFileSync("custom.txt", "Hello World");

// let DB = [];

/* //Asychronous
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
  signup("shyam", "password"); */

/* //Asychronous to Sychronous
  async function signup(username, myPlaintextPassword) {
    let saltRounds = 10;
    let hashedPw = await bcrypt.hash(myPlaintextPassword, saltRounds);
    let user = {
      username,
      password: hashedPw,
    };
    DB.push(user);
  }

  async function auth(){
      await signup("ram", "123456");
      await signup("shyam", "password");

      console.log({DB});
  }

  auth() */

async function auth(){
  await signup("ram", "123456");
  await signup("shyam", "password");
}

auth()
