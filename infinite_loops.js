"use strict";
let readlineSync=require("readline-sync");

// DO NOT EDIT: The main function to house our program code 
function main()
{

    //while loop version

   let answer = readlineSync.question("Who is the best teacher?");
   while(answer != "Chris"){
    console.log("Nope! Try again")
    answer = readlineSync.question("Who is the best teacher?");

   }

   //for loop version

   answer = readlineSync.question("Who is the best teacher?");
   for(;answer!="Chris";){
    console.log("Nope! Try again")
    answer = readlineSync.question("Who is the best teacher?");

   }
    





}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
