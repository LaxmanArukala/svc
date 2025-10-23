import express from "express";
import * as lawyerController from "../../../controllers/lawyers/lawyer.controller"
const router = express.Router();


router.get("/",lawyerController.getAllLawyers)
router.get("/:id",lawyerController.getAllLawyerById);

// POST /api/v1/users
router.post("/", lawyerController.createLawyer);

router.patch("/:id", lawyerController.updateBlog);

router.delete("/:id", lawyerController.deleteLawyer);

export default router;