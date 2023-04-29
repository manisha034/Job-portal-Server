import express from "express"
import { createJobController, deleteJobController, getAllJobController, updateJobController } from "../controllers/jobController.js"



const route = express.Router()

route.post('/create-jobs', createJobController)

route.get('/get-jobs', getAllJobController)

route.patch('/update-job/:id',updateJobController)

route.delete('/delete-job/:id',deleteJobController)

export default route