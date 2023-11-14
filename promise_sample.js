// CALLBACK HELL


// function add(num1,num2,callback){
   
    
//     let err= false
//     if(num1==0){
//         err=true
//     }else if(num2==0){
//         err=true
//     }

//     callback(num1+num2,err)

    
// }

// function multi(num1,num2,callback){
//     callback(num1*num2)
// }

// function divi(num1,num2,callback){
//     callback(num1/num2)
// }

// add(0,10,(sum,err) =>{

//     if(err){
//         console.log('num1 or num2 given zero')
//     }
//     else{
//         console.log(sum)

//         multi(sum,sum,(product)=>{
//             console.log(product)


//             divi(product,product,(final)=>{
//                 console.log(final)
//             })

//         })

        
//     }
// })


//PROMISE

const promise=require('promise');

function add(num1,num2){
    return new promise((resolve,reject)=>{

        if(num1 , num2==0){
            reject('num1 or num2 given zero')
        }
        resolve(num1+num2)
    })
}

function mult(num1,num2){
    return new promise((resolve,reject)=>{

        if(num1 , num2==0){
            reject('num1 or num2 given zero')
        }
        resolve(num1*num2)
    })
}

function divit(num1,num2){
    return new promise((resolve,reject)=>{

        if(num1 , num2==0){
            reject('num1 or num2 given zero')
        }
        resolve(num1/num2)
    })
}






add(10,30).then((sum)=>{
    console.log(sum)
    return mult(sum,sum)
}).then((result)=>{
    console.log(result)
    return divit(result,2)
}).then((final)=>{
    console.log(final)
}).catch((err)=>{
    console.log(err)
})