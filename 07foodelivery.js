function order(chickenCount, fishCount,vegCount){

    const chickenPrice = 10.35;
    const fishPrice = 12.40;
    const vegPrice =8.15;

    let totalMenusPrice = (chickenCount * chickenPrice) + (fishCount* fishPrice) 
    + (vegCount * vegPrice);


    let dessertPrice = totalMenusPrice * 0.20;
    let deliveryFee = 2.50;
    let finalSum = totalMenusPrice + dessertPrice + deliveryFee;

    console.log(`${finalSum .toFixed(2)} lv`);
}
order(2, 4, 3);
order(9, 2, 6);
