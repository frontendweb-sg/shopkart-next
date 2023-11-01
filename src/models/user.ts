import { Password } from "@/utils/password";
import mongoose, { Schema, Document, Models } from "mongoose";
export const USER_TABLE = "User";
export interface IUser {
  name: string;
  email: string;
  password: string;
  mobile: string;
  avatar: string;
  role: string;
  active: string;
  emailVerify: boolean;
  refereshToken?: boolean;
  secretToken?: boolean;
}
export interface IUserDoc extends Document<IUser>, IUser {}
const schema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true, trim: true },
    mobile: { type: String, required: true, trim: true },
    avatar: { type: String, default: "" },
    role: { type: String, default: "user", enum: ["user", "admin"] },
    active: { type: Boolean, default: true },
    emailVerify: { type: Boolean, default: false },
    refereshToken: { type: String },
    secretToken: { type: String },
  },
  {
    timestamps: true,
    id: true,
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
        delete ret.__v;
        delete doc.__v;
        ret.id = ret._id;
        doc.id = ret._id;
      },
    },
  }
);

schema.pre("save", function cb(done) {
  const pwd = Password.hash(this.get("password"));
  if (this.isModified("password")) {
    this.set("password", pwd);
  }
  let isVerify = this.get("role") === "admin" ? true : false;
  this.set("emailVerify", isVerify);
  done();
});

export const User =
  mongoose.models[USER_TABLE] || mongoose.model<IUserDoc>(USER_TABLE, schema);
