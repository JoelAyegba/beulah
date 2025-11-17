import { NextResponse } from "next/server";
import { getBlogPosts } from "@/lib/blog";

export async function GET() {
  try {
    const posts = await getBlogPosts();
    return NextResponse.json(posts);
  } catch (error) {
    console.error("/api/blog error:", error);
    return NextResponse.json({ error: "Failed to load blog posts" }, { status: 500 });
  }
}