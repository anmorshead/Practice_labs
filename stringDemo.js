"use strict";

// DO NOT EDIT: The main function to house our program code 
function main()
{
    let inputString = "Imagination is more important than knowledge";
    let redactInput = "a,i,k,j";
    let redactInputArray = redactInput.split(",");

    console.log(inputString[0]);
    console.log(redactInputArray[1]);
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
