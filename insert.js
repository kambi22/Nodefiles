const mongoose =require('mongoose');
mongoose.connect("mongodb://0.0.0.0:27017/compeny")

// const mysql = require("mysql2");
// const express = require("express");
// const app = express();
// const con = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     port:"3306",
//     password:"softmysql@2002",
//     database:"userdb",
//     soket:"MySQL"
// });
// con.connect((err)=>{
//     if(err){
//         console.warn("somthing problem")
//     }
//     else{
//         console.warn("every thing is ok")
//     }
// })
    


// app.get("/",(req,resp)=>{
//     con.query("select * from students", (x ,y)=>{
       
//         console.log(y);
            
        
//     })
// })
// app.listen(5500)

