var file_path = process.env.FILE_PATH
const webdriver = require('selenium-webdriver');
const assert = require('chai').assert;
var { Builder, By } = require("selenium-webdriver");
var expect = require('expect.js')

describe("Testing Product Projects", function () {
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

    it('test case: Prints out the value of array', async () => {
        const productList = driver.wait(webdriver.until.elementLocated(webdriver.By.css("body")));
        const text = await productList.getText();
        let x= 123 -7;
        for (let i = 1; i <= x; i++) {
          if (i % 3 === 0 && i % 5 === 0)  {      
        assert.include(text, "console.log('Software Developer')" );
          }
          else if (i % 3 === 0) {
            assert.include(text, "console.log('Software')");
        }
        else if (i % 5 === 0) {
          assert.include(text, "console.log('Developer')");
      }
      else {
        assert(text, `Expects ${text} to include ${i}`)
    }
        }
    });
});

