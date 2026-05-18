function shopping(budget, videoCardsCount, processorsCount, ramCount) {
   
    const videoCardsTotal = videoCardsCount * 250;
   
    const processorPrice = videoCardsTotal * 0.35;
    const ramPrice = videoCardsTotal * 0.10;
   
    let totalSum = videoCardsTotal + (processorsCount * processorPrice) + (ramCount * ramPrice);
    
    if (videoCardsCount > processorsCount) {
        totalSum = totalSum * 0.85; 
    }
    
    if (budget >= totalSum) {
        const timeLeft = budget - totalSum;
        console.log(`You have ${timeLeft.toFixed(2)} leva left!`);
    } else {
        const moneyNeeded = totalSum - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`);
    }
}

shopping(900,2,1,3);
