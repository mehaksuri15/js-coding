// *****************SAMPLE CODE*********************
// let val1=10
// let val2=5
// function addnum(num1,num2){
//     let total = num1+num2
//     return total
// }
// let result1=addnum(val1,val2)
// let result2 = addnum(16,2)


// *********************CODE EXECUTION***********************

// 1.)Global exceution :kept in this variable
//browser mei this ki value window object aati h
// 2.)memory phase
// val1 ->undefined
// val2 ->undefined
// addnum ->definition
// result1 ->undefined
// result2 ->undefined
// 3.)execution phase
// val1 <-10
// val2<-5
// addnum func is called : whenever a func is called a new box is created called 
// new variable environemnt +execution thread abh iske liye memory phase and execution phase dono honge
// memory phase
// val1 ->undefined
// val2 ->undefined
// total ->undefined
// execution phase
// num1->10
// num2->5
// total->15 (it will be returned in global    execution context)
// result1 ->15
// same procedure will go for another addnum func
// result2->18