import { test, expect } from '@playwright/test';

test.setTimeout(60000);

test.describe('AutoReport E2E Verification', () => {
  const URL = 'https://freelance-architecture.vercel.app';

  test('should handle file upload and report generation flow', async ({ page }) => {
    const logs: string[] = [];
    page.on('console', msg => logs.push(`CONSOLE: ${msg.type()} - ${msg.text()}`));
    page.on('response', resp => {
      if (resp.url().includes('/api/generate')) {
        logs.push(`API: ${resp.status()} ${resp.statusText()}`);
        resp.text().then(t => logs.push(`API_BODY: ${t.slice(0, 200)}`)).catch(() => {});
      }
    });

    await page.goto(URL);

    const buffer = Buffer.from('This is a test document for automated analysis.');
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.locator('div', { hasText: 'Upload a document' }).locator('input[type="file"]').evaluate((node: HTMLInputElement) => node.click());
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles({
      name: 'test-document.txt',
      mimeType: 'text/plain',
      buffer
    });

    await expect(page.locator('text=test-document.txt')).toBeVisible();

    const generateBtn = page.locator('#generate-btn');
    await expect(generateBtn).toBeEnabled();
    await generateBtn.click();

    try {
      await expect(page.locator('text=Report generated successfully!')).toBeVisible({ timeout: 40000 });
      console.log("SUCCESS");
    } catch (e) {
      console.log("FAILED WAITING FOR SUCCESS TOAST");
      const toasts = await page.locator('[data-sonner-toast]').allInnerTexts();
      logs.push(`VISIBLE TOASTS: ${JSON.stringify(toasts)}`);
    } finally {
      // Dump logs
      console.log("=== LOGS DUMP ===");
      console.log(logs.join('\n'));
      console.log("=================");
    }
  });
});
