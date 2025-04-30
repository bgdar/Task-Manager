import express from "express"
import userRouter from "./controler/user.route"
import taskRouter from "./controler/task.route"


const PORT = 5500

const app = express()

app.use("/user",userRouter);
app.use("/task",taskRouter)


app.listen(PORT,()=>{
  console.log("Running oh http://127.0.0.1:",PORT)
})
