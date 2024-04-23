let promise1 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve({id:1, name:"ram"})
    },3000)
});

console.log(promise1);
promise1.then((res) =>{
    console.log(res);
})
