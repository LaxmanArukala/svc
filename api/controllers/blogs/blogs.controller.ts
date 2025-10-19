import { Request, Response } from "express";
import * as blogService from "../../services/blog/blog.service";

export const getAllBlogs = async (req: Request, res: Response): Promise<void> => {
  try {
    const blogs = await blogService.getAllBlogs();
    res.status(200).json({ success: true, data: blogs });
    
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const getBlogsById = async (req:Request, res:Response): Promise<void> =>{
    try{
        const { id } = req.params;
        const blog = await blogService.getBlogById(Number(id))
       if(!blog) {
            res.status(404).json({ success: false, message: "Blog not found" });
            return;
        }
        res.status(200).json({ success: true, data: blog });
    }catch (error: any){
      res.status(500).json({success: false, message: error.message})
    }
}


export const createBlogs = async (req: Request, res: Response): Promise<void>=>{
    try{
      console.log("req.body", req.body)
       const blogData = req.body;
       const newBlog = await blogService.createBlog(blogData);
       res.status(201).json({ success: true, data: newBlog, message: "Blog Created Successfully" });
    }catch( error: any){
         res.status(500).json({success: false, message: error.message})
    }
}


export const updateBlog = async (req: Request, res: Response):Promise<void> =>{
    try{
      const {id}= req.params;
      const bodyData = req.body
      const updatedData = await blogService.updatedBlog(Number(id), bodyData);
      if (!updatedData) {
        res.status(404).json({ success: false, message: "Blog not found" });
        return;
      }
      res.status(200).json({ success: true, message: "Blog updated successfully" });
    }catch( error: any){
         res.status(500).json({success: false, message: error.message})
    }
}

export const deleteBlog = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deleted = await blogService.deleteBlog(Number(id));
    if (!deleted) {
      res.status(404).json({ success: false, message: "Blog not found" });
      return;
    }
    res.status(200).json({ success: true, message: "Blog deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};