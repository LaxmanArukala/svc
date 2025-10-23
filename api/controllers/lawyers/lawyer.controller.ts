import { Request, Response } from "express";
import * as lawyerService from "../../services/lawyer/lawyer.service";



export const getAllLawyers = async (req: Request, res: Response): Promise<void> => {
  try {
    const lawyers = await lawyerService.getAllLawyers();
    res.status(200).json({ success: true, data:{ data: lawyers}  });  
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const getAllLawyerById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const lawyer = await lawyerService.getLawyerById(Number(id));
     if(!lawyer) {
        res.status(404).json({ success: false, message: "Lawyer not found" });
        return;
    }
    res.status(200).json({ success: true, data:{ data: lawyer}  });  
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const createLawyer = async (req: Request, res: Response): Promise<void>=>{
    try{
       const payload = req.body;
       const newLawyer = await lawyerService.createLawyer(payload);
       res.status(201).json({ success: true, data: newLawyer, message: "Lawyer Created Successfully" });
    }catch( error: any){
         res.status(500).json({success: false, message: error.message})
    }
}

export const updateBlog = async (req: Request, res: Response):Promise<void> =>{
    try{
      const {id}= req.params;
      const bodyData = req.body
      const updatedData = await lawyerService.updatedLawyer(id, bodyData);
      if (!updatedData) {
        res.status(404).json({ success: false, message: "Lawyer not found" });
        return;
      }
      res.status(200).json({ success: true, message: "Lawyer updated successfully" });
    }catch( error: any){
         res.status(500).json({success: false, message: error.message})
    }
}

export const deleteLawyer = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deleted = await lawyerService.deleteLawyer(Number(id));
    if (!deleted) {
      res.status(404).json({ success: false, message: "Lawyer not found" });
      return;
    }
    res.status(200).json({ success: true, message: "Lawyer deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};