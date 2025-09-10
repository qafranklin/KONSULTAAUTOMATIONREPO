import { test, expect } from '@playwright/test';
import { PageManager } from './pageman';    

test('user profile', async ({ page }) => {
    const pages = new PageManager(page);
    const pagemanager = new PageManager(page);
    const login = pagemanager.getLogin();
    const userprofile = pagemanager.getUserProfile();
    
    await test.step('login', async () => {
        await login.goto();
        await expect(login.username).toBeVisible();
        await expect(login.password).toBeVisible();
        await expect(login.loginbutton).toBeVisible();
        await login.login('ptreyes@bizbox.ph', 'Qwert12345!');
        await page.waitForLoadState('networkidle');
        await expect(page).toHaveURL('https://beacon-accountweb-dev.azurewebsites.net/home');
    });

    await test.step('user profile', async () => {
        await userprofile.gotoedit();
        await userprofile.editprofile();
           });
});
