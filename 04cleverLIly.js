function cleverLily(currentLilyAge, washerPrice, toyPrice){
    let moneyFromEvenBirthdays = 0;
    let gifMoney = 10;
    let takenByBrother = 0;
    let toyCount = 0;
    for(let age = 1; age <= currentLilyAge; age++){
        if(age % 2 === 0){
            moneyFromEvenBirthdays += gifMoney;
            gifMoney += 10;
            takenByBrother += 1;
        }else toyCount++;
    }

    const toysSum = toyCount * toyPrice;
    moneyFromEvenBirthdays -= takenByBrother;

    const totalMoney = moneyFromEvenBirthdays + toysSum;

    const diffrence = Math.abs(totalMoney - washerPrice);

    if(totalMoney >= washerPrice){
console.log(`Yes! ${diffrence.toFixed(2)}`);

    }else {
        console.log(`No! ${diffrence.toFixed(2)}`);
    }
}


cleverLily(21, 1570.98, 3);