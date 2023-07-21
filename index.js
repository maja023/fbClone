const express=require("express")
const app=express();
const port=201 || 2002;
const {loginController,getAdmincontroller,postAdmincontroller,dashboardController,deleteuserController}=require('./loginController');
const cParser=require("cookie-parser");
app.use(cParser())

app.set("view engine","ejs")
app.use(express.static('views'))
app.use(express.urlencoded({extended:true}));
app.use(express.json());



require('./db')
app.get("/",(req,res)=>{
    res.render("login")
})
app.post("/login-process",loginController)
app.get("/admin",getAdmincontroller)
app.post("/admin",postAdmincontroller)

app.get("/dashboard",dashboardController)
app.get("/users/delete/:id",deleteuserController)



app.get("/clear",(req,res)=>{
    res.clearCookie('name').send("clear")
})
app.get((err,req,res,next)=>{
    if(err){
        res.send(err)
    }else{
        res.send("Something Went Wrong")
    }
})

app.get("*",(req,res,next)=>{
    res.send("Bad Link")
})
app.listen(port,()=>{
    console.log(`the server is running at ${port} `)
}) 