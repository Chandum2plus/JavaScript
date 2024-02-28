console.log("Hello Chandu, Welcome to JavaScript !")

// First example
function one(){
    const score=200  // this is the constant variable which is not changeable during the runtime


    if (score!==100){ // if condition is true, execute this block
        console.log("Not tested")
    }else { /// if condition is false, then execute this line
        console.log("tested")
    }
}
// one()

function two(){
    // const balance=1000
    // // this way is the implicit conditional scope.
    // // which is not acceptable in the tech company
    // if (balance>500) console.log("Yes condition is true");

    // you can write the multiple line of the code using the implicit scope using the comma(,) separator like bellow
    const temp=50
    if (temp<40) console.log("temp is under the 50"),
        console.log("temp is tested");

    // this is the not good way of the defining the logic
}
// two()

function three(){

    // const userLoggedIn=true
    // if (userLoggedIn){  // In this case condition is true, result will be yes
    //     console.log("yes")
    // }else {
    //     console.log("not")
    // }

    if (3!==2){
        console.log(`yes ${3} is not equal to ${2}`)
    }

    if (2==="2"){ // In this case , using triple === this check the also datatype so in this case result will be false
        console.log("First Checking Executed")
        // this block is not executed because here used triple ===
    }else {
        console.log("First Checking Not executed")
    }

    if (3=="3"){// In this case, using double == it do not check the datatype. so in this case result will be true
        console.log("Second Checking executed")
        // this block is executed because here used double ==
    }else {
        console.log("Second Checking not executed")
    }


}
 /// three()

function four(){
    const userLoggedIn =true
    const userDebitCard=true
    if (userLoggedIn && userDebitCard){
        console.log("you are allowed to purchase the courses")
    }else {
        console.log("You are not allowed to purchase the coursed")
    }

    const userLoggedFromGoogle=false
    const userLoggerFromApple=true
    // const userAge=11
    if (userLoggedFromGoogle || userLoggerFromApple ){
        console.log("You are allowed to watch the video")
    }else {
        console.log("You are not allowed to watch the video")
    }

}
 // four()

// how to check the truthy value without comparing any values
function five(){
    const userEmail="chandukumarbca@gmail.com" //userEmail has a string
    const userEmail1 ="" // it is empty, so it will give false value it means else part executed (falsy value)
    const userEmail2=[] // this is the truthy value
    const userEmail3={}  // this is the truthy value
    if (userEmail){
        console.log("Got user email")
    }else {
        console.log("Don't have user email")
    }

    // falsy value -:
   //  false,0,-0,BigInt 0n,null,"",undefined,NaN ( these are the falsy value)
     // instead of these all are the truth y values

    // some surprising truthy value
    // "0" , 'false' , " " , [] , {} , function(){}

    const array=[]
    if (array.length===0){
        console.log("Array is empty  ")
    }

    // How to detect empty object

    const emptyObject={}
    if (Object.keys(emptyObject).length===0){
        console.log("object is empty ")
    }

    // if check the false == 0 then result will be true or checking empty string result will be true
 //   0 ==' ' true
    if (false==' '){
        console.log("true")
    }else {
        console.log("false")
    }
}
 // five()

// Nullish coalescing operators (??)

function six(){
    let a
     a=5??10  // Result will be 5
    console.log(a)

    let b=null ??10 // Result will 10
    console.log(b)
    a=undefined??14
    console.log(a)
}
 //six()

// Ternary operator
function seven(){
    // Syntax-:
    // condition ? true:false
    
     const iceTeaPrice=100
   iceTeaPrice<=80? console.log("less than 80"):console.log("More  than 80")
}
seven()

