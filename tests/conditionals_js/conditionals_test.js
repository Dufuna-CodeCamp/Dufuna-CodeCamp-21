const file_path = process.env.FILE_PATH
const webdriver = require('selenium-webdriver');
const assert = require('chai').assert;

describe("Testing javascript conditionals", function () {
    this.timeout(3 * 1000 * 60);
    const driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();

    before(function setupWebdriver(done) {
        const file_url = `file://${file_path}`;
        driver.get(file_url).then(done);
    });

    after(function () {
        driver.quit();
    });

    it('test case: check conditionals', async () => {
        const productList = driver.wait(webdriver.until.elementLocated(webdriver.By.css("body")));
        const text = await productList.getText();
        const x = 123 - 7;
        for (let i = 1; i <= x; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                assert.include(text, 'Software Developer');
            } else if (i % 3 === 0) {
                assert.include(text, 'Software');
            } else if (i % 5 === 0) {
                assert.include(text, 'Developer');
            } 
        }
    });
});

