
require("./resturent")
let express = require('express');
let app = express();
let cors = require("cors");
require("./user")


app.use(cors())
app.use(express.json());


app.get("/student",(req,resp)=>{
    con.query("select * from students",(err,result)=>{
        if(err){
            resp.send("error")
        }
        else{
            resp.send(result)
        }
    })
});



app.post("/student",(req,resp)=>{
    const data = req.body
    console.log(data)
    con.query('INsert INTO students SET ?',data,(error,result,fields)=>{
        if(error){
            resp.send("error")
        }
        else{
            resp.send(result)
        }  
    })
});

app.put("/student/:name",(req,resp)=>{
    const data = [req.body.idstudent,req.body.name,req.body.rolno,req.body.adress,req.params.id];
    con.query('UPDATE students SET idstudent=?,name=?, rolno=?, address=? where name=?',data,(error,result,fields)=>{
        if(error){
            resp.send("error")
        }
        else{
            resp.send(result)
        }
    })
});

app.delete("/student/:name",(req,resp)=>{
    let data = req.params.name
    con.query("DELETE FROM students where name=?",data,(error,result)=>{
        if(error){
            resp.send("error")
        }
        else{
            resp.send(result)
        }
    })
    

});


app.listen(5000)