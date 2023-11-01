import { Schema, Document, models, model } from "mongoose";

export const CATEGORY_TABLE = "Category";
export interface ICategory {
  title: string;
  slug: string;
  active: boolean;
  description?: string;
  image?: string;
}

export interface ICategoryDoc extends Document<ICategory>, ICategory {}
const schema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, trim: true },
    description: { type: String, default: "" },
    image: { type: String, default: "" },
    active: { type: Boolean, default: true },
    insertAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        delete ret.__v;
        doc.id = ret._id;
        ret.id = ret._id;
      },
    },
  }
);
export const Category =
  models[CATEGORY_TABLE] || model<ICategoryDoc>(CATEGORY_TABLE, schema);
