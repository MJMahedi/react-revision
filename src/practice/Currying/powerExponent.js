//Power With Exponent
console.log("Power With Exponent")
function power(base){
    return function(exponent){
        return Math.pow(base, exponent)
    }
}
console.log(power(4)(3)); //64 answer