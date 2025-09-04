const name = "vivek"
const repoCount = 50

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);


const  gameName = new String('vivek')

console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('k'));


const newString = gameName.substring(0,3)

console.log(newString);

const anotherString = gameName.slice(1,4)
console.log(anotherString);

const newStringOne = "    vivek    "
console.log(newStringOne.trim());

const url = "https://vivek.com/vivek%20ranjan"

console.log(url.replace('%20','-'));




