import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("about");
  await page.waitForLoadState("networkidle");
});

test("avatar is correct", async ({ page }) => {
  await expect(page.getByRole("img", { name: "My Picture" })).toBeVisible();
});

test("text is correct", async ({ page }) => {
  await expect(page.getByText("My name is Adrià and I'm a")).toBeVisible();
});

test("pet pics are correct", async ({ page }) => {
  await expect(
    page.getByRole("img", { name: "Dog with a Ball" }),
  ).toBeVisible();
});

test("course cards are correct", async ({ page }) => {
  await page.evaluate(() => window.scrollBy(0, 1500));
  await expect(
    page.getByRole("link", { name: "Python Programming" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "CS50's Introduction to Computer Science" }),
  ).toBeVisible();
});

test("courses have correct descriptions", async ({ page }) => {
  await page.evaluate(() => window.scrollBy(0, 1500));
  await expect(page.getByText("A thorough introduction to")).toBeVisible();
  await expect(page.getByText("A comprehensive introduction")).toBeVisible();
});

test("courses have correct certifications", async ({ page }) => {
  await page.evaluate(() => window.scrollBy(0, 1500));
  const certLink = page.locator("div:nth-child(2) > div:nth-child(2) > a");
  await expect(certLink).toBeVisible();
  await expect(certLink).toHaveAttribute(
    "href",
    "https://certificates.cs50.io/c388235e-2e43-4ffe-a4b8-e14e2e3332f5",
  );
  await expect(certLink).toHaveAttribute("target", "_blank");
});
