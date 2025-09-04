 const myArr = [0,1,2,3,4,5]
//  console.log(myArr);
 
 const myArr2 = new Array("vivek","ramdeep","raushan")
//  console.log(myArr2);
//  console.log(myArr2[1]);

//  Arrays Methods

// myArr.push(6)

// myArr.push(7,8)
// myArr.pop()

// myArr.unshift(9) // 9 add at index 0
// myArr.shift()   //remove the value from index 0

// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof myArr);
// console.log(newArr);
// console.log(typeof newArr);


// console.log("A ", myArr);

// const myn1 = myArr.slice(1,3)

// console.log(myn1);

// console.log("B ", myArr);
// const myn2 = myArr.splice(1,3)

// console.log(myn2);
// console.log("C ", myArr);

const marvel_heroes = ["ironman","spiderman","thor"]
const dc_heroes = ["superman","batman","flash"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);

const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes);

console.log(...marvel_heroes,...dc_heroes);


const anotherArr = [1,2,3,[4,5,6],8,[9,10,[11,12]]]
const realAnotherArr = anotherArr.flat(11)
console.log(realAnotherArr);




console.log(Array.isArray("Vivek"));
console.log(Array.from("Vivek"));
console.log(Array.from({name: "vivek"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));



















 

