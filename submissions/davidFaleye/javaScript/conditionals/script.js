let num = 123 - 7;
for (var value = 1; value <= num; value++)
    {
    if ((value % 3 == 0) && (value % 5 == 0 )){
        document.write("Software Developer" + "<br>");
    } 
    else if (value % 3 == 0 )
    {
        document.write("Developer" + "<br>");
    } 
    else if (value % 5 == 0 )
    {
        document.write("Software"  + "<br>");
    } 
    else 
        document.write("<br>"); 
}