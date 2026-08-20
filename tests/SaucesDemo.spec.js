import { test , chromium } from '@playwright/test';

test(" @Regrasstion End to End Flows", async ()=>{

    const browser =await chromium.launch({headless:false});
    const page  = await browser.newPage();

    await page.goto("https://www.saucedemo.com/");

    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");

    await page.locator("#login-button").click();




});