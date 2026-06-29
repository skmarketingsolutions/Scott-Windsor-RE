import nodemailer from "nodemailer";

export interface LeadPayload {
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  message?: string;
  address?: string;
  formType: string;
  sourcePage: string;
}

// Send email notification to Scott via Gmail SMTP
// Also forwards to scott_windsor3409@mail.lofty.me which auto-creates a CRM contact
export async function sendLeadEmail(payload: LeadPayload): Promise<boolean> {
  const gmailUser = process.env.GMAIL_USER || "windsorinfinity@gmail.com";
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  const toEmail = process.env.NOTIFY_EMAIL || "windsorinfinity@gmail.com";
  const loftyParsingEmail = "scott_windsor3409@mail.lofty.me";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://scottwindsorhomes.com";

  if (!gmailPass) {
    console.warn("[Email] GMAIL_APP_PASSWORD not set — skipping email notification");
    return false;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailPass },
  });

  const formLabel: Record<string, string> = {
    contact: "Contact Form",
    home_valuation: "Home Valuation Request",
    seller_valuation: "Seller Valuation",
    neighborhood_alert: "Neighborhood Alert Signup",
    first_time_buyer: "First-Time Buyer Inquiry",
    new_construction: "New Construction Inquiry",
    new_construction_inquiry: "New Construction Inquiry",
    blog_inquiry: "Blog Inquiry",
    open_house_rsvp: "Open House RSVP",
    school_alert: "School District Alert",
  };

  const subject = `🏠 New Lead: ${payload.firstName} ${payload.lastName || ""} — ${formLabel[payload.formType] || payload.formType}`;

  const rows = [
    ["Name", `${payload.firstName} ${payload.lastName || ""}`.trim()],
    ["Email", payload.email],
    payload.phone ? ["Phone", payload.phone] : null,
    payload.address ? ["Property", payload.address] : null,
    ["Form", formLabel[payload.formType] || payload.formType],
    ["Source Page", payload.sourcePage],
    payload.message ? ["Message", payload.message] : null,
  ].filter(Boolean) as [string, string][];

  const tableRows = rows
    .map(([label, value]) => `
      <tr>
        <td style="padding:8px 12px;color:#888;font-size:13px;width:110px;vertical-align:top;border-bottom:1px solid #f0f0f0">${label}</td>
        <td style="padding:8px 12px;color:#2C2C2C;font-size:14px;vertical-align:top;border-bottom:1px solid #f0f0f0">${value}</td>
      </tr>`)
    .join("");

  // Plain-text body formatted for Lofty's email parser
  const plainText = [
    `First Name: ${payload.firstName}`,
    `Last Name: ${payload.lastName || ""}`,
    `Email: ${payload.email}`,
    payload.phone ? `Phone: ${payload.phone}` : null,
    payload.address ? `Address: ${payload.address}` : null,
    payload.message ? `Message: ${payload.message}` : null,
    `Source: Scott Windsor Realty Website - ${payload.sourcePage}`,
  ].filter(Boolean).join("\n");

  const htmlBody = `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto">
      <div style="background:#2C2C2C;padding:18px 24px">
        <p style="color:#FF6B00;margin:0;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px">New Lead</p>
        <h2 style="color:#fff;margin:4px 0 0;font-size:18px">${payload.firstName} ${payload.lastName || ""}</h2>
      </div>
      <table style="width:100%;background:#fff;border:1px solid #eee;border-top:none">${tableRows}</table>
      <div style="padding:16px 24px;background:#F5F5F5;border:1px solid #eee;border-top:none;text-align:center">
        <a href="${siteUrl}/admin/leads"
           style="background:#FF6B00;color:#2C2C2C;padding:10px 24px;text-decoration:none;font-weight:700;font-size:13px;display:inline-block">
          View in Admin Panel →
        </a>
      </div>
      <p style="padding:12px 24px;font-size:11px;color:#bbb;margin:0">
        Scott Windsor Realty · Harrison, OH 45030 · 513-307-6449
      </p>
    </div>`;

  try {
    await transporter.sendMail({
      from: `Scott Windsor Realty <${gmailUser}>`,
      to: [toEmail, loftyParsingEmail].join(", "),
      subject,
      text: plainText,
      html: htmlBody,
    });
    return true;
  } catch (err) {
    console.error("[Email] Failed to send lead email:", err);
    return false;
  }
}
