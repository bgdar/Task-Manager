// gunakan untuk menghandle user
import { Router } from "express";
import { DataManagementst } from "../model/modelManagements";

const userData = new DataManagementst("user")

const router = Router()


router.get("/show",(req,res)=>{
  res.send(userData.getAllData())
})

//router untuk halama login
router.post("/login",(req,res)=>{
  const {name,password,email} = req.body

  console.log("name",name,"email",email,"password",password)
})

export default router
