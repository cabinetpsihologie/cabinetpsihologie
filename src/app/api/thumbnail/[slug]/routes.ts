import { NextResponse } from "next/server";
import { blogService } from "@/app/_services/blog-service";

type Params = Promise<{
  locale: "en" | "hu";
  slug: string;
}>;

function parseDataUrl(dataUrl: string) {
  // Matches: data:<mime>;base64,<data>
  const match = dataUrl.match(/^data:([^;]+);base64,(.*)$/);
  if (!match) return null;
  return { mime: match[1], base64: match[2] };
}

export async function GET(req: Request, { params }: { params: Params }) {
  // Try to obtain slug from params (if provided) or from query string as fallback
  const { slug } = await params;

  if (!slug) {
    return NextResponse.json({ error: "Missing slug" }, { status: 400 });
  }

  const blog = await blogService.getBlogBySlug(slug);
  if (!blog)
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });

  const imageField = blog?.imageUrl;
  if (!imageField)
    return NextResponse.json({ error: "No image for blog" }, { status: 404 });

  // If it's a data URL, parse it and return bytes
  if (typeof imageField === "string" && imageField.startsWith("data:")) {
    const parsed = parseDataUrl(imageField);
    if (!parsed)
      return NextResponse.json({ error: "Invalid data URL" }, { status: 400 });
    const buffer = Buffer.from(parsed.base64, "base64");
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": parsed.mime,
        "Cache-Control": "public, max-age=86400",
        "Content-Length": String(buffer.length),
      },
    });
  }

  // If it's raw base64 (no data: prefix), try to decode and assume JPEG as a reasonable default
  const rawB64Candidate = String(imageField).trim();
  const rawBase64Pattern = /^[A-Za-z0-9+/=\s]+$/;
  if (rawBase64Pattern.test(rawB64Candidate) && rawB64Candidate.length > 100) {
    try {
      const buffer = Buffer.from(rawB64Candidate, "base64");
      return new NextResponse(buffer, {
        headers: {
          "Content-Type": "image/jpeg",
          "Cache-Control": "public, max-age=86400",
          "Content-Length": String(buffer.length),
        },
      });
    } catch {
      // fallthrough to next case
    }
  }

  // If it's an HTTP(s) URL, redirect the client to it so the image is served from the origin
  if (typeof imageField === "string" && /^https?:\/\//i.test(imageField)) {
    return NextResponse.redirect(imageField, 307);
  }

  // Unknown format
  return NextResponse.json(
    { error: "Unsupported image format" },
    { status: 400 }
  );
}
