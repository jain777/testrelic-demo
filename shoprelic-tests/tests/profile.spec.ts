import { test, expect } from '@testrelic/playwright-analytics/fixture';

test.describe('User Profile', () => {
  async function loginAsDemo(page) {
    await page.goto('/login');
    await page.fill('input[name="email"]', 'demo@shoprelic.com');
    await page.fill('input[name="password"]', 'password123');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('/');
  }

  test('should display user profile information', async ({ page }) => {
    await loginAsDemo(page);
    await page.goto('/profile');
    await expect(page.locator('text=Demo User')).toBeVisible();
    await expect(page.locator('text=demo@shoprelic.com')).toBeVisible();
  });

  test('should display order history', async ({ page }) => {
    await loginAsDemo(page);

    // Create an order first
    await page.goto('/products/1');
    await page.click('button:has-text("Add to Cart")');
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
    await expect(page).toHaveURL(/order-confirmation/);

    // Check profile
    await page.goto('/profile');
    const orderRows = page.locator('.order-row, [class*="order"], tbody tr');
    await expect(orderRows.first()).toBeVisible();
    const count = await orderRows.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should show edit profile button', async ({ page }) => {
    await loginAsDemo(page);
    await page.goto('/profile');
    await expect(page.locator('button:has-text("Edit Profile"), a:has-text("Edit Profile")')).toBeVisible();
  });

  test('should redirect to login if not authenticated', async ({ page }) => {
    await page.goto('/profile');
    await expect(page).toHaveURL(/login/);
  });
});
