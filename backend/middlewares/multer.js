import multer  from "multer";

const storage = multer.diskStorage({
    filename: function(req,file,callback)
})