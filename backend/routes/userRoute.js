import express from 'express'
import { registerUser,loginUser, getProfile, updateProfile, bookAppointment, listAppointment, cancelAppointment,  payment, verifyPayment } from '../controllers/userController.js'
import authUser from '../middlewares/authUser.js'
import upload from '../middlewares/multer.js'
import bodyParser from 'body-parser'

const userRouter = express.Router()

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)

userRouter.get('/get-profile',authUser,getProfile)
userRouter.post('/update-profile',upload.single('image'),authUser,updateProfile)
userRouter.post('/book-appointment',authUser,bookAppointment)
userRouter.get('/appointments',authUser,listAppointment)
userRouter.post('/cancel-appointment',authUser,cancelAppointment)
userRouter.post('/create-payment-intent',authUser,payment)
userRouter.post('/webhook',(req, res, next) => {
    console.log("Webhook received!");
    next();},verifyPayment)




export default userRouter
