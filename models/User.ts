import mongoose, { Schema } from "mongoose";

interface IUser extends Document {
  name: String;
  email: String;
  password: String;
  phone: String;
  address: String;
  role: String;
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, "Please provide name"],
      maxlength: 50,
      minlength: 3,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Pleae provide email"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email",
      ],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      minlength: 6,
      trim: true,
      select: false,
    },
    phone: {
      type: String,
      minlength: 10,
      maxlength: 13,
      trim: true,
    },
    role: {
      type: String,
      enum: ["user", "engg", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

export const User =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);
