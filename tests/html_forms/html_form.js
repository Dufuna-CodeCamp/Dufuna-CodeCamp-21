var file_path = process.env.FILE_PATH;
var webdriver = require("selenium-webdriver");
var assert = require("chai").assert;
var { Builder, By } = require("selenium-webdriver");

describe("Testing Form Task", function (done) {
  this.timeout(3 * 1000 * 60);
  var driver = new webdriver.Builder().forBrowser("chrome").build(done);

  before(function setupWebdriver() {
    var file_url = `file://${file_path}`;
    driver.get(file_url);
  });

  after(function () {
    driver.quit();
  });

  it("test case: assert 4 input fields are present", async () => {
    const input = await driver.findElements(By.css("input"));
    const size = input.length;
    assert.equal(
      size,
      4,
      `Ensure you have all the input fields in the order stated in the task criteria`
    );
  });

  it("test case: Full Name label is present", async () => {
    const name = await driver.findElement(By.css("body"));
    const text = await name.getText();
    const fullname = await text.toLowerCase();
    assert.include(
      fullname,
      "full name",
      `Ensure "Full Name" label is present`
    );
  });

  it("test case: Email label is present", async () => {
    const name = await driver.findElement(By.css("body"));
    const text = await name.getText();
    const email = await text.toLowerCase();
    assert.include(email, "email", `Ensure "Email" label is present`);
  });

  it("test case: Subject label is present", async () => {
    const name = await driver.findElement(By.css("body"));
    const text = await name.getText();
    const subject = await text.toLowerCase();
    assert.include(subject, "subject", `Ensure "Subject" label is present`);
  });

  it("test case: Message label is present", async () => {
    const name = await driver.findElement(By.css("body"));
    const text = await name.getText();
    const message = await text.toLowerCase();
    assert.include(message, "message", `Ensure "Message" label is present`);
  });
});
