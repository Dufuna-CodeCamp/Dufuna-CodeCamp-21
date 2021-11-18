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
        const name = await driver.findElement(By.css("body"));
        const text = await name.getText();
        const serial = await text.toLowerCase();
        assert.include(serial, "s/n", `Ensure "S/N" column is present on the table`);
    });

    it('test case: Full Name label is present', async () => {
        const name = await driver.findElement(By.css("body"));
        const text = await name.getText();
        const serial = await text.toLowerCase();
        assert.include(serial, "full name", `Ensure "Full Name" column is present on the table`);
    });

    it('test case: Email label is present', async () => {
        const name = await driver.findElement(By.css("body"));
        const text = await name.getText();
        const email = await text.toLowerCase();
        assert.include(email, "email address", `Ensure "Email Address" label is present`);
    });

    it('test case: Date created is present', async () => {
        const name = await driver.findElement(By.css("body"));
        const text = await name.getText();
        const created_at = await text.toLowerCase();
        assert.include(created_at, "created at", `Ensure "Created At" is present on the table`);
    });

    it('test case: Actions is present', async () => {
        const name = await driver.findElement(By.css("body"));
        const text = await name.getText();
        const actions = await text.toLowerCase();
        assert.include(actions, "actions", `Ensure "Actions" column is present on the table`);
    });

    it('test case: View button is is present', async () => {
        const name = await driver.findElement(By.css("button"));
        const text = await name.getText();
        const view = await text.toLowerCase();
        assert.include(view, "view", `Ensure there is a button with text "VIEW" in the actions column`);
    });

    it('test case: Check if cookies is set', async () => {
        const get_cookie = await driver.manage().getCookie();
        const cookie = get_cookie.value();
        assert.exists(cookie, `Ensure cookie is present`)
    });
});

    