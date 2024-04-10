 //Map method
let nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha"];
let newUsers = nepaliNames.map((name, idx) =>{
    return {
        name: name,
        email: name.toLowerCase()+"@gmail.com",
        password: name.toLowerCase()+idx
    }
})

console.log(newUsers);