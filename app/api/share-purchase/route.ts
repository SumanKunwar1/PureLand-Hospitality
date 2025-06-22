import { NextRequest, NextResponse } from "next/server";
import { createSharePurchase } from "@/lib/controllers/sharePurchaseController";
import { validateSharePurchase } from "@/lib/middleware/validateSharePurchase";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const errors = validateSharePurchase(body);
    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }
    const result = await createSharePurchase(body);
    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    console.error("API Error:", error);
    let errorMessage = "Internal Server Error";
    if (error.message.includes("MongoDB")) {
      errorMessage = "Failed to save data to the database";
    } else if (
      error.message.includes("Brevo") ||
      error.message.includes("SMTP")
    ) {
      errorMessage = "Failed to send confirmation email";
    } else if (error.message.includes("Google Sheets")) {
      errorMessage = "Failed to save data to Google Sheets";
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
