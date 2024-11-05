 //API for adding doctor

 const addDoctor = async (req,res) => {
    try{
        const {name,email,password,speciality,degree,experience,about,fees,address} = req.body;
        const imageFile = req.file;
        console.log({name,email,password,speciality,degree,experience,about,fees,address},imageFile)
    }catch(error){

    }
 }

 export {addDoctor}
