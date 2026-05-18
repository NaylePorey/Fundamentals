function bitcoinMining(arr){
    let bitcoinCount = 0;
    let firstBitcoinDay = 0;
    let money = 0;

    let currentDay = 1;

    for (let gold of arr) {
        if(currentDay % 3 === 0){
            gold *= 0.7;
        }
        money += gold * 67.51;

        // Купува всички възможни биткойни за деня
        while(money >= 11949.16){
            if(bitcoinCount === 0){
                firstBitcoinDay = currentDay;
            }
            money -= 11949.16;
            bitcoinCount++;
        }

        currentDay++;
    }
     console.log(`Bought bitcoins: ${bitcoinCount}`);
     
     if(bitcoinCount > 0){
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
     }
     console.log(`Left money: ${money.toFixed(2)} lv.`);
}
