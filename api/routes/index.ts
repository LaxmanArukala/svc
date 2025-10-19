import express from "express";
import blogRouter from './v1/blog/blog.routes'

const router = express.Router();

// Mount v1 routes
router.use('/blogs', blogRouter)
export default router;
