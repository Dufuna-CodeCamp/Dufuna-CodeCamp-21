/*var str = "";
for (var i = 0; i < 9; i++){
    str = str + i;
}
console.log(str);

var n = 0;
var str1 = "";
while(n < 9){
    str1 += n;
    n++;
}
console.log(str1);

//Do while
var str = "";
var z = 0;
do {
    str += z;
    z++;
}
while(z < 9)
console.log(str);


var person = {fname: "fc", age: 25};

var str = "";
var x;
for (x in person){
    str = str + person[x]
}
console.log(str);
*/
var str = "";
var i = 0;
while (i < 9){
    if(i === 5){
        break;
    }
    str += i;
    i++;
}
console.log(str);