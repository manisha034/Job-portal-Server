import mongoose from "mongoose";


const jobSchema = mongoose.Schema({
    company: {
        type: String,
        requied: [true, "Companay name is require"],
    },
    position: {
        type: String,
        required: [true, "Job Position is required"],
        maxlength: 100,
    },
    status: {
        type: String,
        enum: ["pending", "reject", "interview"],
        default: "pending",
    },
    workType: {
        type: String,
        enum: ["full-time", "part-time", "internship", "contaract"],
        default: "full-time",
    },
    workLocation: {
        type: String,
        default: "Mumbai",
        required: [true, "Work location is required"],
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    jobType:{
        type: String,
        default:"Development",
        required: [true, "Job type is required"],
    }
    },
    { timestamps: true }
);

export default mongoose.model('Job',jobSchema)