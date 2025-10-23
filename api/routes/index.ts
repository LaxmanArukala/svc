import express from "express";
import blogRouter from './v1/blog/blog.routes';
import lawyerRouter from './v1/lawyers/lawyer.routes'

const router = express.Router();

// Mount v1 routes
router.use('/blogs', blogRouter)
router.use('/lawyers', lawyerRouter)
export default router;
