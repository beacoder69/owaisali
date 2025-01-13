const express = require('express');
const users = require("./Data")
const port = 4000;
const cors = require("cors");


const app = express();

app.use(cors());

app.get('/music',(req,res)=>{
  return res.json(users)
});
console.log(users)


app.listen(port,()=>
  console.log(`hi http://localhost:${port}/music`)
)