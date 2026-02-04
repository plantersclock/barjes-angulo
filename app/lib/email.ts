import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormType = "general" | "booking" | "advisor";

export interface ContactFormData {
  formType: ContactFormType;
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  practiceWebsite?: string;
  description?: string;
}

const formTypeLabels: Record<ContactFormType, string> = {
  general: "General Contact",
  booking: "Speaking Booking Request",
  advisor: "Advisor Waitlist",
};

function generateEmailHtml(data: ContactFormData): string {
  const rows: string[] = [];

  rows.push(
    `<tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Form Type:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${formTypeLabels[data.formType]}</td></tr>`,
  );
  rows.push(
    `<tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.name}</td></tr>`,
  );
  rows.push(
    `<tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${data.email}">${data.email}</a></td></tr>`,
  );

  if (data.phone) {
    rows.push(
      `<tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="tel:${data.phone}">${data.phone}</a></td></tr>`,
    );
  }

  if (data.organization) {
    rows.push(
      `<tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Organization:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.organization}</td></tr>`,
    );
  }

  if (data.practiceWebsite) {
    rows.push(
      `<tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Practice Website:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="${data.practiceWebsite}">${data.practiceWebsite}</a></td></tr>`,
    );
  }

  if (data.description) {
    rows.push(
      `<tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Message:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.description}</td></tr>`,
    );
  }

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>New Contact Form Submission</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #0036fd; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">${formTypeLabels[data.formType]}</h1>
        </div>
        <div style="background-color: #f9f9f9; padding: 20px; border: 1px solid #eee; border-top: none; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            ${rows.join("")}
          </table>
        </div>
        <div style="text-align: center; margin-top: 20px; color: #888; font-size: 12px;">
          <p>This email was sent from the Barjes Angulo website contact form.</p>
        </div>
      </body>
    </html>
  `;
}

function generateSubject(data: ContactFormData): string {
  switch (data.formType) {
    case "general":
      return `New Contact: ${data.name}`;
    case "booking":
      return `Speaking Request: ${data.name}${data.organization ? ` - ${data.organization}` : ""}`;
    case "advisor":
      return `Advisor Waitlist: ${data.name}`;
  }
}

export async function sendContactEmail(
  data: ContactFormData,
): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await resend.emails.send({
      from: "Barjes Angulo Website <admin@wamwebdev.com>",
      to: ["wamwebdev@gmail.com"],
      replyTo: data.email,
      subject: generateSubject(data),
      html: generateEmailHtml(data),
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error: error.message };
    }

    // Future: Add SendGrid integration here
    // await addToSendGridList(data);

    return { success: true };
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, error: "Failed to send email" };
  }
}
