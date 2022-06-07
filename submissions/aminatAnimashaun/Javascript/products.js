
let food = { productName: 'Rice',
             imageUrl: 'http://localhost/food', 
             productPrice: 20000
            }
let fruits = {
    productName: 'Banana',
    imageUrl: 'http://localhost/banana',
    productPrice: 500
}
let Beverage = {
    productName: 'Milo',
    imageUrl: 'http://localhost/beverage',
    productPrice: 2000
}
var productList = [food, fruits, Beverage];

for( let index = 0; index < productList.length; index++)
{
    document.write('&lt;'+productList[index].productName+'&gt;'+
    ' with &lt;'+productList[index].imageUrl+
    ' &gt; is sold for &lt;'+productList[index].productPrice+' &gt;<br/>');

}
