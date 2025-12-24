console.log(1 > 2);
console.log(1 == 2); //false

console.log("2" > "1");
console.log("02" < "1"); //Unpredictable output of js<true>

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

/*The reason that comparsion equal to <= and <,= work differently
comparsion equal to checks converts null to zero resulting in this output

*/

console.log(undefined == 0); //always false no issue here ;)

// ===
// Strict Check

console.log("2" == 2); //will convert
console.log("2" === 2); //error diff. data types
