//Immediately Invoked function Expressons(IIFE)
// () FIRST IS FOR WRITING FUNCTION DEFINITION
//  () SECOND IS FOR EXCECUTION

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})(); 
//purpose : to avoid  polluting the global namespace
//imp to use semicolon at the end of function

//using arrow functions
((name)=> {
    console.log(`DB CONNECTED TWO ${name}`)
})("mehak");