var file_path = process.env.FILE_PATH;
var webdriver = require('selenium-webdriver');
var assert = require('chai').assert;
var { Builder, By } = require("selenium-webdriver");

describe("Testing Scholars Project", function () {
    this.timeout(3 * 1000 * 60);
    var driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();

    before(function setupWebdriver(done) {
        var file_url = `file://${file_path}`;
        driver.get(file_url).then(done);
    });

    after(function() {
        driver.quit();
    });

    it("test case: check if Price is present", async () => {
        const element = await driver.findElement(By.css("body"));
        const text = await element.getText();
        assert.include(text, "Price", `Ensure Price is present`);
    });

    it("test case: check if Description is present", async () => {
        const element = await driver.findElement(By.css("body"));
        const text = await element.getText();
        assert.include(text, "DESCRIPTION", `Ensure DESCRIPTION is present`);
    });

    it('test case: assert image amount is 2', async () => {
        const images = await driver.findElements(By.css('img'));
        const size = images.length
        assert.equal(size, 2, `Amount of images on the page not equal to 2`);
    });

    it('test case: ordered list available', async function () {
        const list = (await driver).findElements(webdriver.By.id('ol'));
        assert.notStrictEqual(list.length, 0, 'No ordered list on this page');
    });
});