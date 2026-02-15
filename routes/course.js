const Router = require("express");
const courseRouter = Router();
    courseRouter.get("/preview",function(req,res){
        res.json({
            msg:"Course EndPoint"
        })
    })
    courseRouter.post("/purchase",function(req,res){
        res.json({
            msg:"Course Purchase Up EndPoint"
        })
    })

module.exports=({
    courseRouter : courseRouter
})