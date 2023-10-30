"use strict";
var readlineSync = require('readline-sync');
// DO NOT EDIT: The main function to house our program code 
function main() {
    let in_num1 = parseInt(readlineSync.question("Enter the first number:"));

    while (!Number.isInteger(in_num1)) {
        console.log("ERROR! Enter a valid first number.");
        in_num1 = parseInt(readlineSync.question("Enter the first number:"));
    }
    let in_num2 = parseInt(readlineSync.question("Enter the second number:"));
    while (!Number.isInteger(in_num2)) {
        console.log("ERROR! Enter a valid second number.");
        in_num2= parseInt(readlineSync.question("Enter the second number:"));
    }

    console.log(in_num1, in_num2);
}


// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
