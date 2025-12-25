import { v2 as cloudinary } from "cloudinary";
import fs from "fs"

cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_CLOUD_API, 
        api_secret: process.env.CLOUDINARY_CLOUD_SECRET,
 });

const uploadOnCloudnairy = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        // Upload the file on cloudnairy
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto'
        })
        // file has been successfully uploaded
        console.log('File is uploaded on cloudinary', response.url)
        fs.unlinkSync(localFilePath)
        return response
        

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally save temparory file if operation got fail
        return null
    }
}

export {uploadOnCloudnairy}