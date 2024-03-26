console.log("this is js file");

//Variable
greeting = "namaste";
console.log(greeting, "ram");
console.log(greeting, "shyam");
console.log(greeting, "sita");
console.log(greeting, "gita");


//Let vs Const
let color;
color = "red";

const NAME = "Ram";

console.log(color);
console.log(NAME);

//Undefined
let subject;
console.log(subject);

// Array
let brands = ["apple", "samsung", "lg", "soni"];

console.log(brands);

console.log("before", brands[3]);
brands[3] = "sony";
console.log("after", brands[3]);

let courses = ["python", "QA", "Web", "graphics", "AI"];
courses[4] = "Artificial Intelligence";
console.log(courses);

//Object
let projector = {
  brand: "viewsonic",
  color: "white",
  price: 50000,
};

console.log(projector);

let company = {
  title: "mindriser",
  url: "https://worng.com",
  estd: "2018",
  isOpen: true,
};
console.log(company);

//Bracket Notation
/* company['url'] = "https://correct.com";
    console.log(company); */

//Dot Notation
company.url = "www.correct.com";
console.log(company);

/* //Spread Operator
 let newCompany = {...company, url: 'www.correct.com'};
    console.log(newCompany);

//Object.assign Method
 let newCompany = Object.assign({}, company, {url : 'https://correct.com'})
    console.log(newCompany); */

let course = {
  title: "web",
  duration: 1,
  startTime: 0,
  endTime: 4,
};

course.startTime = 3;
console.log(course);
//new field
let fieldToBEChange = "endTime";

console.log(course["endTime"]);
console.log(course[fieldToBEChange]);

//Nested Object
let user = {  
    fullName: "Ram Tamang",
    address: {
      permanentAddress: {
        district: "Bhaktapur",
        city: "Suryabinayak",
        ward: 7,
      },
      temporaryAddress: {
        district: "Kathmandu",
        city: "Putalisadak",
        ward: 17,
      },
    },
    phoneNumber: {
        ncellNums: ["00000", "0000"],
        ntcNums: ["00000", "0000"],
        lanLine: "0000",
    }
}
console.log(user);
