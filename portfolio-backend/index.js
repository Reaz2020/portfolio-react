const express = require('express');
const server = express();

//http req
server.get('/demo',(req,res)=>{
    res.send('req received')

})
server.listen(8080,()=>{
    console.log('server started')
})

