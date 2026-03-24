import { test, expect } from '@playwright/test';

// Use a desktop viewport to ensure nav/header elements are visible
test.use({ viewport: { width: 1280, height: 800 } });

// ── Navigation ──────────────────────────────────────────────────────────────

test.describe('Navigation', () => {
  test('all top-level pages load without errors', async ({ page }) => {
    const pages = ['/', '/services', '/products', '/about', '/contact'];
    for (const path of pages) {
      const response = await page.goto(path);
      expect(response?.status(), `${path} returned non-200`).toBe(200);
    }
  });

  test('service sub-pages load without errors', async ({ page }) => {
    const paths = [
      '/services/automation-parts',
      '/services/vision-solutions',
      '/services/ai-solutions',
    ];
    for (const path of paths) {
      const response = await page.goto(path);
      expect(response?.status(), `${path} returned non-200`).toBe(200);
    }
  });

  test('header logo links back to homepage', async ({ page }) => {
    await page.goto('/about');
    await page.click('header a[href="/"]');
    await expect(page).toHaveURL('/');
  });

  test('nav "业务领域" dropdown shows three services', async ({ page }) => {
    await page.goto('/');
    // Scope to desktop nav only (not mobile menu)
    const desktopNav = page.locator('header nav.hidden.lg\\:flex');
    await desktopNav.locator('button:has-text("业务领域")').hover();
    await expect(desktopNav.locator('a[href="/services/automation-parts"]')).toBeVisible();
    await expect(desktopNav.locator('a[href="/services/vision-solutions"]')).toBeVisible();
    await expect(desktopNav.locator('a[href="/services/ai-solutions"]')).toBeVisible();
  });
});

// ── Header & Footer ──────────────────────────────────────────────────────────

test.describe('Header', () => {
  test('logo image loads correctly', async ({ page }) => {
    await page.goto('/');
    const logo = page.locator('header img[alt="Byron Intelligence"]');
    await expect(logo).toBeVisible();
    const naturalWidth = await logo.evaluate((el: HTMLImageElement) => el.naturalWidth);
    expect(naturalWidth, 'logo image failed to load').toBeGreaterThan(0);
  });

  test('company name is displayed next to logo', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#site-header')).toContainText('浙江拜伦智能科技有限公司');
  });

  test('tagline is displayed in header', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#site-header')).toContainText('用AI重构工业智能系统');
  });
});

test.describe('Footer', () => {
  test('footer logo loads correctly', async ({ page }) => {
    await page.goto('/');
    const logo = page.locator('footer img[alt="Byron Intelligence"]');
    await expect(logo).toBeVisible();
  });

  test('ICP number is shown and links to beian.miit.gov.cn', async ({ page }) => {
    await page.goto('/');
    const icp = page.locator('footer a[href="https://beian.miit.gov.cn"]');
    await expect(icp).toBeVisible();
    await expect(icp).toContainText('6E3862C7-4810AC');
  });

  test('footer service links are correct', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('footer a[href="/services/automation-parts"]')).toContainText('工业智能化集成解决方案');
    await expect(page.locator('footer a[href="/services/vision-solutions"]')).toContainText('视觉产线解决方案');
    await expect(page.locator('footer a[href="/services/ai-solutions"]')).toContainText('AI 知识数字化');
  });
});

// ── Homepage Content ─────────────────────────────────────────────────────────

test.describe('Homepage', () => {
  test('hero headline is correct', async ({ page }) => {
    await page.goto('/');
    const h1 = page.locator('main h1').first();
    await expect(h1).toContainText('用AI重构');
    await expect(h1).toContainText('工业智能系统');
  });

  test('hero description is correct', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('main')).toContainText('以AI系统为核心');
  });

  test('three service cards are displayed', async ({ page }) => {
    await page.goto('/');
    const main = page.locator('main');
    await expect(main).toContainText('工业智能化/AI化集成解决方案');
    await expect(main).toContainText('视觉产线解决方案');
    await expect(main).toContainText('AI 知识数字化');
  });

  test('CTA buttons link correctly', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('main a[href="/services"]').first()).toBeVisible();
    await expect(page.locator('main a[href="/contact"]').first()).toBeVisible();
  });
});

// ── Services Pages ───────────────────────────────────────────────────────────

