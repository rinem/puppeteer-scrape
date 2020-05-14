const puppeteer = require('puppeteer');
const CREDS = require('./creds');

async function run() {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    
    await page.goto('https://web.maquisistema.com.pe/extranet_prod/');
    
    // const USERNAME_SELECTOR = '#txt_user';
    // const PASSWORD_SELECTOR = '#txt_pass';
    // const BUTTON_SELECTOR = '#btnLogin';


    // await page.click(USERNAME_SELECTOR);
    // await page.keyboard.type(CREDS.username);

    // await page.click(PASSWORD_SELECTOR);
    // await page.keyboard.type(CREDS.password);

    // await page.click(BUTTON_SELECTOR);

    // await page.waitForNavigation();
    browser.close();
}

run();