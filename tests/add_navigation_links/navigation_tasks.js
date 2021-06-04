var file_path = process.env.FILE_PATH
var webdriver = require('selenium-webdriver');
var assert = require('chai').assert;
var { Builder, By, until } = require("selenium-webdriver");

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

//         it("tests case: Check if Product Link is present", async () => {

             
//              driver.findElement(By.linkText('Contact')).click();
//             driver.wait(until.titleIs('leeem'));
// driver.close();
//             const element = await driver.findElement(By.css("a[href='contact-form.html']"));
//             const link = await element.getText()
// //             assert.include(link, "Contact", `Ensure link is presnt` )
//         })

        // it("test case: check if Price is present", async () => {
        //     const element = await driver.findElement(By.css("body"));
        //     const text = await element.getText();
        //     const price = await text.toLowerCase();
        //     assert.include(price, "Contact Us", `Ensure Price is present`);
        // });

        it ("Test Contact link", async() => {
           var file_url = `file://${file_path}`;
           const link = await driver.findElement(By.linkText('Contact Us')).click();
           const links = await driver.getCurrentUrl(link);
           const current = await driver.getCurrentUrl(file_url)
            assert.equal(links, current, `Ensure link redirects properly`);
        });

        it ("Test Products link", async() => {
            const link = driver.findElement(By.linkText('Products')).click();
            const links = await driver.getCurrentUrl(link);
            driver.switchTo().window(links).then(() => {
                var file_url = `file://${file_path}`;
                const link =  driver.findElement(By.linkText('Contact')).click();
                const links = driver.getCurrentUrl(link);
                const current =  driver.getCurrentUrl(file_url)
                 assert.equal(links, current, `Ensure link redirects properly`);
              }); 
         });

    // it("tests case: Check if Product Link is present", async () => {
    //     const element = await driver.findElement(By.css("a[href='../HTML/products_page.html']"));
    //     const link = await element.getDriver()
    //     assert.include(link, "Product", `Ensure link is presnt` )
    // })

    // it("tests case: Check if Product Link is present", async () => {
    //     const element = await driver.findElement(By.css("a[href='products_page.html']"));
    //     const link = await element.getText()
    //     assert.include(link, "Product", `Ensure link is presnt` )
    // })


    // it("tests case: Check if Product Link is present", async () => {
    //     const element = await driver.findElement(By.css("a[href='../HTML-FORMS/contact-form.html']"));
    //     const link = await element.getText()
    //     assert.include(link, "Contact", `Ensure link is presnt` )
    })

    
    // it("test case: Check if clicking the Product link navigates user to the Product Page", async () => {
    //     const element = await driver.findElement(By.css("a[href='../product.html']"));
    //     if (element.click()) {
    //         const navigator =  driver.navigate().to('../product.html');
    //         if(navigator){
    //             const actualTitle = await driver.getTitle()
    //             const expectedTitle = 'Product'
    //             assert(actualTitle !== expectedTitle, `Expects ${actualTitle} to navigate to ${expectedTitle}`)
    //         }
    //     }   
    // })

    // it("test case: Check if clicking the Contact Form link navigates user to the Contact Page", async () => {
    //     const element = await driver.findElement(By.css("a[href='../contact.html']"))
    //     if(element.click()){
    //         const navigator = driver.navigate().to('../contact.html');
    //         if(navigator) {
    //             const actualTitle = await driver.getTitle()
    //             const expectedTitle = 'Contact Form'
    //             assert(actualTitle !== expectedTitle, `Expects ${actualTitle} to navigate to ${expectedTitle}`)
    //         }
    //     }
    // })

