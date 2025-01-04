console.log("discount with Currying");

function applyDiscount(price){
    return function(discount){
        return price - (price*discount /100);
    }
}
console.log(`Discounted price ${applyDiscount(1000)(10)} `); //900 