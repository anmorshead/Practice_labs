"use strict";

// DO NOT EDIT: The main function to house our program code 
function main()
{
    for (let i = 1; i <= 5; i++) { //outer loop iterates from 1-5 for number of rows
        let row = '';
      
        for (let j = 1; j <= i; j++) { //inner loop that iterates from 1- current value of outer loop(i)
          row = row + '*'; // For each iteration of the inner loop, we add (*) to the row variable
        }
      
        console.log(row);
      }

      for (let k = 5; k>=1; k--){ //reverse order
        let row = " ";
        for (let l= 1; l<=k; l++){
            row = row + "*"; 
        }
        console.log(row);
      }


    }

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
