// mongoose.connect(process.env.MONGODB_URL).then(()=>{
//     console.log("sucessfully connected to mongoDB")
// })

import mongoose  from "mongoose";

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URL)
            console.log("sucessfully connected to mongoDB")
         
    }catch(error){
        console.log(`MongoDB Error : ${error}`)
    }
}

export default connectDB