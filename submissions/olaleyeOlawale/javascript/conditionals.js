const printNumber = ()=> {
    var startNum = 7
    var endNum = 123
    var startValue = 1
    var difference = endNum - startNum

    for (let count = startValue; count <= difference; count++)
    {
        if ((count % 3 == 0) && (count % 5 == 0))
        {
            document.write("Software Developer")
        }

        else if (count % 5 == 0)
        {
            document.write("Developer")
        }

        else if (count % 3 == 0)
        {
            document.write("Software")
        }
        
        else
        {
            document.write(count)
        }
    }
}

printNumber();