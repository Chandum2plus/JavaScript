

// example of the arrow function

// First approach
const user={
    username:"Chandu",
    email:"chandukumarbca@gmamil.com",
    class:"MCA",

    welcomeMessege:function (){
        console.log(`Hey ${this.username}, welcome to website`)
        console.log(this)
    }
}
//user.welcomeMessege()

// Second approach

const instructor={
    name:"Subodh",
    email:"subodhbca@gmail.com",

    welcomeMessege1:function (){
        console.log(`Hey ${this.name},welcome to website.`) // "this" keyword is print the current value (context  from database
        console.log(this)
    }
}
// instructor.welcomeMessege1()
// instructor.name="Chintu" // Here, changing the name
//instructor.welcomeMessege1()
//console.log(this )

// Origin arrow function is starting from here.

function one(){
    console.log(this)
}
//one()

const addTwo = (num1,num2) => {  // This is the basic arrow function
    // if you are using the curly braces then you must use the return function 
    return num1+num2
}
//console.log(addTwo(23,45))

const addThree = (num1,num2,num3) => num1+num2+num3 // This is the implicit return function
//console.log("Result = ",addThree(2,3,4))

const multi = (num1,num2) => (num1*num2)  // You can use the parenthesis  in implicit return arrow function
console.log(multi(2,3))


