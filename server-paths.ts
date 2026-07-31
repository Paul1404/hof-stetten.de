import { resolve, sep } from "node:path";

export const decodeRequestPath = (encodedPath: string): string | null => {
  try {
    return decodeURIComponent(encodedPath);
  } catch {
    return null;
  }
};

export const safeFilePath = (root: string, requestedPath: string): string | null => {
  if (requestedPath.includes("\0") || requestedPath.includes("\\")) return null;

  const resolvedRoot = resolve(root);
  const relativePath = requestedPath.replace(/^\/+/, "");
  const candidate = resolve(resolvedRoot, relativePath);

  if (candidate === resolvedRoot || candidate.startsWith(`${resolvedRoot}${sep}`)) {
    return candidate;
  }
  return null;
};
