const bcrypt = require("bcrypt");

let DB = [];

async function signup(username, myPlaintextPassword) {
  let saltRounds = 10;
  let hashedPw = await bcrypt.hash(myPlaintextPassword, saltRounds);
  let user = {
    username,
    password: hashedPw,
  };
  console.log(user);
  DB.push(user);
}

module.exports = signup;
