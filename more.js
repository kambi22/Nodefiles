const express = require("express");

require('./insert');
const product = require("./product");
const app = express();

app.use(express.json());

app.post("/add",async(req,resp)=>{
    let data = new product(req.body);
    let result= await data.save();
    console.log(req.body);
    resp.send(result)
})
app.get("/find",async(req,resp)=>{
    let data = await product.find();
    console.log(data)
    resp.send('done')
})
app.delete("/delete/:_id",async(req,resp)=>{
    console.log(req.params)
    let data = await product.deleteOne(req.params.id)
    resp.send(data)
})

app.get("/search/:key",async(req,resp)=>{
    let data = await product.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}},
                {"email":{$regex:req.params.key}},
                {"ratting":{$regex:req.params.key.Number}},
                {"address":{$regex:req.params.key}}
            ]
        });
    resp.send(data)
    console.log(data)
})
app.listen(5500)


