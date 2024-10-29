const user ={
    username : "mehak",
    price : "999",

    welcomeMessage :function(){
        console.log(`${this.username},welcome to website`)
        console.log(this) //gives the current context
 
    }


}
user.welcomeMessage() //user is name of object
user.username = "sam"
user.welcomeMessage()
console.log(this) //gives curly braces which are empty kyunki woh node ke andar print kara h

 //when we will write this statement in bowser the gloabal object is window and also it will give undefined

 const chai = () =>{
    let username ="mehak"
 }