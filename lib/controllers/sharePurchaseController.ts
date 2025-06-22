import { ISharePurchase } from "../interfaces/ISharePurchase";
import { sendEmail } from "../config/brevoConfig";
import { appendToGoogleSheet } from "../config/googleSheetsConfig";
import { SharePurchase } from "../models/sharePurchaseSchema";
import { connectMongoDB } from "../config/mongodbConfig";

export async function createSharePurchase(data: ISharePurchase) {
  try {
    // Connect to MongoDB
    await connectMongoDB();

    // Transform string inputs to appropriate types
    const sharePurchaseData = {
      fullName: data.fullName,
      email: data.email,
      address: data.address,
      citizenshipNo: data.citizenshipNo,
      issuingDistrict: data.issuingDistrict,
      sharesCount: parseInt(data.sharesCount),
      amountPaid: parseFloat(data.amountPaid),
      contactNo: data.contactNo,
      paymentDate: new Date(data.paymentDate),
      createdAt: new Date(),
    };

    // Save to MongoDB
    try {
      await SharePurchase.create(sharePurchaseData);
    } catch (error) {
      throw new Error(
        `MongoDB Error: Failed to save share purchase data - ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }

    // Send email to user
    const emailContent = {
      to: [{ email: data.email, name: data.fullName }],
      subject: "Share Purchase Acknowledgment - PureLand Hospitality",
      htmlContent: `
        <h1>Share Purchase Acknowledgment</h1>
        <p>Dear ${data.fullName},</p>
        <p>Thank you for your share purchase of ${
          data.sharesCount
        } shares in PureLand Hospitality Pvt. Ltd.</p>
        <h3>Details:</h3>
        <ul>
          <li><strong>Name:</strong> ${data.fullName}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Address:</strong> ${data.address}</li>
          <li><strong>Citizenship No:</strong> ${data.citizenshipNo}</li>
          <li><strong>Issuing District:</strong> ${data.issuingDistrict}</li>
          <li><strong>Shares:</strong> ${data.sharesCount}</li>
          <li><strong>Amount Paid:</strong> NPR ${parseFloat(
            data.amountPaid
          ).toLocaleString()}</li>
          <li><strong>Contact:</strong> ${data.contactNo}</li>
          <li><strong>Payment Date:</strong> ${data.paymentDate}</li>
        </ul>
        <p>Please retain this email for your records.</p>
        <p>Best regards,<br>PureLand Hospitality Pvt. Ltd.</p>
      `,
    };
    // Send email (with improved error handling)
    const emailResult = await sendEmail(emailContent);
    console.log("📧 Email result:", emailResult);

    // Save to Google Sheets (with improved error handling)
    const sheetsResult = await appendToGoogleSheet(data);
    console.log("📊 Google Sheets result:", sheetsResult);

    return { message: "Share purchase recorded successfully" };
  } catch (error) {
    console.error("Controller Error:", error);
    throw error; // Re-throw to be caught in the API route
  }
}
