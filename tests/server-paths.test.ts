import { describe, expect, test } from "bun:test";
import { decodeRequestPath, safeFilePath } from "../server-paths";

describe("decodeRequestPath", () => {
  test("decodes a normal encoded path", () => {
    expect(decodeRequestPath("/Hofstetten%20mit%20Buehl")).toBe("/Hofstetten mit Buehl");
  });

  test("rejects malformed percent escapes", () => {
    expect(decodeRequestPath("/%E0%A4%A")).toBeNull();
  });
});

describe("safeFilePath", () => {
  const root = "/app/dist";

  test("keeps ordinary files inside the distribution root", () => {
    expect(safeFilePath(root, "/index.html")).toBe("/app/dist/index.html");
    expect(safeFilePath(root, "/quellen/index.html")).toBe("/app/dist/quellen/index.html");
  });

  test("rejects decoded traversal outside the distribution root", () => {
    expect(safeFilePath(root, "/../server.ts")).toBeNull();
    expect(safeFilePath(root, "/../../etc/passwd")).toBeNull();
  });

  test("rejects backslashes and null bytes", () => {
    expect(safeFilePath(root, "/..\\server.ts")).toBeNull();
    expect(safeFilePath(root, "/index.html\0.txt")).toBeNull();
  });
});
