import mongoose, { Schema, Types } from "mongoose";
import { string } from "yup";

interface IBooking extends Document {
  brand: string;
  status: string;
  createdBy: Schema.Types.ObjectId;
  description: string;
  jobId: string;
  phone: string;
}

const bookingSchema = new Schema<IBooking>(
  {
    brand: {
      type: String,
      maxlength: 50,
    },
    phone: {
      type: String,
      maxlength: 14,
      required: true,
    },
    status: {
      type: String,
      enum: ["Open", "Working", "Part Pending", "Completed"],
      default: "Open",
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
    description: {
      type: String,
    },
    jobId: {
      type: String,
      required: [true, "Job Id is missing"],
    },
  },
  { timestamps: true }
);

export const Booking =
  mongoose.models.Booking || mongoose.model<IBooking>("Booking", bookingSchema);
