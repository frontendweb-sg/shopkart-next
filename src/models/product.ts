import { Schema, Document, models, model, ObjectId } from "mongoose";
import { CATEGORY_TABLE, ICategoryDoc } from "./category";

export interface ProductAttributes {
  name: string;
  value: string;
}
export const PRODUCT_TABLE = "Product";
export interface IProduct {
  title: string;
  slug: string;
  category: ObjectId | ICategoryDoc;
  description: string;
  summary?: string;
  images: string[];
  attributes: ProductAttributes[];
  active: boolean;
  price: number;
}
export interface IProductDoc extends Document<IProduct>, IProduct {}
const schema = new Schema({
  category: { type: Schema.ObjectId, ref: CATEGORY_TABLE, required: true },
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, trim: true },
  description: { type: String, default: "", maxLength: 250 },
  summary: { type: String, default: "" },
  images: [String],
  attributes: [
    {
      name: { type: String },
      value: { type: String },
    },
  ],
  price: { type: Number, default: 0 },
  active: { type: Boolean, default: true },
});
export const Product = models[PRODUCT_TABLE] || model<IProductDoc>(PRODUCT_TABLE, schema);
