let a = 100
if(true){
    let a = 200
    // console.log("inner:",a);
    
}

// console.log(a);



function one(){
    const username = "vivek"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    
    two()
}
// one()

if(true){
    const username= "vivek"
    if(username === "vivek"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);
