import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/?zx=1759655593401&no_sw_cr=1');
  await page.getByRole('link', { name: 'Đăng nhập' }).click();
  await page.getByRole('textbox', { name: 'Email hoặc số điện thoại' }).click();
  await page.goto('https://accounts.google.com/v3/signin/rejected?continue=https%3A%2F%2Fwww.google.com%2F&dsh=S1342696569%3A1759655598695647&ec=futura_exp_og_so_72776762_e&epd=AUTr8zC6TBlVxnTk4Ppyv5L918sD3PAHZj-wYmTrDTP2pH_gUmLU2veNIg&flowEntry=ServiceLogin&flowName=GlifWebSignIn&hl=vi&ifkv=AfYwgwUvl3iqilfLQxV737lLGwpzggngmL7TtQoIZrrJHwjI24o_OMUn3ipW5t2_-CGdYbnG8fRt3Q&rhlk=le&rrk=46');
  await page.getByRole('link', { name: 'Thử lại' }).click();
  await page.getByRole('link', { name: 'Thử lại' }).click();
});