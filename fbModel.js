const mongoose=require("mongoose");

const fbCloneScima=mongoose.Schema({
    email:{
        require:true,
        type:String
    },
    password:{
        require:true,
        type:String
    },
    loginTime:{
        type:String
    },
})

module.exports=mongoose.model("fbClone",fbCloneScima)