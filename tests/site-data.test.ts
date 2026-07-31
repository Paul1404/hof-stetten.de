import { describe, expect, test } from "bun:test";
import { HISTORY, PHOTO_CREDITS, POPULATION, SOURCES, VILLAGE_YEAR } from "../src/data/site";

describe("editorial data", () => {
  const sourceIds = SOURCES.map((source) => source.id);

  test("uses unique source anchors", () => {
    expect(new Set(sourceIds).size).toBe(sourceIds.length);
  });

  test("links every history entry to a documented source", () => {
    for (const entry of HISTORY) expect(sourceIds).toContain(entry.sourceId);
  });

  test("keeps population years chronological and values plausible", () => {
    expect(POPULATION.map((entry) => entry.year)).toEqual(
      [...POPULATION].map((entry) => entry.year).sort((a, b) => a - b),
    );
    for (const entry of POPULATION) expect(entry.people).toBeGreaterThan(0);
  });

  // Not every image comes from Wikimedia Commons: the aerial is CC BY 4.0 open
  // data from the Bavarian survey. The invariant is a named author, a Creative
  // Commons licence, and links to both the original and the licence deed.
  test("keeps public photo licensing complete", () => {
    for (const photo of PHOTO_CREDITS) {
      expect(photo.author.length).toBeGreaterThan(0);
      expect(photo.license).toMatch(/^CC BY/);
      expect(photo.source).toStartWith("https://");
      expect(photo.licenseUrl).toStartWith("https://creativecommons.org/");
    }
  });

  test("keeps the village year compact and evergreen", () => {
    expect(VILLAGE_YEAR.length).toBeGreaterThanOrEqual(4);
    for (const entry of VILLAGE_YEAR) {
      expect(entry.title.length).toBeGreaterThan(0);
      expect(`${entry.date} ${entry.detail}`).not.toMatch(/20\d{2}/);
    }
  });
});
