 import validator from "validator";
 
 
 
 //API for adding doctor

 const addDoctor = async (req,res) => {
    try{
        const {name,email,password,speciality,degree,experience,about,fees,address} = req.body;
        const imageFile = req.file;
        
        //checking for all data to add doctor
        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.json({
                success: false,
                message: "missing details"
            })
        }
//validating email format
        if (!validator.isEmail(email)) {
            return res.json({
                success: false,
                message: "please enter valid email"
            })
        }

        //validating password
        if (password.length < 8) {
            return res.json({
                success: false,
                messgae: "please enter strong password"
            })
        }
    }catch(error){

    }
 }

 export {addDoctor}
