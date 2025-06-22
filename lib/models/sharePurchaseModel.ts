import { ISharePurchase } from "@/lib/interfaces/ISharePurchase";

// Model for type safety; data is managed by Mongoose schema
export class SharePurchase {
  constructor(public data: ISharePurchase) {}
}
