
const mySym = Symbol("key1")
const jsUser = {
    name: "vivek",
    "full name": "vivek ranjan",
    [mySym]: "mykey1",
    age: 18,
    location: "bihar",
    email: "vivek@gmail.com",
    isLoggedIn: false,
    lastLoginDate: ["monday","friday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "vivek@google.com"
// Object.freeze(jsUser)
jsUser.name = "raushan"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Js User");
}
jsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());



