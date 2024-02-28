
function sayMyName(num1,num2){
    // console.log("C");
    // console.log("H");
    // console.log("A");
    // console.log("N");
    // console.log("D");
    // console.log("U");
    console.log(num1+num2)

}

// sayMyName(2,null)


// First approach
function calculatorCartPrice(...num){  //Here, in the parameter body three dots is the "Rest operator".
                                                // it stores the values in the form of the arrays
    return num;
}
 //console.log("Returned value = ",calculatorCartPrice(2,11,22,2000,300,44,4040)) // Here, i am passing the parameters


// Second approach
function calculatorCartPrice(val1,val2,...num){  //Here, in the parameter body three dots is the "Rest operator".
                                                         // it stores the values in the form of the arrays
                                                            // Here, val1 and val2 is storing 2 and 11 only.
    return num;
}
//console.log("Returned value = ",calculatorCartPrice(2,11,22,2000,300,44,4040))


// Third approach

// Here, i am creating an object
const user={
    userName:"Chandu kumar",
    price:999
}
function handleObject(anyObject){  // Here, i am passing the object in the parameter section
    console.log(`usename is ${anyObject.userName} and price is ${anyObject.price}`)

}
// handleObject(user)

// Second approach

// Here, i am passing the object in the argument

function handleObjectInArgument(anuOb){
    console.log(`usename is ${anuOb.username} and price is ${anuOb.prices}`)
}
handleObjectInArgument(
    {
    username:"Chintu kumar",
    prices:2999
}
)

// Third approach

// Here, i am passing the array in the parameter section

const myNewArray=[12,23,34,45,56]
function returnSecondValue(getArray){
    return getArray[2]
}

//console.log(returnSecondValue(myNewArray))

// Fourth approach

function returnArrayThirdValue(getArrays){
    return getArrays[4 ]
}

console.log(returnArrayThirdValue([12,23,34,45,54,32,11]))