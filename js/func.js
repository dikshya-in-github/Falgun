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
/* 
for (let i = 0; i < todos.length; i++) {
    console.log(`${todos[i].title} is ${todos[i].status} `);
} */


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
// console.log(calculateSum(100, 200, 300)); 

//foreach loop
/* let sum = 0;
const numbers = [1, 1, 1];

function addition(...args){
    for (let i = 0; i < args.length; i++){
        sum += args[i];
    }
    console.log(sum);
}
numbers.forEach(addition) */

 


/* //2. *Rest Parameters*
function addition(...args) {
    return args.reduce(function(acc, cur){
        return acc + cur;
    })
}
console.log(addition(1, 3));
console.log(addition(100, 200, 300)); */