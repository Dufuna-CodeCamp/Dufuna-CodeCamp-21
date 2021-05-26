var file_path = process.env.FILE_PATH;
var webdriver = require('selenium-webdriver');
var assert = require('chai').assert;
var { Builder, By } = require("selenium-webdriver");

describe("Testing Form Task", function () {
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
        
    it('test case: assert 4 input fields are present', async () => {
        const input = await driver.findElements(By.css('input'));
        const size = input.length
        assert.equal(size, 4, `Ensure you have all the input fields in the order stated in the task criteria`);
    });

    it('test case: Full Name label is present', async () => {
        const name = await driver.findElement(By.css("label"));
        const text = await name.getText();
        const fullname = await text.toLowerCase();
        assert.equal(fullname, "full name", `Ensure "Full Name" label is present`);
    });

    it('test case: Email label is present', async () => {
        const name = await driver.findElement(By.css("label"));
        const text = await name.getText();
        const email = await text.toLowerCase();
        assert.equal(email, "email", `Ensure "Email" label is present`);
        done();
    });

    it('test case: Subject label is present', async () => {
        const name = await driver.findElement(By.css("label"));
        const text = await name.getText();
        const subject = await text.toLowerCase();
        assert.equal(subject, "subject", `Ensure "Subject" label is present`);
        done();
    });

    it('test case: Message label is present', async () => {
        const name = await driver.findElement(By.css("label"));
        const text = await name.getText();
        const message = await text.toLowerCase();
        assert.equal(message, "message", `Ensure "Message" label is present`);
        done();
    });
    
});

    