import { test, expect } from '@testrelic/playwright-analytics/fixture';

test.describe('Landing Page', () => {
  test('should load the landing page', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/ShopRelic/);
    await expect(page.locator('section.hero')).toBeVisible();
  });

  test('should display featured products', async ({ page }) => {
    await page.goto('/');
    const products = page.locator('.product-card, [class*="product"]');
    await expect(products.first()).toBeVisible();
    const count = await products.count();
    expect(count).toBeGreaterThanOrEqual(4);
  });

  test('should have working navigation links', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('nav a[href="/products"]')).toBeVisible();
    await expect(page.locator('nav a[href="/cart"]')).toBeVisible();
    await expect(page.locator('nav a[href="/login"]')).toBeVisible();
  });

  test('should navigate to products page from CTA', async ({ page }) => {
    await page.goto('/');
    await page.click('a:has-text("Shop Now"), a[href="/products"]');
    await expect(page).toHaveURL('/products');
  });
});
