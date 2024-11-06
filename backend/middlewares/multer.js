import multer from "multer";

// Configure storage with destination and filename
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, 'uploads/'); // Ensure this folder exists
    },
    filename: function (req, file, callback) {
        // Use Date.now() to create unique filenames, avoiding conflicts
        callback(null, `${Date.now()}-${file.originalname}`);
    }
});

// Initialize multer with the specified storage
const upload = multer({ storage });

export default upload;
