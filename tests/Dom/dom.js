var file_path = process.env.FILE_PATH;
var webdriver = require('selenium-webdriver');
var assert = require('chai').assert;
var { By } = require("selenium-webdriver");


describe("Testing Scholars Project", function () {
    this.timeout(3 * 1000 * 60);
    var driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();

    before(function setupWebdriver(done) {
        var file_url = `file://${file_path}`;
        driver.get(file_url).then(done);
    });

    after(function () {
        driver.quit();
    });


    it('test case: check dropdown', async () => {
        const element = await driver.findElement(By.css("select")).isDisplayed();
        assert(element == true)
    });

    it('test case: check options in dropdown', async () => {
        driver.findElement(By.css("select")).click();
        const option = await driver.findElement(By.css("option")).isDisplayed();
        assert(option == true)
    });

    it('test case: check options in dropdown', async () => {
        driver.findElement(By.css("select")).click();
        const options = await driver.findElements(By.css("option"));
        options.forEach(option => validateImage(option, options[1]));
        async function validateImage(item, arr) {
            arr = item.click();
            const images = await driver.findElements(By.css("img"));
            const validate = images.length
            assert.equal(validate, 10, `Ensure the images change when you click on any option`)
        }
    });

});