// let name = 'Mayowa!';
// alert("Welcome Back " + name);


productList = [
    {
        productName: "Greg Bennett GD-100S G-Series Acoustic Guitar",
        imageUrl: "https://th.bing.com/th/id/R.1145813805b3eac7c0b6e2f921d5929f?rik=x7KSmcGnLfloUg&riu=http%3a%2f%2fc1.zzounds.com%2fmedia%2ffit%2c2018by3200%2fquality%2c85%2f7_Body_Left_Front_NA-8fcec5f57b35aee6bbdf67ca18908e83.jpg&ehk=FQ68jPhDO5065EmoFFS2Ws6Z0rs50f%2b%2fVJgTXWUsrwE%3d&risl=&pid=ImgRaw&r=0",
        productPrice: "70$",
    },

    {
        productName: "Professional Jazz Semi Acoustic Guitar",
        imageUrl: "https://th.bing.com/th/id/R.726b0a4442283160bb8c5aa93ff07309?rik=Z7cqJBmZFrfOtg&pid=ImgRaw&r=0",
        productPrice: "300$",
    },

    {
        productName: "Sparkle Glitz Electric Lead Guitar",
        imageUrl: "https://th.bing.com/th/id/OIP.woTJhZEDmlpPaiZbNN6PPAHaE7?pid=ImgDet&rs=1",
        productPrice: "100$",
    }
]

productList.forEach(function(item) {
    document.write(`${item.productName} with ${item.imageUrl} is sold for ${item.productPrice}<br><br><br>` )
}
);

