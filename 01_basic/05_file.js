//  Primitive

// 7 types : String,Number,Boolearn,null ,undefined ,Symbol,BogInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 35684526844266998n

// Reference (non primitive)

// Array, Object, Function

const heros = ["Shruti","kjfbcj","dchjbdjsbv"]

let myObj = {
    name: "shruti",
   age: 22,
}

const myFunction = function(){
    console.log("Shruti hello");
    
}

console.log(typeof scoreValue);
