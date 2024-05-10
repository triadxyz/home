import api from "@/constants/api";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();
  try {
    await api.post("/whitelist", data);
  } catch (error) {
    return NextResponse.json({ status: 400, message: error });
  }

  return NextResponse.json({ status: 200, message: "Added to whitelist!" });
}
