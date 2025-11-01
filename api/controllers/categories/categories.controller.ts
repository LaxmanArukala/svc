import { Request, Response } from "express";
import * as categoryService from '../../services/category/category.service'

export const getAllCategories = async(req: Request, res: Response): Promise<void> =>{
    try {
     const categories = await categoryService.getAllCategories();
     if(categories.length === 0){
      res.status(200).json({ success: true, message: "Categories not found" });
      return;
     }
     res.status(200).json({ success: true, data:{ data: categories}}); 
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
}


export const getCategoryById = async (req:Request, res:Response):Promise<void> =>{
  try{
    const { id } = req.params;
    
    const category = await categoryService.getCategoryById(id)
    if(!category) {
      res.status(404).json({ success: false, message: "Category not found" });
      return;
    }
    res.status(200).json({ success: true, data: {data: category} });
  }catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export const createCategory = async (req:Request, res:Response):Promise<void> =>{
  try{
    
    const categoryData = req.body;
    const newBlog = await categoryService.createCategory(categoryData);
    res.status(201).json({ success: true, data: newBlog, message: "Blog Created Successfully" });
  }catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export const updateCategory = async (req:Request, res:Response):Promise<void> =>{
  try{
    const { id } = req.params;
    const categoryData = req.body;
    console.log("id", id)
    const updatedCategory = await categoryService.updateCategory(id, categoryData);

    if (!updatedCategory) {
      res.status(404).json({status: false, message: "Category not found" });
      return
    }
    res.status(200).json({ success: true, message: "Category Updated Successfully", data: updatedCategory, });
  }catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
}


export const deleteCategory = async (req:Request, res:Response):Promise<void> =>{
  try{
     const { id } = req.params;
    const deletedCategory = await categoryService.deleteCategory(id);

    if (!deletedCategory) {
       res.status(404).json({ message: "Category not found" });
       return;
    }
    res.status(200).json({ success: true, message: "Category Deleted Successfully" });
  }catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
}