test.describe('Services', () => {
  test('automation-parts page has correct title', async ({ page }) => {
    await page.goto('/services/automation-parts');
    await expect(page.locator('main h1').first()).toContainText('精密传动');
    await expect(page.locator('main')).toContainText('工业智能化/AI化集成解决方案');
  });

  test('vision-solutions page loads', async ({ page }) => {
    await page.goto('/services/vision-solutions');
    await expect(page.locator('main h1').first()).toBeVisible();
    await expect(page.locator('main')).toContainText('视觉产线解决方案');
  });

  test('ai-solutions page loads', async ({ page }) => {
    await page.goto('/services/ai-solutions');
    await expect(page.locator('main')).toContainText('AI 知识数字化');
  });

  test('back link returns to /services', async ({ page }) => {
    await page.goto('/services/automation-parts');
    await page.click('a:has-text("返回业务领域")');
    await expect(page).toHaveURL('/services');
  });
});

// ── Contact Form ─────────────────────────────────────────────────────────────

test.describe('Contact Form', () => {
  test('all form fields are present', async ({ page }) => {
    await page.goto('/contact');
    await expect(page.locator('#name')).toBeVisible();
    await expect(page.locator('#email')).toBeVisible();
    await expect(page.locator('#company')).toBeVisible();
    await expect(page.locator('#interest')).toBeVisible();
    await expect(page.locator('#message')).toBeVisible();
    await expect(page.locator('#submit-btn')).toBeVisible();
  });

  test('dropdown includes correct service options', async ({ page }) => {
    await page.goto('/contact');
    const options = page.locator('#interest option');
    await expect(options.filter({ hasText: '工业智能化集成解决方案' })).toHaveCount(1);
    await expect(options.filter({ hasText: '视觉产线解决方案' })).toHaveCount(1);
    await expect(options.filter({ hasText: 'AI 知识数字化' })).toHaveCount(1);
  });

  test('form result div has accessibility attributes', async ({ page }) => {
    await page.goto('/contact');
    const resultDiv = page.locator('#form-result');
    await expect(resultDiv).toHaveAttribute('role', 'alert');
    await expect(resultDiv).toHaveAttribute('aria-live', 'polite');
  });

  test('required fields prevent empty submission', async ({ page }) => {
    await page.goto('/contact');
    await page.click('#submit-btn');
    await expect(page.locator('#form-result')).toHaveClass(/hidden/);
  });
});

// ── SEO & Meta ───────────────────────────────────────────────────────────────

test.describe('SEO', () => {
  test('each page has a unique <title>', async ({ page }) => {
    const pageTitles: Record<string, string> = {};
    const paths = ['/', '/services', '/products', '/about', '/contact'];
    for (const path of paths) {
      await page.goto(path);
      const title = await page.title();
      expect(title, `${path} has empty title`).toBeTruthy();
      expect(pageTitles[title], `duplicate title on ${path}: "${title}"`).toBeUndefined();
      pageTitles[title] = path;
    }
  });

  test('og:url meta tag is present', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('meta[property="og:url"]')).toHaveCount(1);
  });

  test('og:image meta tag is present', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('meta[property="og:image"]')).toHaveCount(1);
  });

  test('canonical link is present', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
  });

  test('page lang is zh-CN', async ({ page }) => {
    await page.goto('/');
    const lang = await page.locator('html').getAttribute('lang');
    expect(lang).toBe('zh-CN');
  });
});

// ── Branding Consistency ─────────────────────────────────────────────────────

test.describe('Branding', () => {
  test('"自动化零部件" old text does not appear anywhere', async ({ page }) => {
    const paths = ['/', '/services', '/products', '/about', '/contact',
      '/services/automation-parts', '/services/vision-solutions', '/services/ai-solutions'];
    for (const path of paths) {
      await page.goto(path);
      const content = await page.locator('main').innerText();
      expect(content, `Old text "自动化零部件" found on ${path}`).not.toContain('自动化零部件');
    }
  });

  test('"昝能化" typo does not appear anywhere', async ({ page }) => {
    const paths = ['/', '/services', '/services/automation-parts'];
    for (const path of paths) {
      await page.goto(path);
      const content = await page.locator('main').innerText();
      expect(content, `Typo "昝能化" found on ${path}`).not.toContain('昝能化');
    }
  });
});
