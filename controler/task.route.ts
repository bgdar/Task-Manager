import { Router } from "express";

import { DataManagementst } from "../model/modelManagements";

const taskData = new DataManagementst("task")

const router = Router()


router.get("/show",(req,res)=>{
  const allDataTask = taskData.getAllData();
  console.log("alll data task ",allDataTask)
  res.status(200).send(allDataTask)
});


export default router;
