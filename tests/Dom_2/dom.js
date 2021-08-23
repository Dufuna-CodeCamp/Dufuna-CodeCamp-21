const file_path = process.env.FILE_PATH;
const webdriver = require('selenium-webdriver');
const assert = require('chai').assert;
const { By } = require("selenium-webdriver");

describe("Testing Scholars Project", function () {
    this.timeout(3 * 1000 * 60);
    var driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();

    var actions = driver.actions();

    before(function setupWebdriver(done) {
        var file_url = `file://${file_path}`;
        driver.get(file_url).then(done);
    });

    after(function () {
        driver.quit();
    });

    it('test case: check dot on Cart', async () => {
        const click = await driver.findElements(By.css("button"));
        click[2].click();
        const option = await driver.findElement(By.css("span")).isEnabled();
        assert.exists(option == true, "Ensure the badge/dot is present on Cart")
    });

    it('test case: check text on button', async () => {
        const click = await driver.findElements(By.css("button"));
        click[2].click();
        const button_text = await click[2].getText();
        assert.equal(button_text, "Remove", 'Ensure the text on the button changes to `Remove` after adding to Cart`')
    });

    it('test case: check colour of text', async () => {
        const click = await driver.findElements(By.css("button"));
        click[2].click();
        const text_color = await click[2].getCssValue("color");
        assert.equal(text_color, "rgba(255, 255, 255, 1)", 'Ensure the colour of the text `Remove` is white')
    });

    it('test case: check text on button', async () => {
        const buttons = await driver.findElements(By.css("button"));
        const click = buttons[1];
        await actions.doubleClick(click);
        const button_text = await click.getText();
        assert.equal(button_text, "Add to Cart", "Ensure the text on the button changes to `Add to Cart` on the second click")
    });
});