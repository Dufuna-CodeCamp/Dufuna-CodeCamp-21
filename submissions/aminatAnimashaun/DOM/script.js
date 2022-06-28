window.onload = e = () => {

    const foodLocation = document.getElementById("foodLocation");
    const locationInterest = document.getElementById("locationInterest");
    const liTags = locationInterest.getElementsByTagName('li');



foodLocation.addEventListener('change',()=>{ 

for(let index = 0; index < liTags.length; index++)
{
    liTags[index].outerHTML='<a href=\"vendors.html\">'+liTags[0].outerHTML+"</a>";
}

});

}