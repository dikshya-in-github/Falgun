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
    if (topics[index].status == true){               
        console.log(`${topics[index].title} is completed`);
    } else{        
        console.log(`${topics[index].title} is pending`);        
    }
} 

/* let index= 0;
if (topics[index].status == true){
    console.log(`${topics[index].title} is completed`);
    topics[index]++;
}else{    
    console.log(`${topics[index].title} is pending`);
    topics[index]++;
} 
 */