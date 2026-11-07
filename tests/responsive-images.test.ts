import { expect, test } from "bun:test";

test("aerial photographs use responsive JPEG fallbacks and the crest retains its PNG fallback", async () => {
  const images: Record<string, { src: string; srcset: string }> = {};
  const html = await Bun.file("dist/index.html").text();
  const collect = (name: string) => ({
    element(element: { getAttribute(name: string): string | null }) {
      images[name] = {
        src: element.getAttribute("src") ?? "",
        srcset: element.getAttribute("srcset") ?? "",
      };
    },
  });
  await new HTMLRewriter()
    .on(".hero picture img", collect("hero"))
    .on(".aerial-figure picture img", collect("aerial"))
    .on('img[alt^="Das Hofstettener Dorfwappen"]', collect("crest"))
    .transform(new Response(html))
    .text();

  for (const name of ["hero", "aerial"]) {
    expect(images[name]?.src).toEndWith(".jpg");
    expect(images[name]?.srcset).toContain(".jpg ");
    expect(images[name]?.srcset).not.toContain(".png ");
  }
  expect(images.crest?.src).toEndWith(".png");
});
