"use strict";

// DO NOT EDIT: The main function to house our program code 
function main()
{
    let names =["Ada", "Bravo", "Charlotte", "Delta"];
    let ages = [4,6,8,10];
    let totalAge = 0;

    for (let i=0; i<ages.length; i++){
        totalAge = totalAge+ages[i];
    }
    console.log(`Average age: ${parseFloat(totalAge)/ages.length}`)
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
