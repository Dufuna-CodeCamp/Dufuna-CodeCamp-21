var file_path = process.env.FILE_PATH
const webdriver = require("selenium-webdriver");
const assert = require("chai").assert
const chromedriver = require('chromedriver')
const { Builder, By } = require("selenium-webdriver");

describe("Printing product price", function () {
    this.timeout(3 * 1000 * 60)
    var driver = new webdriver.Builder().forBrowser('chrome').build()

    before(function setupWebdriver(done) {
        var file_url = `file://${file_path}`;
        driver.get(file_url).then(done)
    })

    after(function () {
        // driver.quit()
    })

    it("prints product price", async () => {
        var productList = [{ productName: "a", imageUrl: "b", productPrice: "4" }, { productName: "a", imageUrl: "b", productPrice: "4" }, { productName: "a", imageUrl: "b", productPrice: "4" }]
        console.log(productList)
    })
})