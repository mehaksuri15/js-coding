function sayMyName(){
    console.log("m")
    console.log("e")
    console.log("h")
    console.log("a")
    console.log("k")   
}
sayMyName();

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2) 
  
// }
// const result = addTwoNumbers(4,3)
// console.log(result) //it will give undefined as result ke paas kuch return hoke ni aara

function addTwoNumbers(number1,number2){
    let result = number1+number2
    return result
    // console.log("mehak") //this will never be executed kyunki return ke baad likha h
}
const result = addTwoNumbers(4,3)
console.log("Result : ",result)
//parameter :jo function header mei use hote h
//arguments :jo function call mei use hoti h
function loginUserMessage(username){
    if(username === undefined)//if(!username) undefined is by default considered as false
    {
        console.log("Please enter a username : ")
        
        return;
    }
    return `${username} just logged in`

}
console.log (loginUserMessage("mehak"))
console.log (loginUserMessage(""))
console.log (loginUserMessage()) //it will give undefined

//supoose in real time example we don't know kitne arg ya parameters aayenge
//rest oeperator (...) 
//note :issi ko dot operator bhi bolte h
function calculateCartPrice(...num){
    return num
}
console.log(calculateCartPrice(200,400,500))
//it gives array of [200,400,500]


//imp thing to note
function calculateCartPrice(val1,val2,...num){
    return num
}
console.log(calculateCartPrice(200,400,500,2000))
// val1 =200,val2=400,...num=[500,2000] 

const user = {
    username : "mehak",
    price : 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user)

const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1] //don't write myNewArray
    //hume yeh dhyan rakhna h ki humare paas kya argument aara h
}
console.log(returnSecondValue(myNewArray));
//or console.log(returnSecondValue([200,400,100,600]))
