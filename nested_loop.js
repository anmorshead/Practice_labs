"use strict";
let readlineSync = require("readline-sync");
// DO NOT EDIT: The main function to house our program code 
function main()
{
let string = "";
let lines = 5 // line change
for(let i=1; i<=lines; i++){ //i goes from 1-lines


for(let k=i; k<=lines; k++){ //k goes from i to lines
    string=string+' '+k;
}
string=string+"\n";//line break after loop
}

console.log(string)

while (true)
{
let numOfHash = parseInt(readlineSync.question("How many # per line?"));
for(let line=0;line<numOfHash;line++){
    let oneLine=""
    for(let symbolCount=0;symbolCount<numOfHash;symbolCount++){

        oneLine=oneLine+ "#";
        }
    console.log(oneLine);

    }
//will ask forever
}
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
