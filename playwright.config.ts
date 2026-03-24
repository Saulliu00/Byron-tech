import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'http://localhost:4323',
    headless: true,
  },
  timeout: 10000,
});
