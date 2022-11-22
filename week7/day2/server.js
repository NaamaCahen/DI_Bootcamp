// const http= require("http");

// const server=http.createServer((req,res)=>{
//     res.end('hello from my first server!')
// });

// server.listen(5000,()=>{
//     console.log('server is listening...!!!');
// })
const products=require ("./modules/data.js")
const express=require("express");
const cors =require("cors");

const app=express();

app.listen(5000,()=>{
    console.log('running on 5000');
})

app.get('/api/products',(req,res)=>{ 
    res.json(products.products);
})

app.get('/users',(req,res)=>{
    res.json({user:'naama',age:19
    })
})
app.use(cors());
app.use('/',express.static(__dirname+'/public'));

app.get('/api/products/:productId',(req,res)=>{
    const {productId}=req.params;
    const product = products.products.find(item=>{
        return item.id==productId;
    })
    if(!product){
        return res.status(404).json({message:'product not found'})
    }
    res.json(product)
})

app.get('/api/search',(req,res)=>{
    // console.log(req.query);
    const {name}=req.query;
    const results=products.products.filter(item=>{
        return item.name.toLowerCase().includes(name.toLowerCase())
    })
    if(results.length===0){
        return res.status(200).json({message:'no products matching your search'});
    }
    res.json(results)

})