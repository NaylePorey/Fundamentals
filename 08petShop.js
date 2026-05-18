function petShop(dogFoodCount, catFoodCount){
let catFoodPrice = 4;
let dogFoodPrice = 2.50;

let dogTotalPrice = dogFoodCount * dogFoodPrice;
let catTotalPrice = catFoodCount * catFoodPrice;

let totalPrice = dogTotalPrice + catTotalPrice;
//let totalPrice = (dogFoodCoount + dogFoodPrice) + (catFoodCount * catFoodPrice);

console.log(` ${totalPrice} lv.`);

}

petShop(5, 4);
petShop(13, 9);