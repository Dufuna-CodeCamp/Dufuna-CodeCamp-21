document.open();

// print numbers from 1 to 116
for(i = 1; i <= 116; i++){
    
    if(i % 15 == 0){
        document.write("Software Developer \n"); 
    }

    // multiples of 3 prints Software
    else if(i % 3 == 0){
        document.write("Software \n");
    }

     // multiples of 5 prints Developer
    else if(i % 5 == 0){
        document.write("Developer \n");
    }  

    else {
        document.write(i + "\n");
    }

}


document.close();
