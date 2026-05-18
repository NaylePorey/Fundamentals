function toyShop(tripPrice, puzzles, dolls, bears, minions, trucks) {
   
    let totalPrice = (puzzles * 2.60) + (dolls * 3.00) + (bears * 4.10) + (minions * 8.20) + (trucks * 2.00);
    
    const totalCount = puzzles + dolls + bears + minions + trucks;

    if (totalCount >= 50) {
        totalPrice = totalPrice * 0.75;
    }
    
    const finalProfit = totalPrice * 0.90;
    
    if (finalProfit >= tripPrice) {
        const moneyLeft = finalProfit - tripPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        const moneyNeeded = tripPrice - finalProfit;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }
}


toyShop(40.8,20,25,30,50,10);