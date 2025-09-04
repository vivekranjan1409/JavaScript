// const score = 200

// if(score > 100){
//     const  power = "fly"
//     console.log(`User power: ${power}`);
    
// }

// console.log(`User power: ${score}`);
// const balance = 1000;

// if(balance < 500){
//     console.log("Less than");
// }
// else if(balance < 750){
//     console.log("Less than 750");
// }
// else if(balance < 900){
//     console.log("Less than 900");
    
// }
// else{
//     console.log("less than 1200");
    
// }


// const userLoggedIn = true
// const debitCard = true

// if(userLoggedIn && debitCard){
//     console.log("Allow to buy courses");
    
// }

// const month = 3

// switch(month){
//     case 1: 
//         console.log("January");
//         break;
    
//     case 2:
//         console.log("February");
//         break;

//     case 3:
//         console.log("March");
//         break;
    
//     case 4:
//         console.log("April");
//         break;

//     case 5:
//         console.log("May");
//         break;

//     default:
//         console.log("Wrong case");
//         break;
// }


// const userEmail = "h@gmail.com"

// if(userEmail){
//     console.log("Got user email");
// }
// else{
//     console.log("Don't have user email");
// }


/* Falsy Value
 false , 0, -0 , BigInt 0n , "",null , undefined , NaN 


 truthy value
 "0" , 'false', " " , [] , {} , function(){}
*/

// const userEmail = []

// if(userEmail.length === 0){
//     console.log("Array is empty");
    
// }

// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
    
// }

// Nullish coalescing operator (??): null undefined

let val1;

// val1 = 5 ?? 10   == 5
// val1 = null ?? 5   == 5
// val1 = undefined ?? 4  ==4 
// val1 = null ?? 10 ?? 15    == 10

// console.log(val1);



// Terniary operator : condition ? true : false

const price = 20

price <= 15 ? console.log("less than 15") : console.log("more than 15")
