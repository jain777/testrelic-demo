import { test, expect } from '@testrelic/playwright-analytics/fixture';

test.describe('Authentication', () => {
  test('should display login page with form elements', async ({ page }) => {
    await page.goto('/login');
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('input[name="password"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  test('should login successfully with valid credentials', async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[name="email"]', 'demo@shoprelic.com');
    await page.fill('input[name="password"]', 'password123');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('/');
    // Should show user is logged in (profile link or user name visible)
    await expect(page.locator('a[href="/profile"]')).toBeVisible();
  });

  test('should show error on invalid login', async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[name="email"]', 'wrong@email.com');
    await page.fill('input[name="password"]', 'wrongpassword');
    await page.click('button[type="submit"]');
    await expect(page.locator('.error-message, .error, [class*="error"]')).toBeVisible();
  });

  test('should register a new user', async ({ page }) => {
    const uniqueEmail = `test${Date.now()}@shoprelic.com`;
    await page.goto('/signup');
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', uniqueEmail);
    await page.fill('input[name="password"]', 'testpass123');
    await page.fill('input[name="confirmPassword"]', 'testpass123');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('/');
  });

  test('should logout successfully', async ({ page }) => {
    // Login first
    await page.goto('/login');
    await page.fill('input[name="email"]', 'demo@shoprelic.com');
    await page.fill('input[name="password"]', 'password123');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('/');

    // Logout
    await page.click('button:has-text("Logout"), a:has-text("Logout"), [data-action="logout"]');
    await expect(page.locator('a[href="/login"]')).toBeVisible();
  });
});
