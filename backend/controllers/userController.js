import validator from 'validator'
import bcrypt from 'bcrypt'
import userModel from '../models/userModel.js'
import jwt, { sign } from 'jsonwebtoken'


//API to register user
const registerUser = async (req,res) =>{
    try {
        
        const { name, email, password } = req.body

        if(!name || !password || !email ){
            return res.json({success:false,message:"Missing Details"})
        }
        

        //validating email format
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"enter a valid email"})
        }
        
        //validating strong password
        if(password.length <8 ){
            return res.json({success:false,message:"enter a strong password"})
        }

        //hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const userData = {
            name,
            email,
            password : hashedPassword
        }

        const newUser = new userModel(userData)
        const user = await newUser.save()

        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET )

        res.json({success:true,token})
        

    } catch (error) {
        console.log(error)
        res.json({success: false,message: error.message })
    }
}

export {registerUser}