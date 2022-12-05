const express = require('express');
// Port is a virtual point where connection networks start and end
const port = 8080;
const app = express();

app.get("/",(req,res) =>{
    res.status(200).send({
      "message": "welcome to server" 
    })
})
app.listen(port,() =>{
    console.log("listen on port " + port);
})