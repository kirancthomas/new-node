const promise =require('promise')

function getName(){
    return new promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('kiran')
        },3000)
    })
}

function getMobile(){
    return new promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('8942584165451')
        },2000)
    })
}

//using promise methode

promise.all([getName(),getMobile()]).then((result)=>{
    console.log(result)
})


//using async method

async function getUser(){
    let name= await getName()
    console.log(name)
    let mobile = await getMobile()
    console.log(mobile)
}

getUser()