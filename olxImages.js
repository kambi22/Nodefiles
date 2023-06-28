require('./conection')
const express = require('express')
const cors = require("cors");

let app = express();
app.use(cors());
app.use(express.json())


app.get('/jassa',(req,resp)=>{
    resp.send('Done')
})


app.listen(3000);