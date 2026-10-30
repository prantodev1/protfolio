import { existsSync } from "node:fs";
import path from "node:path";

// Server-only helper. Import it from Server Components, not from files marked
// "use client".
export function hasPublicFile(relativePath) {
  if (!relativePath) return false;

  const cleanPath = relativePath.replace(/^\/+/, "");
  return existsSync(path.join(process.cwd(), "public", cleanPath));
}
