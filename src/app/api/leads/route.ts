import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendLeadEmail } from "@/lib/ghl";
import { z } from "zod";

const schema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().optional(),
  address: z.string().optional(),
  formType: z.string(),
  sourcePage: z.string(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    // Store in database
    const lead = await prisma.lead.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        message: data.message
          ? `${data.address ? `Property: ${data.address}\n` : ""}${data.message}`
          : data.address
          ? `Property: ${data.address}`
          : undefined,
        formType: data.formType,
        sourcePage: data.sourcePage,
      },
    });

    // Fire-and-forget: email Scott + auto-create contact in Lofty CRM via parsing email
    const leadPayload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      message: data.message,
      address: data.address,
      formType: data.formType,
      sourcePage: data.sourcePage,
    };
    sendLeadEmail(leadPayload);

    return NextResponse.json({ success: true, id: lead.id });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.issues }, { status: 400 });
    }
    console.error("Lead submission error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  // Admin only — check auth header
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = 20;

  const [leads, total] = await Promise.all([
    prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.lead.count(),
  ]);

  return NextResponse.json({ leads, total, page, pages: Math.ceil(total / limit) });
}
