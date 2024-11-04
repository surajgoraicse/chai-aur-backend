import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js"
import { User } from "../models/user.model.js"


const registerUser = asyncHandler(async (req, res) => {

    // res
    //     .status(200)
    //     .json({
    //         message: "Chai aur code"
    //     })

    // get data from the frontend
    // validate data
    // check if email and username already exists
    // check all required fields like images , avatar
    // upload to cloudinary
    // encrypt password
    // create user object and store in db
    // remove password and refresh tokken from response
    // return response

    const { username, email, fullName, password, avatar, coverImage } = req.body;
    console.log("email ", email);

    // if (username = "") {
    //     throw new ApiError(500 , "Username cannot be empty" ,)
    // }

    if (
        [username, email, fullName, password].some((field) => (
            field?.trim() === ""
        ))
    ) {
        throw new ApiError(400, "All fields are required");
    }

    const existedUser = User.findOne({
        $or: [{ username }, { email }]
    })

    if (existedUser) {
        throw new ApiError(409, "User with email or username exist");
    }
    






})


export { registerUser }