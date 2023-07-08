import mongooses, { Schema, } from "mongoose";
import { mongoose } from "../db/db";

const pageEditorSchema = new Schema(
  {
    text: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

const pageEditorModel = mongoose.model("PageEditor", pageEditorSchema);
export default pageEditorModel;
