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
    for (let i = 0; i < users.length; i++){
        let sum = 0       
        let {name, cartItems} = users[i]
        for (let index = 0; index < cartItems.length; index++) {
            sum += cartItems[index].price                      
        }
        console.log(`${name} has ordered of Rs.${sum}`);       
    }    
}
totalAmount()
/* 
    TODO: expected output
    Ram has ordered of Rs.1000
    Hari has ordered of Rs.2500
    Shyam has ordered of Rs.1500
*/