import { test, expect } from '@testrelic/playwright-analytics/fixture';

test.describe('End-to-End Flows', () => {
  test('should complete full purchase flow', async ({ page }) => {
    // Login
    await page.goto('/login');
    await page.fill('input[name="email"]', 'demo@shoprelic.com');
    await page.fill('input[name="password"]', 'password123');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('/');

    // Browse products
    await page.goto('/products');
    await expect(page.locator('.product-card, [class*="product-card"]').first()).toBeVisible();

    // View product detail
    await page.click('.product-card a, [class*="product-card"] a');
    await expect(page).toHaveURL(/\/products\/\d+/);

    // Add to cart
    await page.click('button:has-text("Add to Cart")');

    // Go to cart
    await page.goto('/cart');
    await expect(page.locator('.cart-item, [class*="cart-item"], tbody tr').first()).toBeVisible();

    // Checkout
    await page.goto('/checkout');
    await page.fill('input[name="shippingName"]', 'Demo User');
    await page.fill('input[name="address"]', '123 Test Street');
    await page.fill('input[name="city"]', 'San Francisco');
    await page.fill('input[name="state"]', 'CA');
    await page.fill('input[name="zip"]', '94102');
    await page.fill('input[name="cardNumber"]', '4111111111111111');
    await page.fill('input[name="expiry"]', '12/28');
    await page.fill('input[name="cvv"]', '123');
    await page.click('button:has-text("Place Order")');

    // Confirm
    await expect(page).toHaveURL(/order-confirmation/);
    await expect(page.locator('text=Order Confirmed')).toBeVisible();
  });

  test('should browse and search products without login', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('section.hero')).toBeVisible();

    await page.goto('/products');
    await page.fill('input[name="search"]', 'wireless');
    await page.click('.search-form button[type="submit"]');
    await expect(page).toHaveURL(/search=wireless/);
  });

  test('should require login for checkout', async ({ page }) => {
    await page.goto('/products/1');
    await page.click('button:has-text("Add to Cart")');
    await page.goto('/checkout');
    // Should redirect to login
    await expect(page).toHaveURL(/login/);
  });

  test('should persist cart across pages', async ({ page }) => {
    await page.goto('/products/1');
    await page.click('button:has-text("Add to Cart")');

    // Navigate around
    await page.goto('/products');
    await page.goto('/');

    // Check cart still has items
    await page.goto('/cart');
    const cartItems = page.locator('.cart-item, [class*="cart-item"], tbody tr');
    await expect(cartItems.first()).toBeVisible();
  });
});
