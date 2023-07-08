import { Router } from "express";
const router = Router();

import { editor } from "../controllers/PageEditorController";

router.post("/editor", editor.createPageEditor);

export default router;
