import { fetchSystemInfo } from "@/app/actions";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const systemInfo = await fetchSystemInfo();
    return NextResponse.json(systemInfo);
  } catch (error) {
    console.error("API: Failed to fetch system info", error);
    return NextResponse.json(
      { error: "Failed to fetch system info" },
      { status: 500 }
    );
  }
}
