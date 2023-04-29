import mongoose from "mongoose";
import validator from "validator"

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is Required"]
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: [true, " Email is Required"],
        unique: true,
        validate: validator.isEmail
    },
    password: {
        type: String,
        required: [true, "password is required"],
        minlength: [6, "Password length should be greater than 6 character"],
        select: true
    },
    location: {
        type: String,
        default: "India"
    },
    },
    //to update when new info is given.
    { timestamps: true }
)

export default mongoose.model('Users',userSchema)