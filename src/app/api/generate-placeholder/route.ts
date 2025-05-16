import { NextResponse } from "next/server";

export async function GET() {
  // This is a placeholder API route that would normally generate images
  // For now, we'll use a public placeholder service
  return NextResponse.json({
    pragya: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pragya",
    praveen: "https://api.dicebear.com/7.x/avataaars/svg?seed=Praveen",
    mihir: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mihir",
  });
}