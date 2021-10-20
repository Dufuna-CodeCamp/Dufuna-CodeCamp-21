const file_path = process.env.FILE_PATH;
const { products, product_price } = require(file_path);
const expect = require("chai").expect;

describe("Product Array Algorithm Task", function () {
    it("check length of products", function () {
        expect(products.length).to.equal(20);
    });

    it("check length of product price", function () {
        expect(product_price.length).to.equal(20);
    });

    it("check products data type", function () {
        for (i = 0; i < products.length; i++) {
            expect(products[i]).to.be.a("string");
        }
    });

    it("check product price data type", function () {
        for (i = 0; i < product_price.length; i++) {
            expect(product_price[i]).to.be.a("number");
        }
    });
});
