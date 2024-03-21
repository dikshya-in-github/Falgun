//Nested non-primitive data type
let brands = [
  {
    name: "Apple",
    ceos: [{
        name: "wrong-ceo",
        phone:111 
      }],
    website: "https://www.apple.com/",
  },
  {
    name: "samsug",
    ceos: [{
      name: "Han Jong-hee",
      phone:111 
    }],    
    website: "https://www.samsung.com/",
  },
];
// console.log(brands);
brands[0].ceos[0].name = "correct-ceo";
// console.log(brands);
brands[0].ceos[0].address = "korea";
console.log(brands);

/* let brands = [
  {
    name: "Apple",
    ceo: "Tim Cook",
    website: "https://www.apple.com/",
  },
  {
    name: "****g",
    ceo: "Han Jong-hee",
    website: "https://www.samsung.com/",
  },
  {
    name: "lg",
    ceo: "Koo Kwang-mo",
    website: "https://www.lg.com/",
  },
];
console.log(brands);
brands[1].name = "samsung";
console.log(brands); */



//Reference data type
let user1 = {
  name: "Ram",
  age: 10,
};

let user2 = {...user1} ;             //Sperad or Rest Operator 
// let user2 = Object.assign({},user1); //Object assign method

user2.name = "shyam";

console.log("Before",user1.name);
console.log("After",user2.name);
