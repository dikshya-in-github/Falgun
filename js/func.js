//using loop
let todos = [
    {
        title: "html",
        status: "complted",
    },
    {
        title: "css",
        status: "complted",
    },
    {
        title: "js",
        status: "complted",
    },
    {
        title: "react",
        status: "pending",
    },
    {
        title: "express",
        status: "pending",
    },
]

for (let i = 0; i < todos.length; i++) {
    console.log(`${todos[i].title} is ${todos[i].status} `);
} 


//using function
function printStatus(index){
    console.log(`${todos[index].title} is ${todos[index].status}`);
}
printStatus(0);
printStatus(1);
printStatus(2);
printStatus(3);
printStatus(4);


//using function
/* function todos (title, status) {
    console.log(`${title} is ${status}`);
}
todos("html", "completed");
todos("css", "completed");
todos("js", "completed");
todos("react", "pending");
todos("express", "pending"); */


//Function that accepts n number of parameters
   // Rest Parameter
function calculateSum(...args ) {   //...args lay chai rest of the value of lai point out garxa
    console.log(args);   //kk arguments pass gareko xa array form ma dekhauxa
    let sum = 0;
    for (let i = 0; i < args.length; i++){
        sum += args[i];
    }
    return sum;
}
console.log(calculateSum(1, 3, 4));
console.log(calculateSum(100, 200, 300)); 


//typeof vanne chai auta function which defines variable's data type
let type = typeof ("ram")
console.log(type);  //string
 
//Return
let user1 = {
    firstName: "Ram",
    middleName: "bdr",
    lastName: "sharma"
}

let user2 = {
    firstName: "shyam",
    middleName: "bdr",
    lastName: "sharma"
}

function getFullName(userObj){
    return `${userObj.firstName} ${userObj.middleName} ${userObj.lastName}`
}

console.log(getFullName(user1));
console.log(getFullName(user2));


//arrow function
const makeFullName = (userObj) => {
    return `${userObj.firstName} ${userObj.middleName} ${userObj.lastName}`
}

console.log(makeFullName(user1));
console.log(makeFullName(user2));


//arrow function short method
const triple = input => input * 3;

console.log(triple(111));


let users = ["ram", "hari", "sita"]
console.log(users[0]);
console.log(users[1]);
console.log(users[2]);


//Conditional statement
let willRain = true;
let hasProbability = false;

if (willRain){
    console.log("take umbrella");
}else{
    if(hasProbability){
        console.log("you may need it");
    }else{
        console.log("no need")
    }
}
for (let index = 0; index < topics.length; index++){
    if (topics[index].status = true){
       
        console.log(`${topics[index].title} is pending`);
    }else{
        
        console.log(`${topics[index].title} is pending`);
        
    }
}