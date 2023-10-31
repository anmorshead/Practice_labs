"use strict";

// DO NOT EDIT: The main function to house our program code 
function main()
{
    let a2DArray= [
        [0,2,1],
        [4,5],
        [7,8,9]
    ];
    //create nested loop to go over the arrray
    let biggestNum = a2DArray[0][0]; // declare variable, set it to 0
    for ( let row = 0;row<a2DArray.length;row++){
        console.log(`=======row${row}=======`);//prints your row
        for(let col = 0;col< a2DArray[row].length; col++){ //check length inside of row as well
            console.log(a2DArray[row][col]);// prints the column inside the row
            if (a2DArray[row][col] > biggestNum){
                biggestNum = a2DArray[row][col];// finds the biggest number by comparing each row and column to previous one.
            }
        }
    }console.log(`Biggest value in the array is: ${biggestNum}`)


}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
