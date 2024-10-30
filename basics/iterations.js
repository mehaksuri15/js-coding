//for loop
for (let i=0;i<10;i++){
    const element =i;
    if(element ==5){
        console.log("5 is odd no");
    }
    console.log(element)
}

for(let i=0;i<=10;i++){
    console.log(`Outer loop value : ${i}`)
    for(let j=0;j<=10;j++){
        // console.log(`Inner loop value ${j} and inner loop ${i}`)
        console.log ( i +" * "+ j + '=' +i*j)
    }
}

//while loop

let myArray=['flash','batman','superman']
let arr=0
while(arr<myArray.length){
    console.log(`Value is ${myArray[arr]}`)
    arr=arr+1
}

//do while loop

let score =1
do{
    console.log(`Score is ${score}`);
    score ++
}while(score<=10)

//if score = 11 ,it will run for atleast 1 time and uske baad condition check hoti hai