import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/?zx=1759655748812&no_sw_cr=1');
  await page.getByRole('link', { name: 'Đăng nhập' }).click();
  await page.getByRole('textbox', { name: 'Email hoặc số điện thoại' }).click();
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Docs' }).click();
  await page.getByRole('link', { name: 'Installation' }).click(); 
  await page.getByRole('textbox', { name: 'Email hoặc số điện thoại' }).press('Enter');
  await page.getByRole('link', { name: 'Thử lại' }).click();
});