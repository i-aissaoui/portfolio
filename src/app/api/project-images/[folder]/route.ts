import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { readdir } from "fs/promises";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const SUPPORTED_EXT = /\.(png|jpe?g|webp|gif|svg)$/i;

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ folder: string }> }
) {
  const resolved = await context.params;
  const folder = resolved?.folder ?? "";
  const targetDir = path.join(PUBLIC_DIR, folder);

  try {
    const entries = await readdir(targetDir, { withFileTypes: true });
    const images = entries
      .filter((entry) => entry.isFile() && SUPPORTED_EXT.test(entry.name))
      .map((entry) => `/${folder}/${entry.name}`)
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

    return NextResponse.json({ images });
  } catch (error) {
    return NextResponse.json({ images: [], error: "folder_not_found", details: String(error) });
  }
}
