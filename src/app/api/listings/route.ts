import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/utils";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status");
  const featured = searchParams.get("featured");
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "20");

  const where: any = {};
  if (status) where.status = status;
  if (featured === "true") where.featured = true;

  const [listings, total] = await Promise.all([
    prisma.listing.findMany({
      where,
      orderBy: [{ featuredOrder: "asc" }, { createdAt: "desc" }],
      skip: (page - 1) * limit,
      take: limit,
      include: { openHouses: true },
    }),
    prisma.listing.count({ where }),
  ]);

  return NextResponse.json({ listings, total, page, pages: Math.ceil(total / limit) });
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await req.json();
    const slug = slugify(`${body.address}-${body.city}`);

    const listing = await prisma.listing.create({
      data: {
        ...body,
        slug,
        photos: JSON.stringify(body.photos || []),
      },
    });

    return NextResponse.json(listing);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
