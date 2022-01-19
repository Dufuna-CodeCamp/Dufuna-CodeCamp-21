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

        it('test case: FoodBag Logo is present', async () => {
            const name = await driver.findElement(By.css("body"));
            const text = await name.getText();
            assert.include(text, "Food", `Ensure "food bag" text is present on header`);
        })

        it('test case: FoodBag Logo is present', async () => {
            const name = await driver.findElement(By.css("body"));
            const text = await name.getText();
            assert.include(text, "Bag", `Ensure "food bag" text is present on header`);
        })

        it('test case: FoodBag text is present on the page', async () => {
            const name = await driver.findElement(By.css("body"));
            const text = await name.getText();
            assert.include(text, "FoodBag", `Ensure "FoodBag" text is present`);
        })

       
        it("test case: check Login", async () => {
            const element = await driver.findElement(By.css("body"))
            const text = await element.getText();
            assert.include(text, "Login", "Ensure the `Login` link is present on the header");
        })

        it("test case: check Cart", async () => {
            const element = await driver.findElement(By.css("body"))
            const text = await element.getText();
            assert.include(text, "Cart", "Ensure the `Cart` link is present on the header");
        })

        it("test case: check page text", async () => {
            const element = await driver.findElement(By.css("body"))
            const text = await element.getText();
            assert.include(text, "All Vendors", "Ensure the `Cart` link is present on the header");
        })

        it("test case: check page text", async () => {
            const element = await driver.findElements(By.css("hr"))
            const length = await element.length
            assert.equal(length, 1,  "Ensure the horizantal rule is present beneath the first list of images as seen in the mock-up");
        })

        it('test case: assert image amount is 9', async () => {
            const images = await driver.findElements(By.css('img'));
            const size = images.length
            assert.equal(size, 10, `Ensure all the images are present on the page`);
        })
})