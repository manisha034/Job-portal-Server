import userModel from '../models/userModel.js'
import bcrypt from 'bcryptjs'

export const registerController = async(req,res, next)=>{

    try{

        const {name,email,password} = req.body

        //validate
        if(!name){
            next("Please provide the name")
        }
        if(!email){
           next("Please provide the email")
        }
        if(!password){
            next("Please provide the password")
        }
    
        //check the stored data
        const existingUser = await userModel.findOne({email})

        if(existingUser){
            return res.status(200).send({
                success: true,
                message: 'Email is already exisiting'
            })
        }

        //store the data
        const newUser = {
            name: name,
            email: email,
           password: bcrypt.hashSync(password)        
        }

        const user = userModel.create(newUser)
        res.status(200).send({
            success: true,
            message: 'User is registered successfully',
            user
        })

    }catch(err){
      next("Error in register controller")

    }

}


export const loginController = async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.send({
        success: false,
        message: "Please Provide the all details",
      });
    }
  
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.send({
        success: false,
        message: "User not found",
      });
    }
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      return res.send({
        success: false,
        message: "Invalid credentials",
      });
    }
    res.send({
      success: true,
      message: "User logged in successfully",
      user,
    });
  };




