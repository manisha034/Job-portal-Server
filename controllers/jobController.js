import jobModel from '../models/jobModel.js'

//POST api to create jobs
export const createJobController = async (req,res,next)=>{
    try{
        const {company,position,jobType} = req.body

    if(!company || !position){
        next('Please provide values')
    }

    if(jobType=="Teaching"){
        next('Teaching job is not allowed')
    }

    const newJob = {
        company,
        position
    }
    const job = await jobModel.create(newJob)

    res.status(200).json({
        success: true,
        message:'Job added successfully'
    })
    }catch(err){

    }
}


export const getAllJobController = async (req,res,next)=>{

    try{

        const jobs = await jobModel.find();

        res.status(200).json({

        success: true,
        jobs,
        totalJobs: jobs.length,

    })
    }
    catch(err){

    }
    
}

export const updateJobController = async (req,res,next)=>{
    try{
        const {id} = req.params

        const {workLocation, position} = req.body

        if(!workLocation || !position){
            next('please provide all fields')
        }

        const job = await jobModel.findOne({_id:id})
        //In mongo db for every object id is created, so we check that with the id passed

        if(!job){
            next(`No job is found with the ${id}`)
        }

        const updateJob = await jobModel.findOneAndUpdate({_id:id},{
            workLocation: workLocation,
            position: position
        })

        res.status(200).json({
            updateJob
        })



    }catch(err){

    }
}

export const deleteJobController = async(req,res,next)=>{
    try{
        const {id} = req.params

        const job = await jobModel.findOne({_id:id})
        
        if(!job){
            next('No job Found')
        }

        await job.deleteOne();
       
        res.status(200).json({
            message:"sucess,Job deleted"

        })



    }catch(err){

    }
}