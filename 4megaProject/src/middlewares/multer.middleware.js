import multer from "multer"

// configure  multer storage 
const storage = multer.diskStorage({
    // destination: Specifies the directory where files will be stored. Here, it’s set to "/public/temp", meaning that all uploaded files will be saved to this folder.
    // The callback function cb(null, "/public/temp") ensures the directory path is returned without errors.
    destination: function (req, file, cb) {
        cb(null, "/public/temp")
    },
    // filename: Sets the name of the uploaded file. Here, file.originalname is used, which keeps the file’s original name as uploaded by the user.
    //The callback cb(null, file.originalname) also passes the file name without errors.
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

// export multer instance 
export const upload = multer({
    storage,
});