const { expect } = require('chai');
const { test } = require('../../browser');
const devices = require('puppeteer/DeviceDescriptors');
const iPhone = devices['iPhone 6'];

describe('Login', () => {
  it('merchant can login on CAS', test(async (browser, opts) => {
    const page = await browser.newPage();
    await page.emulate(iPhone);
    await page.goto(`${opts.casUrl}/ebc2/`);
    await page.click("[id=merchantId]");
    await page.keyboard.type("qaebc2")
    await page.waitFor(1000);
    await page.click("[id=userName]");
    await page.keyboard.type("miyer");
    await page.waitFor(1000);
    await page.click("[id=password]");
    await page.keyboard.type("Megha_0682");
    await page.waitFor(1000);
    await page.click("[type=submit]");
    //await page.reload();
    const HOMEPAGE_HEADER_SELECTOR = 'div.text-heading1';
    await page.waitFor(HOMEPAGE_HEADER_SELECTOR);
    const innerText = await page.evaluate((sel) => {
    return document.querySelector(sel).innerText;
    }, HOMEPAGE_HEADER_SELECTOR);
    expect(innerText).to.be.equal('CyberSource Business Center');
  }));
  

});