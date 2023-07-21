const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://fbClone:fbClone@cluster0.p47ebci.mongodb.net/fbClone")
.then(()=>{
    console.log("database connected")
})
.catch(()=>{
    console.log("database not connected");
})  

