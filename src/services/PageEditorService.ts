import pageEditor from "../models/PageEditorModel";
const pageEditorService = {
  createEditor: async (editor: any) => {
    return pageEditor.create(editor);
  },
};

export { pageEditorService };
