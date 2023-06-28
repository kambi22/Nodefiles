const mysql = require("mysql2")
const express = require('express')
const cors = require("cors");
const { query } = require("express");

let app = express();
app.use(cors());
app.use(express.json())

connection = mysql.createConnection({
    host:"localhost",
    password:'softmysql@2002',
    database:"resturent",
    user:"root"
})
connection.connect((err)=>{
    if(err){
        console.warn("not connected");
    }else{
        console.warn("connected");
    }
})

app.get('/resturent',(req,resp)=>{
    connection.query("select * from resturents_data",(err,result)=>{
        if(err){
            resp.send("errorsss")
        }else{
            resp.send(result)
        }
    })
})

app.get('/search',(req,resp)=>{
    let name= req.query.name
    console.log(name);
    connection.query("select * from resturents_data where name LIKE '%"+name+"%'",(err,result)=>{
        if(err){
            resp.send("errorsss")
        }else{
            resp.send(result)
        }
    })
})

app.post('/resturent',(req,resp)=>{
    let data = req.body
    console.log("add data",data)
    connection.query('INsert INTO resturents_data SET ?',data,(err,result)=>{
        if(err){
            resp.send("error");
        }else{
           resp.send("successful");
        }
    })
}),

app.put("/resturent/:id",(req,resp)=>{
    let data = [req.body.name,req.body.email,req.body.ratting,req.body.address,req.params.id]
    console.log(req.params.id);
    connection.query('UPDATE resturents_data SET name=?,email=?,ratting=?,address=? where id=?',data,(err,result)=>{
        console.warn(result.length);
        if(err){
            resp.send("error")
        }else{
            if(result.affectedRows> 0){
                resp.send("Success")
            }else{
                resp.send("Fail")
            }
        }
    })
    
})
app.delete("/resturent/:id",(req,resp)=>{
    let data = req.params.id
    connection.query("DELETE FROM resturents_data WHERE id=?",data,(err,result)=>{
        if(err){
            resp.send("error")
        }else{
            if(result.affectedRows >0){
                resp.send("Success")
            }else{
                resp.send("Fail")
            }
        }
    })
    console.log(req.params.id);
})


app.listen(2000);