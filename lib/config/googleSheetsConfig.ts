import { google } from "googleapis";
import { ISharePurchase } from "../interfaces/ISharePurchase";

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

// Headers for the Google Sheet
const SHEET_HEADERS = [
  "Timestamp",
  "Name",
  "Email",
  "Address",
  "Citizenship No",
  "Issuing District",
  "Shares",
  "Amount Paid",
  "Contact",
  "Payment Date",
];

async function ensureHeadersExist() {
  try {
    // Check if the first row has data (headers)
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
      range: "Sheet1!A1:J1",
    });

    const firstRow = response.data.values?.[0];

    // If no data in first row or headers don't match, add headers
    if (!firstRow || firstRow.length === 0 || firstRow[0] !== "Timestamp") {
      console.log("📋 Adding headers to Google Sheet...");
      await sheets.spreadsheets.values.update({
        spreadsheetId: process.env.GOOGLE_SHEET_ID!,
        range: "Sheet1!A1:J1",
        valueInputOption: "RAW",
        requestBody: {
          values: [SHEET_HEADERS],
        },
      });
      console.log("✅ Headers added to Google Sheet");
    }
  } catch (error: any) {
    console.log("⚠️ Could not check/add headers:", error.message);
    // Continue anyway - headers are not critical for functionality
  }
}

export async function appendToGoogleSheet(data: ISharePurchase) {
  try {
    // Ensure headers exist before appending data
    await ensureHeadersExist();

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
      range: "Sheet1!A2:J",
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [
            new Date().toISOString(),
            data.fullName,
            data.email,
            data.address,
            data.citizenshipNo,
            data.issuingDistrict,
            data.sharesCount,
            data.amountPaid,
            data.contactNo,
            data.paymentDate,
          ],
        ],
      },
    });
    console.log("✅ Data saved to Google Sheets successfully");
    return response.data;
  } catch (error: any) {
    console.error("❌ Google Sheets API Error:", error.message);

    // Check if it's a permission error
    if (error.code === 403) {
      console.log("🔑 Permission denied for Google Sheets API");
      console.log(
        "📋 Please ensure the service account has access to the spreadsheet:"
      );
      console.log(
        "   1. Open the Google Sheet: https://docs.google.com/spreadsheets/d/" +
          process.env.GOOGLE_SHEET_ID
      );
      console.log("   2. Click 'Share' and add this email with Editor access:");
      console.log(
        "   3. Service Account Email:",
        process.env.GOOGLE_CLIENT_EMAIL
      );
      console.log("📊 Data that would have been saved:");
      console.log("   - Name:", data.fullName);
      console.log("   - Email:", data.email);
      console.log("   - Shares:", data.sharesCount);
    }

    // Don't throw error to allow the application to continue working
    console.log(
      "⚠️ Google Sheets saving failed, but continuing with other operations"
    );
    return {
      message: "Google Sheets saving failed but operation continued",
      success: false,
    };
  }
}
