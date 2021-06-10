var file_path = process.env.FILE_PATH;
var webdriver = require('selenium-webdriver');
var assert = require('chai').assert;
var { Builder, By } = require("selenium-webdriver")
const phantomcss = require('phantomcss');

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
        });

        it('test case: FoodBag Logo is present', async () => {
            const name = await driver.findElement(By.css("body"));
            const text = await name.getText();
            assert.include(text, "Bag", `Ensure "food bag" text is present on header`);
        });

        it('test case: FoodBag text is present on the page', async () => {
            const name = await driver.findElement(By.css("body"));
            const text = await name.getText();
            assert.include(text, "FoodBag", `Ensure "FoodBag" text is present`);
        });

       
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
        it("test case: check Sign up", async () => {
            const element = await driver.findElement(By.css("body"))
            const text = await element.getText();
            assert.include(text, "Ensure the `Cart` link is present on the header");
        })

        it("test case: check service-descrption1", async () => {
            const element = await driver.findElement(By.css("body"))
            const text = await element.getText();
            assert.include(text, "Pick an interest", "Ensure Quantity label is present");
        })

        it("test case: check service-description2", async () => {
            const element = await driver.findElement(By.css("body"))
            const text = await element.getText();
            assert.include(text, "How we serve you", "Ensure you have the appropriate text for the service");
        })

        it("test case: check service title-1", async () => {
            const element = await driver.findElement(By.css("body"))
            const text = await element.getText();
            assert.include(text, "Tell us where you are", "Ensure you have the appropriate text for the service");
        })

        it("test case: check service-title-2", async () => {
            const element = await driver.findElement(By.css("body"))
            const text = await element.getText();
            assert.include(text, "Tell us what you want", "Ensure you have the appropriate text for the service");
        })

        it("test case: check service-title-3", async () => {
            const element = await driver.findElement(By.css("body"))
            const text = await element.getText();
            assert.include(text, "We'll come running", "Ensure you have the appropriate text for the service");
        })

        it("test case: check footer", async () => {
            const element = await driver.findElement(By.css("footer"))
            const text = await element.getText();
            assert.include(text, "Contact us", "Ensure you have the appropriate text as seen on the mock-up");
        })

        it("test case: check terms & conditions on footer", async () => {
            const element = await driver.findElement(By.css("footer"))
            const text = await element.getText();
            assert.include(text, "Terms & Conditions . Privacy Policy", "Ensure the texts on the footer is properly formated");
        })

        it("test case: check copyright on footer", async () => {
            const element = await driver.findElement(By.css("footer"))
            const text = await element.getText();
            assert.include(text, "© Copyright 2021 FoodBag is a registered trademark", "Ensure you have the appropriate text as seen on the mock-up");
        })

        it('test case: assert input field is present', async () => {
            const input = await driver.findElements(By.css('input'));
            const size = input.length
            assert.equal(size, 1, `Ensure you have the input field as seen in the mock-up`);
        });

        it('test case: assert placeholder', async () => {
            const element = await driver.findElement(By.css('input')).getAttribute('placeholder');
            assert.equal(element, "Enter your delivery address", `Ensure you have the placeholder as seen in the mock-up`);
        });

        it('test case: assert placeholder', async () => {
            const element = await driver.findElement(By.css('input')).getAttribute('label');
            assert.equal(element, "Where are you?", `Ensure you have the input field as the appropriate label as seen in the mock-up`);
        });

        it('test case: assert image amount is 10', async () => {
            const images = await driver.findElements(By.css('img'));
            const size = images.length
            assert.equal(size, 10, `Ensure all the images are present on the page`);
        });
})