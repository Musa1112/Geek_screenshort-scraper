import puppeteer from "puppeteer";

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        
    });
    const url = "https://auth.geeksforgeeks.org/";
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "load" });

    try {
        // Input login details
        await page.type('input[type="text"]', 'iliyamusa900@gmail.com', { delay: 100 });
        await page.type( 'input[type="password"]', 'Medicine5413#', { delay: 100 });

        // Wait for the login button to be available and click it
        await page.waitForSelector('.btn.btn-green.signin-button');
        await page.click('.btn.btn-green.signin-button');

        // Wait for navigation to the next page
        await page.waitForNavigation({ waitUntil: 'networkidle0' });

        // Optionally, wait for a specific element that indicates the page is fully loaded
        await page.waitForSelector('.footer-container ul'); // Replace with an appropriate selector

        // Take a full-page screenshot
        await page.screenshot({ path: 'screenshot.png', fullPage: true });
    } catch (error) {
        console.log(error);
    }

    await browser.close();
})();
