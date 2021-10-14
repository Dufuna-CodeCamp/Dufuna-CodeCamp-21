let productList = [
    {productName: "Seki", imageUrl: "https://seki.com/seki", productPrice: 10000},
    {productName: "Loki", imageUrl: "https://seki.com/loki", productPrice: 6000},
    {productName: "Oraimo Bud 2", imageUrl: "https://oraimo.com/bud-2", productPrice: 12000}
    ]

const products = () => {
    for (let y = 0; products < productList; y++)
    {
        document.write(`${productList[y].productName} with ${productList[y].imageUrl} is sold for ${productList[y].productPrice}\n`)
    }
}

products()

        

    // const seki = (`${productList[0].productName} with ${productList[0].imageUrl} is sold for ${productList[0].productPrice}\n`)
    // const loki = (`${productList[1].productName} with ${productList[1].imageUrl} is sold for ${productList[1].productPrice}\n`)
    // const oraimo = (`${productList[2].productName} with ${productList[2].imageUrl} is sold for ${productList[2].productPrice}\n`)

    // document.write(seki)
    // document.write(loki)
    // document.write(oraimo)