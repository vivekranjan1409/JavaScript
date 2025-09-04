// immediately invoked function expressions (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();

( () => {
    console.log(`DB CONNECTED TWO`);
    
})()