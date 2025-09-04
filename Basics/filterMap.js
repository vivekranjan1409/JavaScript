// const myNumbers = [1,2,3,4,5,6,7,8,9,10]


// const newNumbers = myNumbers.map( (num) => num + 10)
// console.log(newNumbers);

// const newNumbers = myNumbers.forEach( (item) => { 
    // console.log(item + 10)
   
// })


// const newNumbers = myNumbers
//                             .map( (num) => num * 10)
//                             .map( (num) => num + 1)
//                             .filter( (num) => num >= 40)
// console.log(newNumbers)



// reduce method


const myNums = [1,2,3,4,5]

// const myTotal = myNums.reduce( function (acc,currval) {
//    console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0)

const myTotal = myNums.reduce( (acc,currval) => acc + currval , 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: 'javascripts course',
        price: 2999
    },  
    {
        itemName: 'python course',
        price: 4999
    },  
    {
        itemName: 'java course',
        price: 5999
    },  
    {
        itemName: 'mobile dev course',
        price: 9999
    },  
];

const total = shoppingCart.reduce( (acc , item) => acc + item.price , 0)

console.log(total)