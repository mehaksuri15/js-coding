  //if
//   if(condition){

//   }
//   != (Abstract Inequality):
// Checks if two values are not equal, allowing type conversion.
// !== (Strict Inequality):
// checks if two values are not equal without allowing type conversion

const balance =1000
if(balance >500) console.log("test"),console.log("test2");
//implicit scope :no need of curly braces but ek hi line mei aata h
//to write in diff lines use comma and dont forget to add semicolon at end

//switch case
const month=3
switch(month){
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb")
        break;
    case 3:
        console.log("march")
        break;
    default:
        console.log("default case match");
        break;         
}

//truthy and falsey values
const userEmail = "m@mehak.ai"
if (userEmail){
    console.log("Got user email")
}
else{
    console.log("Dont have user email")
}

//falsy values
//false, 0, -0 , BigInt 0n , null , undefined , NaN , ""

//truthy values
// "0" , 'false', " ",  [] , {} , function () {} ,  

const userEmail1 = []
if(userEmail ){
    console.log("Got user email")
}
else{
    console.log("Dont have user email")

}
if(userEmail.length ===0){
    console.log("Array is empty")
}

const emptyObject = {}

if (Object.keys(emptyObject).length === 0){
    console.log("Object is empty");
}
//object .keys hume array return karega

//Nullish Coalescing Operator(??) : null undefined
// let result = a ?? b;
// Behavior
// If a is null or undefined, result will be b.
// If a is any other value (including 0, false, or an empty string), result will be a.
//example

let val1;
val1 = 5??10
console.log(val1)
let val2 = null??10??20
console.log(val2)

//terniary operator
//condition ? true : false
const iceTeaPrice = 100
iceTeaPrice>= 8 ? console.log("less than 80") : console.log("more than 80")
