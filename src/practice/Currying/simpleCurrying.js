console.log('Currying');

//2 number added for currying

function againadd(a){
    return function(b){
        return a+b;
    }
}
const addall = againadd(5);
console.log(addall(3));



//triple number added for currying
function add(a) {
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

console.log(add(5)(6)(7));



