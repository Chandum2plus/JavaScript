// What is the control flow ?. What type of operators/statements change the control flow?

// Requirements
/*
1.) Understanding what variables are and what makes them global/local.
2.) Can explain what a function is and how they operate in JavaScript
3.) Understand primitive data types are and how to apply them

 */

// Intro to Control Flow
/*
Control flow in JavaScript is how your computer urns code from top to bottom. it starts from
the first line and ends at the last line unless it hits any statement that change the control
flow of hte  program such as loops, conditionals, or functions. in this article, I'm going
 to be explaining these three statements more in depth and how they affect control flow
 */

// Loops :-
/*
Loops are iteration statement that will keep running until there is either nothing left to
loop over, or if the condition becomes false. There are many types of  loops in JavaScript,
but for now I'm going to be going over three of them. Let's start with the most common used
one ,the "for" loop. the "for" is a conditional loop, which means that it runs based on if a
certain condition is true. As long as it stays true, the code is going to keep executing
 */

function controlOne(){

    //  It is array of strings which is stored in emd variable
    const edm=['House','DubStep','Drum','Bass']


    for (let i = 0; i <edm.length ; i++) {
        let element=edm[i]
        console.log(element)
        // console.log(edm[i])
    }
}
 // controlOne()

/*
Let’s break down what’s going on here. The syntax for a for loop contains a variable
declaration of i which is the index of the array edm that we are currently iterating
over. After that we have the condition that checks if i is less than the length of our
 array, followed by an increase in i. Basically, the for loop is saying to itself “okay so
 the index is 0, as long as that’s less than the length of the array, we are going to
 execute the code inside the code block and increase the value of i by one”. These
  three statements within the loop are optional though, as you can simply write for(;;){...}
   which would be an infinite loop.
 */

// While Loop
// The while loop is similar to the for loop because it also runs while a condition is true.
//     The difference between them is that you would use a for loop when you already know
// how many times you want the loop to be executed. A while loop is used when you are unsure
// about how many times the loop wants to run.


// forOf loop
function controlTwo(){
const arr=[1,2,3,4,5,6,7,8,9,10]
    for (const num of arr) {
        // console.log(num)
    }

    const greeting="Hello world ! "
    for (const greet of greeting) {

       // console.log(`each character of greet = ${greet}`)

    }

    const map=new Map()
    map.set('IN',"India")
    map.set('IN',"India")
    map.set('FR',"France")
    map.set('JP',"Japan")
    map.set('Uk',"United kingdom")
    map.set('USA',"United state of America")

    //console.log(map); // printing the map
    // how to iterate over the map

   // console.log("==================FIRST OUTPUT=====================")
    for (const key of map) {
      //  console.log(key)  // Result will show in the form of the array

        // Result like this below
        /*
[ 'IN', 'India' ]
[ 'FR', 'France' ]
[ 'JP', 'Japan' ]
[ 'Uk', 'United kingdom' ]
[ 'USA', 'United state of America' ]

         */
    }
   // console.log("===================SECOND OUTPUT===================")
    for (const [key,value] of map) {
       //console.log(key, "-:", value)
        // Result like this below -:
        /*
    IN -> India
    FR -> France
    JP -> Japan
    Uk -> United kingdom
    USA -> United sta-> United kingdom
    USA -> United state of America

         */
    }

    // How to iterate over objects

  //  console.log("================= RESULT OF OBJECT =======================")

    const myObject={
        name:"Chandu_kumar",
        roll:12,
        college:"Sinha College Aurangabad (Bihar)",
        department:"Computer Application",
        course:"BCA"
    }

    // iterating over an object
    for (const key in myObject) {

       // console.log(`${key} :- ${myObject[key]}`)
    }

    // How to iterate over an array using 'forin' loop

    const str=["cpp","java","python","Ruby","Js","Go"]
  //  console.log("========================RESULT OF ARRAY ========================")
    for (const key in str) {
        //console.log(`${key} - ${str[key]}`)
    }

    // How to use foreach

    const coding =["java","cpp","python","golang","Ruby","js"]

    coding.forEach(function (item){  // Here, i am using a function which has no name because of there is no need to function name
        //console.log(item)
    })

    // using the arrow function
     coding.forEach( (value)=>{  // here, also used a function and there is also no need to function name
        // console.log(value)
    })

    // how to print the value using the outside of the function in foreach loop

    function printMe(item){
       // console.log(item)
    }
    coding.forEach(printMe)  // here printMe is passing on

    // you can pass like this in the arrow function

    coding.forEach((item,value,arr)=>{
        //console.log(item,value,arr)
    })

    // iteration in array of object

    const mcoding=[
        {
            langName:"java",
            langFile:"java"
        },
        {
            langName:"python",
            langFile:"py"
        },
        {
            langName:"Golang",
            langFile:"go"
        },
        {
            langName:"JavaScript",
            langFile:"js"
        }
    ]

    mcoding.forEach((item)=>{
       // console.log(item) // it will print the all item with key value pair

        // if you want to access the particular data then your can access using the dot'.' notation
       // console.log(item.langName)  // it will print the language name
       // console.log(item.langFile)    // it will print the language file name
    })

    // iteration over an array using the filter method and also using arrow function
    const arr1=[1,2,3,4,5,6,7,8,9,10]
    const res =arr1.filter( (num)=>num<4 )  // we can assign in a variable of this
    console.log(res)

    const arr2=[1,2,3,4,5,6,7,8,9,10]

    const res1=arr2.filter((num1)=>{

        // if you are using the curly braces of scope of the function, so you  must use the return keyword
        return num1>3
    })
    console.log(res1)
}
controlTwo()