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

