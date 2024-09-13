const express = require('express');
const cors = require('cors');
const bodyParser= require('body-parser');
const server = express();
server.use(cors());
server.use(bodyParser.json());

//http req
server.post('/demo',(req,res)=>{
    console.log(req.body)
    res.json(req.body);

})
server.listen(8080,()=>{
    console.log('server started ')
})

