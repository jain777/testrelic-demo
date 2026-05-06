import { test, expect } from '@testrelic/playwright-analytics/fixture';

test.describe('Shopping Cart', () => {
  test('should show empty cart message', async ({ page }) => {
    await page.goto('/cart');
    await expect(page.locator('text=Your cart is empty')).toBeVisible();
  });

  test('should display added items in cart', async ({ page }) => {
    // Add item first
    await page.goto('/products/1');
    await page.click('button:has-text("Add to Cart")');
    await page.goto('/cart');
    const cartItems = page.locator('.cart-item, [class*="cart-item"], tbody tr');
    await expect(cartItems.first()).toBeVisible();
  });

  test('should update item quantity', async ({ page }) => {
    await page.goto('/products/1');
    await page.click('button:has-text("Add to Cart")');
    await page.goto('/cart');
    await page.fill('input[name="quantity"], input[type="number"]', '3');
    await page.click('button:has-text("Update")');
    await expect(page.locator('input[name="quantity"], input[type="number"]')).toHaveValue('3');
  });

  test('should remove item from cart', async ({ page }) => {
    await page.goto('/products/1');
    await page.click('button:has-text("Add to Cart")');
    await page.goto('/cart');
    await page.click('button:has-text("Remove")');
    await expect(page.locator('text=Your cart is empty')).toBeVisible();
  });

  test('should show subtotal', async ({ page }) => {
    await page.goto('/products/1');
    await page.click('button:has-text("Add to Cart")');
    await page.goto('/cart');
    await expect(page.locator('.cart-subtotal')).toBeVisible();
  });
});
