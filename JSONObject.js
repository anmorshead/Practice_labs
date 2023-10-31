"use strict";

// DO NOT EDIT: The main function to house our program code 
function main()
{
    //decalre object
    let aJSONObject = {
        name:"JSON Obj",
        key1:"value1",
        key2:"value2",
        key3:"value3"
    };
//two ways to retrieve values from object
console.log(`aJSONObj ["name"]: ${aJSONObject["name"]}`)
console.log(`aJSONObj . name : ${aJSONObject.name}`) //** use this


let bicycles = [
    {
        name: "hamlet",
        color: "red",
        weight: 12
    },
    {
        name: "shakespear",
        color:"blue",
        weight: 8
    }
];
//retrieve one object in the array bicycles
console.log(`bicycles[0]: ${bicycles[0]}`)
//retrieve the objects within the object
console.log(`bicycles[0]["name"]: ${bicycles[0]["name"]}`)
console.log(`bicycles[0].name: ${bicycles[0].name}`)

//retrieve all key values of the first bicycle object using for loop
for(let key in bicycles[0]){
    console.log(`key: ${key}, bicycles[0][${key}]: ${bicycles[0][key]}`)
}
//use nested loop to go over all bibycles
for(let i=0; i<bicycles.length; i++){
    console.log(`====Bicycle{${i}}====`)
    for(let key in bicycles[i]){
        console.log(`key: ${key}, bicycles[${i}][${key}]: ${bicycles[i][key]}`)
    }
}



}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
