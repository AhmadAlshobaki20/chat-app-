const mongoose = require ("mongoose");
const dotenv = require("dotenv");
dotenv.config({path:"./config.env"})
const app = require("./app");


// connect database 
mongoose.connect("mongodb://localhost:27017/",{useUnifiedTopology: true,useNewUrlParser:true}).then((res)=>{
    console.log("success connect database")
}).catch((err)=>{
    console.log(err)
})

// connect server 
const port = process.env.PORT || 8000;
app.listen(port,()=>{
    console.log("server successfully connect on port", port);
});