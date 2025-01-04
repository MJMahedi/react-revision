// console.log("Closure Practice")

// Outer function & inner Function for closure

function OuterFunction(){
    let count = 0;
     return function innerFunction(){
        count++;
        console.log(`Every time count is ${count}`);
     }
     
}
const counter = OuterFunction();
counter();
counter();
counter();