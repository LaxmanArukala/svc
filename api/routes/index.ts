import express from "express";
import blogRouter from './v1/blog/blog.routes';
import lawyerRouter from './v1/lawyers/lawyer.routes';
import categoryRouter from './v1/categories/categories.routes'

const router = express.Router();

// Mount v1 routes
router.use('/blogs', blogRouter)
router.use('/lawyers', lawyerRouter)
router.use('/categories', categoryRouter)
export default router;
