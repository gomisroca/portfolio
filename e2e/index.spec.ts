import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("");
  await page.waitForLoadState("networkidle");
});

test("meta is correct", async ({ page }) => {
  await expect(page).toHaveTitle("Adrià Gomis | Portfolio");
});

test("navbar is correct", async ({ page }) => {
  await expect(page.getByRole("link", { name: "Home" })).toBeVisible();
  await expect(page.getByRole("link", { name: "About" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Contact" })).toBeVisible();
});

test("welcome text is correct", async ({ page }) => {
  await expect(
    page.getByRole("heading", { name: "Hi, I'm Adrià 👋" }),
  ).toBeVisible();
});

test("welcome description is correct", async ({ page }) => {
  await expect(
    page.getByRole("heading", { name: "Full-stack web developer" }),
  ).toBeVisible();
});

test("stacked cards are correct", async ({ page }) => {
  await expect(
    page.getByRole("img", { name: "Oura", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("img", {
      name: "Dungeoneer",
      exact: true,
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("img", {
      name: "Echoes",
      exact: true,
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("img", { name: "Esia", exact: true }),
  ).toBeVisible();
});

test("sections are correct", async ({ page }) => {
  await page.evaluate(() => window.scrollBy(0, 600));
  await page.waitForTimeout(2000);
  await expect(
    page.getByRole("heading", { name: "P r o j e c t s" }),
  ).toBeVisible();

  await page.evaluate(() => window.scrollBy(0, 1200));
  await page.waitForTimeout(3000);
  await expect(
    page.getByRole("heading", {
      name: "M o n t h l y R e t r o s p e c t i v e",
    }),
  ).toBeVisible();
});
