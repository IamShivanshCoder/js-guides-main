// Primitive

//7 types : String callbyvalue()
// String,Number,Boolean,null,undefined,Symbol,  BigInt

let biginty = 11223444523443n;
let symboly = Symbol("fedf");

//Refrence data types , Non primitive

// Array
const heroes = [1, 3, 56, 6];
// Objects
let myobj = {
  name: "hi",
  age: "sss",
};
// Functions

console.log(typeof myobj);
console.log(typeof heroes);
console.log(typeof biginty);
console.log(typeof symboly);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack,Heap Memory

// Stack(Primitive) CallByValue, heap(NonPrimitive) CallByReference

let myYoutubename = "IamShivanshCoder";
let anothername = myYoutubename;
anothername = "hi";
console.log(myYoutubename);
console.log(anothername);
// Value is copied to another value i.e.

let user = {
  name: "shivansh",
  upi: "a@ybl",
};
let user2 = user;
user2.name = "ff";
console.log(user);
console.log(user2);
