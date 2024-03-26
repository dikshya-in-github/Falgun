/* let todos = [
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
} */



function nestedArray () {
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
}
nestedArray();


//Function that accepts n number of parameters
    //1. *arguments object* tara this is not available in arrow function

/*function calculateSum( ) {
    console.log(arguments);
    let sum = 0;
    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
console.log(calculateSum(1, 3))
console.log(calculateSum(100, 200, 300))


//*Array.from method*
function sum() {
    let args = Array.from(arguments);
    return args.reduce(function(acc, cur){
        return acc + cur;
    })
}
console.log(sum(3, 4, 5));
console.log(sum(3, 4, 5, 1)); */


//2. *Rest Parameter*
function calculateSum(...args) {
    return args.reduce(function(acc, cur){
        return acc + cur;
    })
}

console.log(calculateSum(1, 3));
console.log(calculateSum(100, 200, 300));