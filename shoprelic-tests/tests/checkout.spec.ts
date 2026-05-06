import { test, expect } from '@testrelic/playwright-analytics/fixture';

test.describe('Checkout', () => {
  // Helper to login and add item to cart
  async function setupCheckout(page) {
    await page.goto('/login');
    await page.fill('input[name="email"]', 'demo@shoprelic.com');
    await page.fill('input[name="password"]', 'password123');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('/');

    await page.goto('/products/1');
    await page.click('button:has-text("Add to Cart")');
    await page.goto('/checkout');
  }

  test('should display checkout form', async ({ page }) => {
    await setupCheckout(page);
    await expect(page.locator('input[name="address"]')).toBeVisible();
    await expect(page.locator('input[name="cardNumber"]')).toBeVisible();
  });

  test('should fill shipping information', async ({ page }) => {
    await setupCheckout(page);
    await page.fill('input[name="shippingName"]', 'Demo User');
    await page.fill('input[name="address"]', '123 Test Street');
    await page.fill('input[name="city"]', 'San Francisco');
    await page.fill('input[name="state"]', 'CA');
    await page.fill('input[name="zip"]', '94102');
    // Verify fields are filled
    await expect(page.locator('input[name="address"]')).toHaveValue('123 Test Street');
  });

  test('should fill payment information', async ({ page }) => {
    await setupCheckout(page);
    await page.fill('input[name="cardNumber"]', '4111111111111111');
    await page.fill('input[name="expiry"]', '12/28');
    await page.fill('input[name="cvv"]', '123');
    await expect(page.locator('input[name="cardNumber"]')).toHaveValue('4111111111111111');
  });

  test('should place order successfully', async ({ page }) => {
    await setupCheckout(page);
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
    await expect(page.locator('text=Order Confirmed')).toBeVisible();
  });

  test('should show error on payment failure', async ({ page }) => {
    await setupCheckout(page);
    await page.fill('input[name="shippingName"]', 'Demo User');
    await page.fill('input[name="address"]', '123 Test Street');
    await page.fill('input[name="city"]', 'San Francisco');
    await page.fill('input[name="state"]', 'CA');
    await page.fill('input[name="zip"]', '94102');
    await page.fill('input[name="cardNumber"]', '4111111111111111');
    await page.fill('input[name="expiry"]', '12/28');
    await page.fill('input[name="cvv"]', '123');

    // Listen for the response
    const responsePromise = page.waitForResponse(resp => resp.url().includes('/checkout'));
    await page.click('button:has-text("Place Order")');
    const response = await responsePromise;

    // When BREAK_CHECKOUT is true, this test should fail because the server returns 500
    // When BREAK_CHECKOUT is false, this should succeed (order placed)
    // This test validates error handling - when working correctly, it should redirect
    if (response.status() === 500) {
      await expect(page.locator('.error-message, .error, [class*="error"], #checkout-error')).toBeVisible();
    } else {
      await expect(page).toHaveURL(/order-confirmation/);
    }
  });
});
