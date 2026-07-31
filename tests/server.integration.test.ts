import { afterAll, beforeAll, describe, expect, test } from "bun:test";

const port = 4398;
const base = `http://127.0.0.1:${port}`;
let server: ReturnType<typeof Bun.spawn>;
const processEnvironment = Object.fromEntries(
  Object.entries(Bun.env).filter((entry): entry is [string, string] => typeof entry[1] === "string"),
);

beforeAll(async () => {
  server = Bun.spawn(["bun", "run", "server.ts"], {
    cwd: import.meta.dir + "/..",
    env: { ...processEnvironment, HOST: "127.0.0.1", PORT: String(port) },
    stdout: "ignore",
    stderr: "pipe",
  });

  for (let attempt = 0; attempt < 50; attempt += 1) {
    try {
      const response = await fetch(`${base}/health.json`);
      if (response.ok) return;
    } catch {
      await Bun.sleep(20);
    }
  }
  throw new Error("production server did not become ready");
});

afterAll(() => server?.kill());

describe("production server", () => {
  test("serves pages and a real 404", async () => {
    expect((await fetch(`${base}/`)).status).toBe(200);
    expect((await fetch(`${base}/quellen`)).status).toBe(200);
    expect((await fetch(`${base}/does-not-exist`)).status).toBe(404);
  });

  test("blocks encoded traversal outside dist", async () => {
    const response = await fetch(`${base}/%2e%2e%2fserver.ts`);
    expect(response.status).toBe(404);
    expect(await response.text()).not.toContain("Bun.serve");
  });

  test("handles malformed paths and unsupported methods safely", async () => {
    expect((await fetch(`${base}/%E0%A4%A`)).status).toBe(400);
    const response = await fetch(`${base}/`, { method: "POST" });
    expect(response.status).toBe(405);
    expect(response.headers.get("allow")).toBe("GET, HEAD");
  });

  test("sends baseline security and cache headers", async () => {
    const response = await fetch(`${base}/`);
    expect(response.headers.get("content-security-policy")).toContain("frame-ancestors 'none'");
    expect(response.headers.get("x-content-type-options")).toBe("nosniff");
    expect(response.headers.get("cache-control")).toBe("no-cache");
  });

  test("redirects the www host to the canonical apex", async () => {
    const response = await fetch(`${base}/quellen?from=test`, {
      headers: { host: "www.hof-stetten.de" },
      redirect: "manual",
    });
    expect(response.status).toBe(308);
    expect(response.headers.get("location")).toBe("https://hof-stetten.de/quellen?from=test");
  });
});
