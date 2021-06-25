var file_path = process.env.FILE_PATH
var webdriver = require('selenium-webdriver');
var assert = require('chai').assert;
var { Builder, By } = require("selenium-webdriver");

describe("Testing Navigation on HtmlForms", function() {
    this.timeout(3 * 1000 * 60);
    var driver = new webdriver.Builder().forBrowser('chrome').build()

    before(function setupWebdriver(done) {
        var file_url = `file://${file_path}`;
        driver.get(file_url).then(done)
    })
    
    after(function() {
        driver.quit()
    })

    it('test case: assert that the url to the document is present', async () => {
        const body = await driver.findElements(By.css('body'));
        const size = body.getText();
        assert.equal(size, "https://docs.google.com/spreadsheets", `Ensure you have the link to the google doc containing the results from your research`);
    });
 })