import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      enabled: false,
      message:
        "External AI integration is not configured. The application currently uses the local tutor engine.",
    },
    { status: 501 },
  );
}
