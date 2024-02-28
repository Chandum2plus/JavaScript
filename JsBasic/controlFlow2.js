
const Books=[
    {title:'computer',genre:'fundamental',publish:1990,edition:2000},
    {title:'DSA',genre:'in depth',publish:1998,edition:2002},
    {title:'Golang',genre:'basic',publish:2001,edition:2003},
    {title:'Java',genre:'basic',publish:2001,edition:2004},
    {title:'python',genre:'basic',publish:2002,edition:2008},
    {title:'Golang',genre:'advanced',publish:2011,edition:2019},
    {title:'Math',genre:'fundamental',publish:2000,edition:2010},
]

// const userBooks=Books

let userBooks=Books.filter((bk)=>bk.genre==='advanced')  // here is no need to use the return keyword
    //console.log(userBooks)
userBooks=Books.filter((bk)=>{
    return bk.publish>=2001&&bk.genre==='advanced ' // if you are using the function scope then you must be use the return keyword
})
//console.log(userBooks)


// second approach
function fetchFromDatabase(){ // here, adding in each element 10 number
const myNumber=[1,2,3,4,5,6,7,8,9,10] // this is an array
    let newNum=myNumber.map((num)=>num+10) // here, i am using the arrow function which is known as callback function
    // console.log(newNum)  // Here, printing the newNumber after adding the 10 number

     newNum=myNumber.map((num)=> {
         return num + 10  // here is using the return keyword because it has function scope
     }
     ) // here, i am using the arrow function which is known as callback function    console.log(newNum)
    console.log(newNum)
}
// fetchFromDatabase()

function one() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const newNumber = arr
        .map((num) => num * 10)  // here multiplying to each element by 10
        .map((num) => num + 2) //here adding to each element by 2
        .map((num)=>num-3) // here subtracting to each element by 3
        // you can use also filter

        .filter((num)=> num>=40)  // it will print only which is greater than 40

    console.log(newNumber)  // printing the element


}
// one()

// how to use the reduce function
function two(){

    // this is the first approach

    // const arr=[1,2,3]
    // const reduceNum=arr.reduce((acc,curr)=>acc+curr,0)
    // console.log(reduceNum)

    // second approach
    const arr1=[1,2,3,4,5]
    const totalNum=arr1.reduce(function (acu,curval){
        console.log(`acu value = ${acu} and curval =${curval}`)
        return acu+curval
    },0)
    console.log("Total value is =",totalNum)
}
 // two()

function three(){
    const course=[
        {itemName:'Js course',
            itemPrice:2999,
        },
        {itemName:'Golang course',
            itemPrice:4999,
        },
        {itemName:'Java course',
            itemPrice:3999,
        },
        {itemName:'Python course',
            itemPrice:2990,
        }, {itemName:'Ruby rail course',
            itemPrice:6999,
        }, {itemName:'Mobile dev course',
            itemPrice:12999,
        }, {itemName:'full stack course',
            itemPrice:9999,
        },
    ]

  const totalPrice=  course.reduce((acu,item)=>acu+item.itemPrice, 0)
    console.log(totalPrice)
    const totalCourse=course.reduce(function (acu1,itemN){
        console.log(`course name =${itemN.itemName}`)
        return acu1+itemN.itemName
    },0)
    console.log(totalCourse)
}
three()