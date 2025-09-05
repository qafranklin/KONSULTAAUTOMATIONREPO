import { test, expect } from '@playwright/test';

test('Navigate Login Page', async({page}) => {


 // Navigate Login Page
 await page.goto('https://beacon.bizbox.ph/login');

 // Verify and Input Login Page
 await expect(page.locator('input[name="Username"]')).toBeVisible();
 await page.locator('[name="Username"]').fill('grace@bizbox.ph');

// Verify and Input Password
 await expect(page.locator('input[name="Password"]')).toBeVisible();
 await page.locator('[name="Password"]').fill('abcdE123');

// Click Login
 await page.locator('button[type="submit"]').click();

}
)
