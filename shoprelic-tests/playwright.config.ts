import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: 1,
  reporter: [
    ['list'],
    ['@testrelic/playwright-analytics', {
      apiKey: process.env.TESTRELIC_API_KEY || '',
      projectId: process.env.TESTRELIC_PROJECT_ID || '',
      branch: process.env.BRANCH || 'main',
      commit: process.env.COMMIT_SHA || '',
      buildNumber: process.env.BUILD_NUMBER || '',
      outputPath: './test-results/analytics-timeline.json',
      includeStackTrace: true,
      includeCodeSnippets: true,
      includeNetworkStats: true,
      tags: {
        deploy: process.env.DEPLOY_TAG || '',
        environment: 'staging',
        app: 'shoprelic'
      }
    }]
  ],
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  timeout: 15000,
});
