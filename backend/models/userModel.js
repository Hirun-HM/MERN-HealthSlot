import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true, unique:true},
    password: {type:String, required:true},
    image: {type:String, default:""},
    address: {type:Object, required:true},
    gender:{type:String, default:"Not Selected"},
    dob:{type:String, default:"Not Selected"},
    phone:{type:String, default:'000000000'}
})


const userModel = mongoose.models.user || mongoose.model('user',userSchema)

export default userModel