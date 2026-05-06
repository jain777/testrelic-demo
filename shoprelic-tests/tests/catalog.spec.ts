import { test, expect } from '@testrelic/playwright-analytics/fixture';

test.describe('Product Catalog', () => {
  test('should display product listings', async ({ page }) => {
    await page.goto('/products');
    const products = page.locator('.product-card, [class*="product-card"]');
    await expect(products.first()).toBeVisible();
    const count = await products.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should search for products', async ({ page }) => {
    await page.goto('/products');
    await page.fill('input[name="search"]', 'headphones');
    await page.click('.search-form button[type="submit"]');
    // Should show filtered results
    await expect(page).toHaveURL(/search=headphones/);
  });

  test('should filter by category', async ({ page }) => {
    await page.goto('/products');
    await page.click('a:has-text("Electronics"), button:has-text("Electronics"), [data-category="Electronics"]');
    await expect(page).toHaveURL(/category=Electronics/);
    const products = page.locator('.product-card, [class*="product-card"]');
    await expect(products.first()).toBeVisible();
  });

  test('should sort products by price low to high', async ({ page }) => {
    await page.goto('/products');
    await page.selectOption('select[name="sort"]', 'price-asc');
    await expect(page).toHaveURL(/sort=price-asc/);
  });

  test('should navigate to product detail from catalog', async ({ page }) => {
    await page.goto('/products');
    await page.click('.product-card a, [class*="product-card"] a');
    await expect(page).toHaveURL(/\/products\/\d+/);
  });
});
