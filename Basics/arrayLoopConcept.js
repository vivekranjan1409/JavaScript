

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}


const greetings = "Hello World"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}


// Map

const map = new Map()

map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

// console.log(map);

for (const [key,value] of map) {
    // console.log(key,":-",value);
}

// const myObject = {
//     'game1' : 'NFS',
//     'game2' : 'spiderman'
// }


// for (const [key,value] of myObject) {
//     console(key,":-",value);
// }


const myObject = {
    js : 'javascripts',
    cpp : 'c++',
    rb : 'ruby',
    swift : "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}


const myArr = ["js","cpp","java","py","c"]

for (const key in myArr) {
    console.log(myArr[key]);
}





