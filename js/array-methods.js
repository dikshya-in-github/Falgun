//Task
    let users = [
        {
            name: "Ram",
            cartItems: [
                { product: "watch", price: 1000 }
            ],
        },
        {
            name: "Hari",
            cartItems: [
                { product: "keyboard", price: 2000 },
                { product: "mouse", price: 500 },
            ],
        },
        {
            name: "Shyam",
            cartItems: [
                { product: "mousePad", price: 500 },
                { product: "mouse", price: 1000 },
            ],
        },
    ] 

    const totalAmount = () => {    
        for (let index = 0; index < users.length; index++){
            let sum = 0       
            let {name, cartItems} = users[index]
            for (let cartIndex = 0; cartIndex < cartItems.length; cartIndex++) {
                sum += cartItems[cartIndex].price                      
            }
            console.log(`${name} has ordered of Rs.${sum}`);       
        }    
    }
    totalAmount()


//ForEach Method
    let names = ["ram", "shyam", "hari"]
    names.forEach((Element, Index)=>{
        console.log("index-", Index, Element);
    })



    let todos = [
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
        {
            title: "express",
            status: false,
        },
    ]

    //Foreach method
        /* let completedArray = [];
        todos.forEach((el) => {
            if (el.status){
                completedArray.push(el)
            }
        })
        console.log(completedArray);  */

    //Filter method
        let completedArray = todos.filter((element) => {
            if(element.status){
                return true
            }
        })
        console.log(completedArray);


//Foreach method
    /* todos.forEach((Element) => {
        let {title, status} = Element
        if (status){
            console.log(`${title} is Completed`);
        }else{
            console.log(`${title} is Pending`);
        }
    }) */

    todos.forEach((el) => {
        let {title, status} = el;
        console.log(`${title} is ${status ? "completed":"pending"} `);
    })


//Filter method
    let numbers = [1, 2, 3, 4, 5, 6]
   /*  let evenNumber = numbers.filter((element) =>{
        if (element % 2 == 0){
            return true
        }
    }) */
    let evenNumber = numbers.filter((element) => element % 2 == 0 )
    console.log(evenNumber);


//ForEach method
let nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha"];
/*     let fakeDatas = [];
    nepaliNames.forEach((el, idx) => {
        fakeDatas.push({
            name: el,
            email: el.toLocaleLowerCase()+"@gmal.com",
            password: el.toLocaleLowerCase() + idx, 
        })
    })
    console.log(fakeDatas); */

    //Map method
    nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha"];
    let newUsers = nepaliNames.map((name, idx) =>{
        return {
            name: name,
            email: name.toLowerCase()+"@gmail.com",
            password: name.toLowerCase()+idx
        }
    })

    console.log(newUsers);