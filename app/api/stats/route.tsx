import { DEPOSITS, MEMBERS } from "@/app/constants";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      status: "ok",
      data: {
        members: MEMBERS.length,
        deposits: DEPOSITS.length,
      },
    },
    { status: 200 }
  );
}
