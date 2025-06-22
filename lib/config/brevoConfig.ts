import nodemailer from "nodemailer";

export async function sendEmail(emailData: {
  to: { email: string; name: string }[];
  subject: string;
  htmlContent: string;
}) {
  // Skip email sending if SMTP credentials are not properly configured
  if (
    !process.env.BREVO_SMTP_LOGIN ||
    !process.env.BREVO_SMTP_PASSWORD ||
    process.env.BREVO_SMTP_LOGIN === "your-smtp-login-here" ||
    process.env.BREVO_SMTP_PASSWORD === "your-smtp-password-here"
  ) {
    console.log(
      "✅ Email sending skipped - Brevo SMTP credentials not configured"
    );
    console.log("📧 Email would have been sent to:", emailData.to[0].email);
    console.log("📝 Subject:", emailData.subject);
    return {
      message: "Email sending skipped - SMTP credentials not configured",
      success: true,
    };
  }

  try {
    console.log("🔧 Configuring Brevo SMTP with:");
    console.log("   Host: smtp-relay.brevo.com");
    console.log("   Port: 587");
    console.log("   User:", process.env.BREVO_SMTP_LOGIN);
    console.log(
      "   Password:",
      process.env.BREVO_SMTP_PASSWORD ? "***configured***" : "❌ NOT SET"
    );

    // Create SMTP transporter with complete Brevo configuration
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false, // false for port 587, true for port 465
      auth: {
        user: process.env.BREVO_SMTP_LOGIN,
        pass: process.env.BREVO_SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
      connectionTimeout: 60000, // 60 seconds
      greetingTimeout: 30000, // 30 seconds
      socketTimeout: 60000, // 60 seconds
    });

    console.log("🔍 Testing SMTP connection...");
    // Verify SMTP connection
    await transporter.verify();
    console.log("✅ SMTP connection verified successfully");

    // Send email
    const mailOptions = {
      from: {
        name: "PureLand Hospitality",
        address:
          process.env.BREVO_SENDER_EMAIL || process.env.BREVO_SMTP_LOGIN!,
      },
      to: emailData.to.map((recipient) => ({
        name: recipient.name,
        address: recipient.email,
      })),
      subject: emailData.subject,
      html: emailData.htmlContent,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log(
      "✅ Email sent successfully via SMTP to:",
      emailData.to[0].email
    );
    console.log("📧 Message ID:", result.messageId);

    return {
      message: "Email sent successfully",
      success: true,
      messageId: result.messageId,
    };
  } catch (error: any) {
    console.error("❌ Brevo SMTP Error:", error.message);
    console.error("📋 Error details:", {
      code: error.code,
      responseCode: error.responseCode,
      response: error.response,
      command: error.command,
    });

    // Provide specific error guidance
    if (error.code === "EAUTH" || error.responseCode === 535) {
      console.log("🔑 Authentication failed - Invalid SMTP credentials");
      console.log("💡 Troubleshooting steps:");
      console.log(
        "   1. Check your Brevo SMTP login:",
        process.env.BREVO_SMTP_LOGIN
      );
      console.log("   2. Verify your SMTP password is correct");
      console.log("   3. Make sure your Brevo account is active");
      console.log("   4. Check if you need to generate a new SMTP password");
    } else if (error.code === "ECONNECTION" || error.code === "ETIMEDOUT") {
      console.log("🌐 Connection failed - Network or server issue");
      console.log(
        "💡 Try again in a few moments or check your internet connection"
      );
    } else if (error.code === "EENVELOPE") {
      console.log("📧 Email address issue - Check sender/recipient emails");
    }

    console.log("📧 Email would have been sent to:", emailData.to[0].email);
    console.log("📝 Subject:", emailData.subject);

    // Don't throw error to allow the application to continue working
    console.log(
      "⚠️ Email sending failed, but continuing with other operations"
    );
    return {
      message: "Email sending failed but operation continued",
      success: false,
      error: error.message,
    };
  }
}
