//For loop
let user1 = {
    name: "ram",
    email: "r@r.com",
    password: "12345678",
}
let user2 = {
    name: "hari",
    email: "hari@hari.com",
    password: "password",
}

function login(user, email, password) {   
    if((email === user.email) && (password ===user.password)){
        console.log("Login successfully");
    }else{
        console.log("Invalid credentails");
    }    
}

login(user1, "r@r.com", "12345678")         // login successfull
login(user1, "r@r.com", "123456")           // invalid credentials
login(user2, "hari@hari.com", "password")   // login successfull




let todos = [
    {
        title: "html",
        status: "complted",
        createdBy: "2023-01-234"
    },
    {
        title: "css",
        status: "complted",
        createdBy: "2021-02-234" 
    },
    {
        title: "js",
        status: "complted",
        createdBy: "2022-03-234" 
    },
    {
        title: "react",
        status: "pending",
        createdBy: "2023-04-234" 
    },
    {
        title: "express",
        status: "pending",
        createdBy: "2023-05-234" 
    },
]

for (let i = 0; i < todos.length; i++) {
    let selectedtodos = todos[i];
    console.log(`${selectedtodos.title} created at ${selectedtodos.createdBy} is ${selectedtodos.status}  `);
}   




let dbUsers = [
    {
        name: "Ram",
        email: "ram@gmail.com",
        username: "Ram",
        password: "ram123"
    },
    {
        name: "Shyam",
        email: "shyam@shyam.com",
        username: "Shyam",
        password: "password"
    },
    {
        name: "Hari",
        email: "hari@hari.com",
        username: "Hari",
        password: "hari2003"
    },
]

function userLogin(input, inputPassword) {   
    for(let i = 0; i < dbUsers.length; i++){
        // let selectedUser = dbUsers[i];
        let {email, username, password} = dbUsers[i];
        if((input === username || input === email) && inputPassword === password){
            return "Login successfull";
        }        
    }
    return "Invalid credentials";
} 

console.log(userLogin("Shyam", "password")) 
console.log(userLogin("ram@gmail.com", "ram123"))
console.log(userLogin("hari@hari.com", "hari2003"))
console.log(userLogin("hari@hari.com", "hari2004"))





function  findMultiplication(input){
    let {number, startFrom, endAt} = input;
    for (let i= startFrom ; i <= endAt; i++){
        console.log(`${number} * ${i} = ${number * i}`);
    }
}

findMultiplication({
    number: 5,
    startFrom: 5,
    endAt:10
})