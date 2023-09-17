import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

// prisma/clientのインスタンス化
const prisma = new PrismaClient();

// 取得する前にDBに接続する処理
export async function main() {
  try {
    // prisma.$connect関数は`npm i @prisma/client`のインストールが必要
    await prisma.$connect;
  } catch (err) {
    return Error("DBに接続失敗しました");
  }
}

// ブログ全記事取得
export const GET = async (req: Request, res: NextResponse) => {
  try {
    await main();
    // postというmodelから全記事取得（post.findMany()）
    const posts = await prisma.post.findMany();
    return NextResponse.json({ message: "成功しました" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "失敗しました" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
// ブログ投稿用
export const GET = async (req: Request, res: NextResponse) => {
  try {
    await main();
    // postというmodelから全記事取得（post.findMany()）
    const posts = await prisma.post.findMany();
    return NextResponse.json({ message: "成功しました" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "失敗しました" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
