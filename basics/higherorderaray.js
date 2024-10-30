const arr=[1,2,3,4,5]
// for(const iterator of object){

// }
//object doesnt mean object here .it means kiske upar lagana h
for(const i of arr){
    console.log(i)
}

const greetings = "hello world"
for (const greet of greetings){
    console.log (`Each char is ${greet}`)
}

//Map object holds key value pairs and remembers the original insertion order of keys
//no duplicate values,all values are unique

// const map=  new Map()
// map.set('IN', "India")
// map.set('USA', "United States Of America")
// map.set('Fr', "France")

// console.log(map)

// for(const key of map){
//     console.log(key)
// } 
//it gives all the key value pairs in different arrays

//to print key and values differently
// for(const [key,value] of map){
//     console.log (key , ':-', value)
// }

//applying for of loop on my object
const myObject = {
    'game1' : 'NFS' , 
    'game2' : 'Spiderman'
}
// this is not the correct syntax for using forof loop in objects
// for(const [key,value] of myObject){
//     console.log(key,':-',value);
// }
//for in loops are used for objects

const myObject2 = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple'
}
for(const key in myObject2){
    console.log(key) //gives all keys
}
for(const key in myObject2){
    console.log(myObject2[key]) //gives all values 
}  
for(const key in myObject2){
    console.log(`${key} shortcut is for ${myObject2[key]}` );
}//gives all key value pairs

//for in loops work in arrays?
const programming =['js','rb', 'py','java','cpp']

for (const key in programming){
    console.log (key) //gives all keys ie index of the array
}

for (const key in programming){
    console.log (programming[key]);
}//gives values of all keys

////for in loops work in maps?
const map=  new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('Fr', "France")
for (const key in map){
    console.log(key)
} //it won't print anything as maps are not iterable



coding.forEach()  