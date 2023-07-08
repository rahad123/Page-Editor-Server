import { Request, Response } from "express";
import { pageEditorService } from "../services/PageEditorService";
const editor = {
  createPageEditor: async (req: Request, res: Response) => {
    try {
      const createCategory = await pageEditorService.createEditor(req.body);
      res.status(201).json(createCategory);
    } catch (err) {
      return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },
};

export { editor };
