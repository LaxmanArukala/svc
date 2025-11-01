import express from 'express';
import * as categoryController from '../../../controllers/categories/categories.controller'

const router= express.Router();


router.get("/", categoryController.getAllCategories)
router.get("/:id", categoryController.getCategoryById)
router.post("/", categoryController.createCategory)



router.patch("/:id", categoryController.updateCategory)
router.delete("/:id", categoryController.deleteCategory)

export default router;