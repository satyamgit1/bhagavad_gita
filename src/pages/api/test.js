import { NextRequest, NextResponse } from "next/server";

export async function GET(request) {
  console.log("Cron Job Ran at: ", new Date());
  return new NextResponse("Cron job ran", { status: 200 });
}
