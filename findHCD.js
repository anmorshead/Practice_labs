"use strict";

// DO NOT EDIT: The main function to house our program code 

function findHCD(a,b){
    while (a!==b){
        if(a>b){
            a=a-b
        }else{
            b=b-a
        }
    } return a;
}
function main()
{
    let num1=24
    let num2=18
    let hcd=findHCD(num1,num2)
    console.log(hcd);
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
