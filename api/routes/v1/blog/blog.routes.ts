import express from "express";
import * as blogController from "../../../controllers/blogs/blogs.controller";


const router = express.Router();


router.get("/",blogController.getAllBlogs)
router.get("/:id",blogController.getBlogsById);

// POST /api/v1/users
router.post("/", blogController.createBlogs);

router.patch("/:id", blogController.updateBlog);

router.delete("/:id", blogController.deleteBlog);

export default router;