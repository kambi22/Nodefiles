const express = require('express');
const dbConect = require('./views/mongodb');
const mongodb = require('mongodb');
const app= express();

app.use(express.json());

app.get('/' , async(req,resp)=>{
    let data = await dbConect();
    data= await data.find().toArray();
    console.log(data)
    resp.send(data)
});

app.post('/',async(req,resp)=>{
    let data = await dbConect();
    let result = await data.insert(req.body)
    console.log(req.body)
    resp.send(result)
});

app.delete('/:id',async(req,resp)=>{
    let data = await dbConect();
    let result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    console.log(req.params.id);
    resp.send({result:"Deleted"});
    console.log('deleted')
})
app.listen(5000)