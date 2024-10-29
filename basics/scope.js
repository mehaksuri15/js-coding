//{}-->scope when used with functions or if,else loop

// var c = 300 //global scope
let a=100
if(true){
    let a = 10
    const b =20 //local   scope
    var c = 30

    console.log("INNER VALUE :",a)
}
console.log(a) //it will give 100
// console.log(b) they both will not run 
console.log(c) //that is why we avoid var kyunki global mei isse 300 likha tha tab bhi yeh 30 print kar rha h

function One(){
    const username = "mehak"
    function two(){
        const website ="youtube"
        console.log(username);
    }
    // console.log(website) //website doesn't exist outside Two function

    // two()
}

One() //one func call karne pe two call ni hoga apne aap jab tak mention ni karenge

if (true){
    const username = "mehak"
    if(username ==="mehak"){
        const website = "youtube"
        console.log(username + website)
    }
    //console.log(website) //it does not exist outside the if scope

}

//console.log(username)  it does not exist outside the if scope

//*****************interesting ********************/
//ways to make func
console.log(addone (5))
function addone(num){
    return num+1
}

// addtwo(5) gives error bcoz addtwo ek variable hai 
//it cannot be called before initialization
const addtwo=function(num){
    return num +2
}
//  Hoisting refers to the process whereby the interpreter appears to move the declaration of functions,
//  variables, classes, or imports to the top of their scope, prior to execution of the code.