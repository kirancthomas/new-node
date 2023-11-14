var db= require('../config/connection')


module.exports={
    
    addProuct:(product,callback)=>{
        console.log(product);
        db.get().collection('product').insertOne(product).then((data)=>{

            callback(true)
        })
    }
}