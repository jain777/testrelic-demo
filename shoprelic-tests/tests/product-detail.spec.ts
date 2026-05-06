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
});
