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
