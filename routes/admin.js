const {Router} = require("express");
const adminRouter = Router();
const {adminModel} = require("../db")

    adminRouter.post("/signup",function(req,res){
        res.json({
            msg:"Sign Up EndPoint"
        })
    })
    adminRouter.post("/signin",function(req,res){
        res.json({
            msg:"Sign In EndPoint"
        })
    })
    adminRouter.post("/course",function(req,res){
        res.json({
            msg:"Sign In EndPoint"
        })
    })
    adminRouter.put("/course",function(req,res){
        res.json({
            msg:"Sign In EndPoint"
        })
    })
    adminRouter.get("/course/bulk",function(req,res){
        res.json({
            msg:"Sign In EndPoint"
        })
    })
    module.exports=({
        adminRouter:adminRouter
    })