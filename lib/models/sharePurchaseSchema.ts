import mongoose, { Schema, Document } from "mongoose";
import { ISharePurchase } from "../interfaces/ISharePurchase";

// Define the document interface for MongoDB
interface ISharePurchaseDocument extends Document {
  fullName: string;
  email: string;
  address: string;
  citizenshipNo: string;
  issuingDistrict: string;
  sharesCount: number;
  amountPaid: number;
  contactNo: string;
  paymentDate: Date;
  createdAt: Date;
}

const SharePurchaseSchema = new Schema<ISharePurchaseDocument>({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  citizenshipNo: { type: String, required: true },
  issuingDistrict: { type: String, required: true },
  sharesCount: { type: Number, required: true },
  amountPaid: { type: Number, required: true },
  contactNo: { type: String, required: true },
  paymentDate: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const SharePurchase =
  mongoose.models.SharePurchase ||
  mongoose.model<ISharePurchaseDocument>("SharePurchase", SharePurchaseSchema);
