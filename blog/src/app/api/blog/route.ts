import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function main() {
  try {
    await prisma.$connect;
  } catch (err) {
    return Error("faild to connect");
  }
}

export const GET = async (req: Request, res: NextResponse) => {
  try {
    await main();

    const posts = await prisma.post.findMany();
    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "faild" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const GET = async (req: Request, res: NextResponse) => {
  try {
    await main();

    const posts = await prisma.post.findMany();
    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "faild" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
