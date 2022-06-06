for(let start = 1; start <= (123 - 7); start++ )
{
    if( (start % 3) == 0 && (start % 5) == 0)
    {
        document.write("Software Developer<br/>");
    }
    else
    {
        if(start % 3 == 0)
        {
            document.write("Software<br/>");
        }
        else
        {
            if( start % 5 == 0)
            {
                document.write("Developer<br/>");
            }
            else
            {
                document.write(""+start+"<br/>");
            }

        }
       
    }
}
