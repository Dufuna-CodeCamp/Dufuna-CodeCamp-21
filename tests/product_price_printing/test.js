var file_path = process.env.FILE_PATH
var assert = require('chai').assert;
const {By} = require("selenium-webdriver");
const webdriver = require("selenium-webdriver");

describe("Printing product price", function () {
    this.timeout(3 * 1000 * 60)
    var driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();

    before(function setupWebdriver(done) {
        var file_url = `file://${file_path}`;
        driver.get(file_url).then(done)
    })

    after(function () {
         driver.quit()
    })

    it("test case: check product details", async () => {
        const element = await driver.findElement(By.css("body"))
        const text = await element.getText();
        assert.include(text, "is sold for", "Ensure the `Cart` link is present on the header");
    })

    it("test case: check Sign up", async () => {
        const element = await driver.findElement(By.css("body"))
        const text = await element.getText();
        const count = text.split("is sold for").length-1;
        assert.equal(count, 3, "Ensure the `Sign up` link is present on the header");
    })
})