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



let brands = [
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
console.log(brands); 



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



//Changing object key
let product =  {
  name:  "projector",
  rate : 50000  //rate to price
}  
product.price = product.rate
delete product.rate
console.log(product);




let productApiData = {
  products : [
      { name: "watch", price: 10000 },
      { name: "mouse", price: 10000 },
      { name: "cover", price: 100 },
      { name: "mobile", rate: 1000000 },
  ]
}
productApiData.products[3].price = productApiData.products[3].rate;
delete productApiData.products[3].rate
console.log(productApiData.products[3]);



//Function
const sum = (num1, num2) => {
  let s = num1 + num2;
  // console.log( a + " + " + b + " = ", s);
  console.log( `${num1} + ${num2} = ${s}` ); // `${} ${}`  this is template literal or string literal
}
sum(100, 200)