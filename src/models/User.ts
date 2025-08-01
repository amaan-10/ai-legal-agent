/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose, { Document, Model } from "mongoose";

export interface IUser extends Document {
  _id: any;
  name?: string;
  email: string;
  password?: string;
  image?: string;
}

const UserSchema = new mongoose.Schema<IUser>({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  name: String,
  email: { type: String, unique: true, required: true },
  password: String,
  image: String,
});

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
