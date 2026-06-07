console.log("Hello world");

const balance = 100000
// const account = new Promise((resolve , reject) =>{
//     if (balance > 20000){
//     console.log("you are rich");
//     resolve()
//     }else{
//         console.log("you are poor");
//         reject()
//     }
// })

// account.then(() =>{
// console.log("successful");

// }).catch(() =>{
//     console.log("error");
    
// })

// const marks = 100
// const result = new Promise((resolve , reject) =>{
//     setTimeout(() =>{
//         if (marks > 80){
//             resolve("Pass")
//         }else{
//             reject("Fail")
//         }
//     } , 1000)
// })

// result.then((res) =>{
//     console.log(res);  
//     return res
// }).then((res) =>{
//     console.log(res);
    
// })
// .catch((err) =>{
//     console.log(err);
    
// })

fetch('https://jsonplaceholder.typicode.com/users').then((res) =>{
   return res.json()
}).then((res) =>{
    console.log(res);
}).catch((err) =>{
    console.log(err);
})

axios('https://fakestoreapi.com/products').then((res) =>{
    return res.data
}).then((res) =>{
    console.log(res);
    res.map((item) =>{
        document.write(item.id)
    })
}).catch((err) =>{
    console.log(err);
    
})