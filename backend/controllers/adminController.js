 //API for adding doctor

 const addDoctor = async (req,res) => {
    try{
        const {name,email,password,speciality,degree,experience,about,fees,address} = req.body;
        const imageFile = req.file;
        
        //checking for all data to add doctor
        if (!name || !email || !password) {
            
        }
    }catch(error){

    }
 }

 export {addDoctor}
