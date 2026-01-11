import { DEPOSITS } from "@/app/constants";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ status: "ok", data: DEPOSITS }, { status: 200 });
}
