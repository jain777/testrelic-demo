# Skill: Add Test Case

Add a new Playwright test case to the ShopRelic test suite.

## Conventions

1. **Import:** Always use `import { test, expect } from '@testrelic/playwright-analytics/fixture'`
2. **File location:** `/Users/jeeveshjain/Desktop/TestRelic/shoprelic-tests/tests/`
3. **Selectors:** Use specific CSS classes from the app (e.g., `.product-card`, `.cart-subtotal`, `.product-detail-title`). Avoid generic selectors like `h1, h2` that match multiple elements (Playwright strict mode).
4. **Test structure:** Use `test.describe()` blocks. Each test should be independent.
5. **Auth helper:** For authenticated pages, login first:
   ```typescript
   await page.goto('/login');
   await page.fill('input[name="email"]', 'demo@shoprelic.com');
   await page.fill('input[name="password"]', 'password123');
   await page.click('button[type="submit"]');
   ```
6. **Base URL:** Tests use `http://localhost:3000` (configured in playwright.config.ts)
7. **Checkout form fields:** `shippingName`, `address`, `city`, `state`, `zip`, `cardNumber`, `expiry`, `cvv`

## Existing Test Files
- `auth.spec.ts` (5 tests) - Login, signup, logout
- `landing.spec.ts` (4 tests) - Hero, featured products, nav
- `catalog.spec.ts` (5 tests) - Search, filter, sort
- `product-detail.spec.ts` (4 tests) - Product info, add to cart, reviews
- `cart.spec.ts` (5 tests) - Empty cart, add/update/remove items
- `checkout.spec.ts` (5 tests) - Form filling, order placement, error handling
- `profile.spec.ts` (4 tests) - User info, order history
- `e2e-flows.spec.ts` (4 tests) - Full purchase flow, cart persistence

## Steps
1. Determine which spec file the new test belongs in (or create a new one)
2. Read the existing spec file
3. Add the new test following the conventions above
4. Run the new test to verify it passes: `npx playwright test <file> --reporter=list`
