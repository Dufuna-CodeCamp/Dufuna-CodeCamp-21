
function fizzbuzz() {
let num;
let num1 = 7;
let num2 = 123;
let difference = num2 - num1;

    for(num=1; num <= difference; num++){
    
        // For numbers which are both multiples of three (3) and five (5), print Software Developer.
        if(num % 3==0 && num%5==0){
            document.write("Software Developer <br>");
        }
        // For numbers that are multiples of three (3), print Software instead of the number
        else if((num%3)==0){
            document.write("Software <br>");
        }
        // For numbers that are multiples of five (5), print Developer instead of the number
        else if((num%5) == 0){
            document.write("Developer <br>");

        }
            // For numbers that are not multiples of five (5) or three (3), print the number 
            else{
                document.write(num+"<br>");
        }
    
}
    
    
}


fizzbuzz();