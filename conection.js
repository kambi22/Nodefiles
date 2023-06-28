let mysql = require("mysql2");

con= mysql.createConnection({
    host:"localhost",
    password:'softmysql@2002',
    database:"userdb",
    user:"root"

})
con.connect((err)=>{
    if(err){
        console.log("somthing wrong");
        
    }
    console.log("connect hai");
    
})