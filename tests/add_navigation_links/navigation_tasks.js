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

    it('test case: assert that there are 2 links on this page', async () => {
        const links = await driver.findElements(By.css('a'));
        const size = links.length;
        assert.equal(size, 2, `Ensure you have two links on this page`);
    });
 })