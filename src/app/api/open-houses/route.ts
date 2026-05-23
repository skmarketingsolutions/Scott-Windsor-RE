import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const today = new Date().toISOString().split("T")[0];
  const openHouses = await prisma.openHouse.findMany({
    where: { cancelled: false, date: { gte: today } },
    include: { listing: true },
    orderBy: { date: "asc" },
  });
  return NextResponse.json(openHouses);
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json();
  const oh = await prisma.openHouse.create({ data: body });
  return NextResponse.json(oh);
}
