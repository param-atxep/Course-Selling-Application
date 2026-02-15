const mongoose = require("mongoose");
const express = require("express");
const {userRouter} = require("./routes/user")
const {courseRouter} = require("./routes/course")
const {adminRouter} = require("./routes/admin")
const app = express();

app.use("/api/v1/user",userRouter);
app.use("/api/v1/admin",adminRouter)
app.use("/api/v1/course",courseRouter)
async function main(){
await mongoose.connect("mongodb+srv://param:Params47@cluster0.ofhkx0r.mongodb.net/coursesell-app")
app.listen(3000);
console.log("Listening On Port 3000")
}
main()