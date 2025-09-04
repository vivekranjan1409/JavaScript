const user = {
    username: "vivek",
    price: 199,
    
    welcomemessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()
// console.log(this);


// function one(){
//     let username = "raushan"
//     console.log(this.username);
    
// }

// one()

// const chai = function(){
//     let username = "raushan"
//     console.log(this.username);
    
// }


const chai = () => {
    let username = "vivek"
    console.log(this.username);
    
}

// chai()

// const addtwo = (num1,num2) =>{
//     return num1 + num2
// }
// const addtwo = (num1,num2) =>  num1 + num2

// const addtwo = (num1,num2) =>  ( num1 + num2 )
const addtwo = (num1,num2) =>  ({username: "vivek"})


console.log(addtwo(3,4));

