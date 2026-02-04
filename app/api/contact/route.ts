import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail, ContactFormData, ContactFormType } from "@/app/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { formType, name, email, phone, organization, practiceWebsite, description } = body;

    // Validate required fields
    if (!formType || !name || !email) {
      return NextResponse.json(
        { error: "Missing required fields: formType, name, and email are required" },
        { status: 400 }
      );
    }

    // Validate formType
    const validFormTypes: ContactFormType[] = ["general", "booking", "advisor"];
    if (!validFormTypes.includes(formType)) {
      return NextResponse.json(
        { error: "Invalid form type" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const formData: ContactFormData = {
      formType,
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim(),
      organization: organization?.trim(),
      practiceWebsite: practiceWebsite?.trim(),
      description: description?.trim(),
    };

    const result = await sendContactEmail(formData);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
