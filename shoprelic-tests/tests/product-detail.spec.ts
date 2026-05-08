import { test, expect } from '@testrelic/playwright-analytics/fixture';

test.describe('Product Detail', () => {
  test('should display product information', async ({ page }) => {
    await page.goto('/products/1');
    await expect(page.locator('.product-detail-title')).toBeVisible();
    await expect(page.locator('.product-detail-price')).toBeVisible();
    await expect(page.locator('.product-detail-description')).toBeVisible();
  });

  test('should add product to cart', async ({ page }) => {
    await page.goto('/products/1');
    await page.click('button:has-text("Add to Cart")');
    // Should show confirmation or redirect to cart
    // Check cart has items
    await page.goto('/cart');
    const cartItems = page.locator('.cart-item, [class*="cart-item"], tbody tr');
    await expect(cartItems.first()).toBeVisible();
  });

  test('should display product reviews', async ({ page }) => {
    await page.goto('/products/1');
    const reviews = page.locator('.review, [class*="review"]');
    await expect(reviews.first()).toBeVisible();
  });

  test('should have back to catalog link', async ({ page }) => {
    await page.goto('/products/1');
    await page.click('a:has-text("Back"), a[href="/products"]');
    await expect(page).toHaveURL('/products');
  });

  test('should load product page within acceptable time', async ({ page }) => {
    // Product 7 has an intermittent slow DB query (~30% chance of 3-5s delay).
    // This test measures actual page load time and fails when it exceeds 2s,
    // creating a naturally flaky test that appears in ~30% of runs.
    const start = Date.now();
    await page.goto('/products/7');
    const loadTime = Date.now() - start;
    expect(loadTime).toBeLessThan(2000);
  });
});
