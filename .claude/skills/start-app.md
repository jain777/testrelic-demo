# Skill: Start ShopRelic App

Start the ShopRelic Express.js mock e-commerce app.

## Steps

1. Kill any existing ShopRelic server: `pkill -f "node server.js" 2>/dev/null || true`
2. Start the app: `cd /Users/jeeveshjain/Desktop/TestRelic/shoprelic-app && node server.js &`
3. Wait for health check: `curl -s http://localhost:3000/api/health`
4. Confirm app is running at http://localhost:3000

## Arguments
- If chaos flags are mentioned, set them as environment variables:
  - `BREAK_CHECKOUT=true` - Payment endpoint returns 500
  - `BREAK_PROFILE=true` - Profile shows empty order history
  - `FLAKY_SEARCH=true` - Search randomly delays 6+ seconds

## Example
Start with broken checkout: `BREAK_CHECKOUT=true node server.js &`

## Notes
- App runs on port 3000 by default (override with PORT env var)
- Test user: demo@shoprelic.com / password123
- All data is in-memory and resets on restart
