"use strict";

// DO NOT EDIT: The main function to house our program code 
function main()
{//for loops
    //prints 1-10 on same line
    let string=""
    for (let i=0; i<10; i++){
        string = string + (i+1)
    }
    console.log(string)
//print all even numbers from 1-100

string ="" //reset the variable so it console.logs something different
for (let i=2; i<=100; i=i+2){//counts up in twos
    string = string +" "+i; //i goes from 2-<100 with a space inbetween
}
console.log(string)

//print all even numbers from 1-100 backwards
string="" //reset string again
for (let i=100; i>0; i=i-2){ // starts at 100, goes down to 0, decreasing by 2
    string = string +" "+i;
}
console.log(string);


//while loop

//prints 1-10

string =""
let i=1
while (i<=10){
string=string+" "+ i;
i++;
}
console.log(string)

// prints 1-100 in even numbers

string=""
i=2 //starting value
while(i<=100) {//up to 100
string=string+" "+i;
i=i+2;
}
console.log(string)

//prints 100-1 in even numbers
string=""
i=100//starting value
while(i>=2){// not less than 2
string = string +" "+i;
i=i-2;
}
console.log(string)


}
// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
