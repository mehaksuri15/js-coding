const myArr=[0,1,2,3,4,5]
console.log(myArr[0])
//js array copy operations create shallow copies
//shallow: a copy whose properties share the same references as those of source obj from which copy was made
//deep : a copy whose properties share the same references as those of source obj from which copy was made

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

//Array methods

myArr.push(6)
myArr.push(7)
console.log(myArr)
myArr.pop()
console.log(myArr)

myArr.unshift(9)//starting mei 9 add hojata j
//not feasible as saari index aage aage shift hoti h
console.log(myArr)
myArr.shift()
console.log(myArr)
console.log(myArr.includes(9)); //gives boolean values either true or false
console.log(myArr.indexOf(3))
const newArr = myArr.join() //adds all elements of array into a string
console.log(myArr)
console.log(newArr)
console.log (typeof newArr)

//slice,splice
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //prints 1,2
console.log(myn1)
//original array remains same

console.log("B ", myArr);

const myn2 = myArr.splice(1, 3) //prints 1,2,3
console.log(myn2);
console.log("C ", myArr);//original array gets modified after splicing 1,2,3
console.log(myn2);

const marvel_heros = ['thor','ironman','spiderman']
const dc_heros = ['superman','flash','batman']
//marvel_heros.push(dc_heros)//gives array within another array
//console.log(marvel_heros)
//console.log(marvel_heros[3][1])
//not a very good way

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros)

//spread
const all_new_heros =[...marvel_heros, ...dc_heros]
console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(4)
//returns a new array with all suba arrays elements concantenated into it recursively upto specified depth
console.log(real_another_array)

console.log(Array.isArray("Mehak"))
console.log(Array.of("mehak")) // converts mehak as whole into idex 0 of array
console.log(Array.from("mehak"))//converts each char of mehak into array
console.log(Array.from({name:"mehak"}))
//cannot convert obj into array directly ,will give empty array as of now
//we need to mention that whether we want array of all keys or array of all values

let score1=100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))