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

        // it("test case: Check if clicking the Product link navigates user to the Product Page", async () => {
        //     const element = await driver.findElement(By.css("a[href='../product.html']"));
        //     if (element.click()) {
        //         const navigator =  driver.navigate().to('../product.html');
        //         if(navigator){
        //             const actualTitle = await driver.getTitle()
        //             const expectedTitle = 'Product'
        //             assert(actualTitle !== expectedTitle, `Expects ${actualTitle} to navigate to ${expectedTitle}`)
        //         }
        //     }   
        // })

        // it("test case: Check if clicking the Contact Form link navigates user to the Contact Page", async () => {
        //     const element = await driver.findElement(By.css("a[href='../contact.html']"))
        //     if(element.click()){
        //         const navigator = driver.navigate().to('../contact.html');
        //         if(navigator) {
        //             const actualTitle = await driver.getTitle()
        //             const expectedTitle = 'Contact Form'
        //             assert(actualTitle !== expectedTitle, `Expects ${actualTitle} to navigate to ${expectedTitle}`)
        //         }
        //     }
        // })

        // it('test case: Check if there is a product image at the left side', async () => {
        //     const element = await driver.findElement(By.css())
        // })


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

        it("test case: check service-title", async () => {
            const element = await driver.findElement(By.css("body"))
            const text = await element.getText();
            assert.include(text, "Anything food, we have you covered.", "Ensure Quantity label is present");
        })

        it("test case: check service-title", async () => {
            const element = await driver.findElement(By.css("body"))
            const text = await element.getText();
            assert.include(text, "Where are you?", "Ensure Quantity label is present");
        })

        it("test case: quantity field is a text input field", async () => {
            const element = await driver.findElement(By.css("body"))
            const text = await element.getText();
            assert.include(text, "Pick an interest", "Ensure Quantity label is present");
        })

        it("test case: check service-title", async () => {
            const element = await driver.findElement(By.css("body"))
            const text = await element.getText();
            assert.include(text, "How we serve you", "Ensure you have the appropriate text for the service");
        })

        it("test case: check service title", async () => {
            const element = await driver.findElement(By.css("body"))
            const text = await element.getText();
            assert.include(text, "Tell us where you are", "Ensure you have the appropriate text for the service");
        })

        it("test case: check service-title", async () => {
            const element = await driver.findElement(By.css("body"))
            const text = await element.getText();
            assert.include(text, "Tell us what you want", "Ensure you have the appropriate text for the service");
        })

        it("test case: check service-title", async () => {
            const element = await driver.findElement(By.css("body"))
            const text = await element.getText();
            assert.include(text, "We'll come running", "Ensure you have the appropriate text for the service");
        })

        it("test case: check footer", async () => {
            const element = await driver.findElement(By.css("footer"))
            const text = await element.getText();
            assert.include(text, "Contact us", "Ensure you have the appropriate text as seen on the mock-up");
        })

        it("test case: check service-title", async () => {
            const element = await driver.findElement(By.css("footer"))
            const text = await element.getText();
            assert.include(text, "Terms & Conditions . Privacy Policy", "Ensure the texts on the footer is properly formated");
        })

        it("test case: check service-title", async () => {
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

        it('test case: assert image amount is 2', async () => {
            const images = await driver.findElements(By.css('img'));
            const size = images.length
            assert.equal(size, 7, `Ensure all the images are present in the page`);
        });



        // it("test case: product image is present", async () => {
        //     const element = await driver.findElement(By.css("img"))
        //     const name = await element.getText();
        //     assert.include(text, "Quantity", "Ensure Quantity label is present");
        // })

        // it("test case: product name is present", async () => {
        //     const element = await driver.findElement(By.css("img"))
        //     const name = await element.getText();
        //     assert.include(text, "Quantity", "Ensure Quantity label is present");
        // })
})