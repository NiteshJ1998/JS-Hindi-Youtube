// Primitive Data Types



// The differnce betwn primitive datatype and non primitive datatypes is that how we 
// access the values and how they stored in memory. in this basis official catergories take place.


// Question - what is primitive and non-primitive data ? 
// how the data store in memory and how we access the data on that basis we categories primitive and non-primitive data


//  Primitive Data: 7 Types : String, Number, Boolean, Null(Means empty), 
//                            Undefined, Symbol, BigInt.


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let  userEmail;//undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 4327894374730903209374n

// All primitive types are called by values. whenever we copy this from other place,
// the data which we copy the original data of ref memory is not given to us.
// only copy we get and all changes we make on its changes on only copy.


// Reference (Non Primitive)

// Array, Object, Functions

const Heros = ['spiderman', 'shaktiman','Iron-man']

let myObj = {
    name:'nitesh',
    age:26

}

const myFunc = function(){
    console.log('hello world')
}

console.log(typeof myFunc)