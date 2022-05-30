//  var productList = [
//     {
//         productName: "Wig",
//         imageUrl:"imageurl-1",
//         productPrice: 5000,
//     },

//     {
//         productName: "Denim",
//         imageUrl:"imageurl-2",
//         productPrice: 7000,
//     },

//     {
//         productName: "Gold-pendant",
//         imageUrl:"imageurl-3",
//         productPrice: 3500,
//     }
// ]

// document.write(productList[0].productName, " with ", productList[0].imageUrl, " is sold for ", productList[0].productPrice, ". ")
// document.write(productList[1].productName, " with ", productList[1].imageUrl, " is sold for ", productList[1].productPrice, ". ")  
// document.write(productList[2].productName, " with ", productList[2].imageUrl, " is sold for ", productList[2].productPrice, ". ")

//task 2
for (i=1; i<116; i++){
    if (i%3==0 && i%5==0){
        document.write(" |Software Developer| ")
    }

    else if (i%3==0) {
        document.write(" |Software| ")
    }

    else if (i%5==0 ){
        document.write(" |Developer| ")
    }

    else{
        document.write(i, " ")
    }

}
console.log(10^9)