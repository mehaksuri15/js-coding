let myDate = new Date
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toJSON())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toUTCString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toTimeString())
console.log(myDate.toLocaleDateString())
console.log(typeof myDate)//object

let myCreatedDate = new Date (2023,0,2) //month starts from 0
console.log(myCreatedDate.toDateString())


let myCreatedDate2 = new Date (2023,0,2,5,3) //month starts from 0
console.log(myCreatedDate2.toLocaleString())


let myCreatedDate3 = new Date ("2023-01-14") //month starts from 1 in format of YY-MM-DD
console.log(myCreatedDate3.toLocaleString())

// The Date.now() static method returns the number of milliseconds elapsed since the epoch, which is defined as the midnight at the beginning of January 1, 1970,
let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
//jo date given h usse leke abhi tak ke ms batayega
console.log(Date.now())

let newDate = new Date()
console.log(newDate.getMonth()) //month starts from 0
console.log(newDate.getDate())
console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday:"long"})
   
console.log(newDate)