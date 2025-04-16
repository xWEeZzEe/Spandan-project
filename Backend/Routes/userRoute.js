import express from "express";
import { isAuthenticated } from "../middleware/auth.js";
import { signup ,login, logout} from "../controller/userController.js"

const router = express.Router();

router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",isAuthenticated,logout);


export default router;