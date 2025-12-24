const accountId = 1223344 //Camelcase const->unchangeable

let accountEmail = "a@gmail.com"//No Scope Problem
var accountPassword = "a1234"//Scope Problem
accountCity = "Delhi" //Non Prefered way
let accountState; //Value is undefined

/* 
Prefer not to use var because of issue in block scope and functional scope
*/

accountEmail="hh@hh.com"

console.log(typeof(accountCity))
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])