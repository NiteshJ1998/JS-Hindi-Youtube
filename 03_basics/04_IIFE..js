// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    // simple iife or unnamed iife remove arrow function for unnmaed
    
    console.log(`DB CONNECTED TWO ${name}`);
} )('nitesh')