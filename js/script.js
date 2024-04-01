//loop and conditional statement
let topics = [
    {
        title: "html",
        status: true,
    },
    {
        title: "css",
        status: true,
    },
    {
        title: "react",
        status: false,
    },
]

for (let index = 0; index < topics.length; index++){
    if (topics[index].status){               
        console.log(`${topics[index].title} is completed`);
    } else{        
        console.log(`${topics[index].title} is pending`);        
    }
} 


//Logical operators
let student = {
    name: "Ram",
    paid: false,
    hasScholarship: true,
    hasMetAttendace: true
}
// let {paid, hasScholarship, hasMetAttendace} = student;   //Object destructuring
if ( (student.paid || student.hasScholarship) && (student.hasMetAttendace) ){
    console.log("Ram can give exam");    
}else{
    console.log("Ram can't give exam");
} 


//Ternary Operator
// student.paid || student.hasScholarship ?  console.log("ram can give exam"): console.log("ram can't give exam");
console.log(`ram ${(student.paid || student.hasScholarship) && (student.hasMetAttendace)? "can" : "cannot" } give exam`);


//For each function
    /* let number = [1,2,4,3]
    // for (let i =0; i<number.length;i++){
    //     console.log(number[i]);
    // }

    number.forEach((Element)=>{
        console.log(Element*2);
    }) */