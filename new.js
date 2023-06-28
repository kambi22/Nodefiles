

const express = require('express');
const EventEmit = require('events');

const app = express();
event = new EventEmit();

count= 0;
event.on("apicount",()=>{
    count++;
    console.log("event called ",count)
})



app.get("/",(req,resp)=>{
    resp.send("Api Called")
    event.emit('apicount')
})
app.get("/second",(req,resp)=>{
    resp.send("Second Api Called")
    event.emit('apicount')
})
app.get("/thard",(req,resp)=>{
    resp.send("Thard Api Called")
    event.emit('apicount')
})
app.listen(5500)


//Mysql@localhost:3306