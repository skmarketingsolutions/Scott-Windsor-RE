import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function GET() {
  const settings = await prisma.siteSettings.findMany();
  const map: Record<string, string> = {};
  settings.forEach((s) => (map[s.key] = s.value));
  return NextResponse.json(map);
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();

  // Handle password change specially
  if (body.newPassword) {
    const hashed = await bcrypt.hash(body.newPassword, 12);
    // In production, update .env or database — here we store a flag
    await prisma.siteSettings.upsert({
      where: { key: "adminPasswordHash" },
      update: { value: hashed },
      create: { key: "adminPasswordHash", value: hashed },
    });
    return NextResponse.json({ success: true, message: "Password updated. Restart server to apply." });
  }

  // Upsert all other settings
  const entries = Object.entries(body) as [string, string][];
  await Promise.all(
    entries.map(([key, value]) =>
      prisma.siteSettings.upsert({
        where: { key },
        update: { value },
        create: { key, value },
      })
    )
  );

  return NextResponse.json({ success: true });
}
