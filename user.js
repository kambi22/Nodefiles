require("./conection")
let express = require('express');
let app = express();
let cors = require("cors");
const emailValidate = require("deep-email-validator");
app.use(cors())
app.use(express.json());

app.get("/users", (req, resp) => {
    con.query("select * from user ", (err, result) => {
        if (err) {
            resp.send("error")
        }
        else {
            resp.send(result)
            console.log('result')
        }
    })
});



app.post("/login", (req, resp) => {
    let data = {email,passward} = req.body;
    con.query("select * from user where email=? and passward=?", data, (err, result) => {
      
        if (err) {
            resp.send("errorss")
        }
        else {
            if (result.length > 0) {
                resp.send("Success")
            } else {
                resp.send("fail")
            }
        }

    })
});


app.post("/signups", (req, resp) => {
    let data = req.body.email
    console.warn(data);
    async function validator(email){
        try{
            
            const {wellFormed,validDomain,validMailbox} = await emailValidate.validate(email);
            if(wellFormed && validDomain && validMailbox){
                console.log("email is valid");
            }else{
                console.log("invalid email");
            }
        }catch(error){
            console.error("this is an error",error);
        }
        }
    validator(data)
});
app.post("/signup", (req, resp) => {
    let data = req.body
    console.warn("data", data.name,data.email,data.passward)
    if(data.name.length >0 && data.email.length >8 && data.passward.length >=6){  
        con.query("INsert INTO user SET ?", data, (err, result) => {
            if(err){
                resp.send("error")
            }else{
                console.log(resp.statusCode)
                resp.send("Success")
            }
        });
    }else{
        resp.send("fail")
    }
});

app.delete("/logout/:email", (req, resp) => {
    let data = req.params.email
    con.query("DELETE FROM user WHERE email=?", data, (err, result) => {
        if (err) {
            resp.send("error")
        } else {
            resp.send("logout")
        }
    })

})

app.get('/jassa',(req,resp)=>{
    resp.send('Done')
})
app.listen(8000)