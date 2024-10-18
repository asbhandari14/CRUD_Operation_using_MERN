import express from "express"
const router = express.Router();


import { Create_User, Show_All_User, Update_Specific_User, Delete_Specific_User } from "../controllers/user-controller.js";


router.route("/create").post(Create_User);
router.route("/read").get(Show_All_User);
router.route("/update/:userId").put(Update_Specific_User);
router.route("/delete/:userId").delete(Delete_Specific_User);


export default router