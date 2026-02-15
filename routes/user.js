const {Router} = require("express");
const userRouter = Router();
    userRouter.post("/signup",function(req,res){
        res.json({
            msg:"Sign Up EndPoint"
        })
    })
    userRouter.post("/signin",function(req,res){
        res.json({
            msg:"Sign In EndPoint"
        })
    })
    userRouter.get("/purchases",function(req,res){
        res.json({
            msg:"Purchases EndPoint"
        })
    })

module.exports=({
    userRouter : userRouter
})
