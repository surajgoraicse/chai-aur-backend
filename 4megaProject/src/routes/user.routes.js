import {Router} from "express"
import { registerUser } from "../controllers/user.controller.js";

const router = Router();

// creating a route and calling a controller method using post 
router.route("/register").post(registerUser)


export default router;