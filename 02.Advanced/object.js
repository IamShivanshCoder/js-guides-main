const mysym = Symbol("key1");

const ob1 = {
    name: "hitesh",
    age: 18,
    email: "shiv@shiv.com",
    lastLogIn: "time",
    f: "sss",
    mysy: mysym,
    [mysym]: "Sy",
};

ob1.greeting = () => {
    console.log("ddd", ob1.name);
};

console.log(ob1.greeting());
