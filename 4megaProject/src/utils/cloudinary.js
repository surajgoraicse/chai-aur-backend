import { v2 as cloudinary } from "cloudinary"
import fs from 'fs'

// configure the cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            console.log("Invalid file path");
            return null;
        }
        const response = await cloudinary.uploader.upload(localFilePath, {    // TODO: delete the file 
            resource_type: "auto",
        });

        // file has been uploaded successfully

        console.log("file is uploaded on cloudinay : ", response.url);
        return response

    } catch (error) {
        fs.unlinkSync(localFilePath);
        return null;
        // remove the local file as upload failed
    }
}

export { uploadOnCloudinary };
