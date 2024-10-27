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