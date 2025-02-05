import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("contact");
  await page.waitForLoadState("networkidle");
});

test("email is correct", async ({ page }) => {
  const emailLink = page.getByRole("link", { name: "gomisroca@gmail.com" });
  await expect(emailLink).toBeVisible();
  await expect(emailLink).toHaveAttribute("href", "mailto:gomisroca@gmail.com");
});

test("contact form is correct", async ({ page }) => {
  await expect(page.getByLabel("Name")).toBeVisible();
  await expect(page.getByLabel("Email")).toBeVisible();
  await expect(page.getByLabel("Message")).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Send Message" }),
  ).toBeVisible();
});
