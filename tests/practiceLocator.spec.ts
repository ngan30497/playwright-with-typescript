import { test, expect, Page } from '@playwright/test'
test("testcase 1", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/")
    await page.locator("//input[@id='user-name']").fill("standard_user")
    await page.locator("#password").fill("secret_sauce")
    await page.locator("//input[@id='login-button']").click()
    await page.locator("text='Sauce Labs Backpack'").click()

})

test("practice of locator method with options", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/")
    await page.locator(".form_group", { has: page.locator("input#user-name") }).click()
    await page.locator(".form_group", { has: page.locator("input#user-name") }).pressSequentially("standard_user")

    await page.locator(".form_group", { hasNot: page.locator("input#user-name") }).click()
    await page.locator(".form_group", { hasNot: page.locator("input#user-name") }).pressSequentially("secret_sauce")

    await page.locator("//input[@id='login-button']").click()

    // await page.locator("//a",{hasText:"Sauce Labs Bike Light"}).click()

    await page.locator(".inventory_item_name", { hasNotText: /Sauce.*/ }).click()
    })

test("Practice of getBy methods", async ({ page }) => {
    await page.goto("https://demo.nopcommerce.com/login")
    await page.getByLabel("Email:",{exact:true}).fill("test@gmail.com")

    
})

