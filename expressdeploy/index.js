import express from "express"

const app=express();
const port=9000;
app.use("/home",(req,res)=>{
  res.json({message:"hello form express app"})
})
app.listen(9000,()=>{
  console.log(`Starting Server on port ${port}`);
  
})

module.exports=app;