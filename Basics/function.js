// function addTwoNumber(num1,num2){
//     console.log(num1+num2);
    
// }

function addTwoNumber(num1,num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNumber(2,3)
// console.log("Result:",result);

function loginUserMessage(username){
    return `${username} just logged in `
}

// console.log(loginUserMessage("Vivek"));

function calculateCartPrice(val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice(100,200,300,400));

const user = {
    username: "vivek",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)

handleObject({
    username: "Raushan",
    price: 399
})


const myNewArray = [200,400,100,500]

function returnSecondValue(getarray){
    return getarray[2]
}

console.log(returnSecondValue(myNewArray));



