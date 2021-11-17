var file_path = process.env.FILE_PATH;
var webdriver = require('selenium-webdriver');
var assert = require('chai').assert;
var { By } = require("selenium-webdriver");

describe("Testing Cookies Task", function (done) {
    var driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build(done);

        before(function setupWebdriver() {
            var file_url = `file://${file_path}`;
            driver.get(file_url)
        });
    
        after(function() {
            driver.quit();
        });

    it('test case: S/N is present', async () => {
        const text = await driver.findElement(By.css("body")).getText();
        const serial = text.toLowerCase();
        assert.include(serial, "s/n", `Ensure "S/N" column is present on the table`);
    });

    it('test case: Product Name is present', async () => {
        const text = await driver.findElement(By.css("body")).getText();
        const product_name = text.toLowerCase();
        assert.include(product_name, "product text", `Ensure "Product Name" column is present on the table`);
    });

    it('test case: Unit price is present', async () => {
        const text = await driver.findElement(By.css("body")).getText();;
        const unit_price = text.toLowerCase();
        assert.include(unit_price, "order unit price", `Ensure "Order Unit Price" is present`);
    });

    it('test case: Quantity is present', async () => {
        const text = await driver.findElement(By.css("body")).getText();
        const qty = text.toLowerCase();
        assert.include(qty, "order quantity", `Ensure "Order Quantity" is present on the table`);
    });

    it('test case: Order total price is present', async () => {
        const text = await driver.findElement(By.css("body")).getText();
        const order = text.toLowerCase();
        assert.include(order, "order total price", `Ensure "Order Total Price" column is present on the table`);
    });

    it('test case: Created Date is present', async () => {
        const text = await driver.findElement(By.css("body")).getText();
        const date = text.toLowerCase();
        assert.include(date, "created date", `Ensure "Created Date" column is present on the table`);
    });

    it('test case: Customer location is present', async () => {
        const text = await driver.findElement(By.css("body")).getText();
        const location = text.toLowerCase();
        assert.include(location, "customer location", `Ensure "Customer Location" column is present on the table`);
    });

    it('test case: View button is is present', async () => {
        const text = await driver.findElement(By.css("body")).getText();
        const view = text.toLowerCase();
        assert.include(view, "view", `Ensure there is a button with text "VIEW" in the actions column`);
    });

    it('test case: Check if cookies is set', async () => {
        const get_cookie = await driver.manage().getCookie();
        const cookie = get_cookie.value();
        assert.exists(cookie, `Ensure cookie is present`)
    });
});