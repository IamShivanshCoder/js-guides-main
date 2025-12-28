//const tinderUser = new Object()

const tinderUser = {};
tinderUser.id = "e";
tinderUser.name = "sam";
tinderUser.isloggedin = false;

console.log(tinderUser);

// const regUser = {
//     email: "some@gmail.com",
//     fulName: {
//         userfullname: {
//             firstname: "shivansh",
//             lastname: "bansal",
//         },
//     },
// };

obj1 = { 1: "A", 2: "B", 3: "c" };
obj2 = { 4: "f" };

const obj3 = { ...obj1, ...obj2 }; //Preferred method



const users = [
    {
        id:1,
        email:"s@gmail.cpm"
    },
    {
        id:2,
        email:"a@gmail.com"
    }
]

console.log(
    Object.keys(...users)
);

console.log(users[0].hasOwnProperty('isLogg')) //find prop



const course = {
    name:"js",
    price:"999",
    desc:"best course"
}

const {name: n} = course //Destructuring
let {price: p }= course //Destructuring

const j = JSON.parse({
    name:"j",
    coursename :'price'
})
console.log(j);
