const name = "hitesh";
const repoCount = 50;

console.log(`My name is ${name}`); //newer way to concatenate

const gameName = new String("hieshc-i-o"); //ths way helps to use underlying string functions

console.log(gameName.length);
const gm = new String(gameName.slice(0, 2));
console.log(gm);

console.log(gameName.split("-"));

