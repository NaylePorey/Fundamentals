function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice){
let expenses = 0;
let shieldBreakCount = 0;

for (let currentFight = 1; currentFight <= lostFights; currentFight++){
    if (currentFight % 2 === 0){
         expenses += helmetPrice;
    }
    if (currentFight % 3 === 0){
        expenses += swordPrice;
    }
    if (currentFight % 2 === 0 && currentFight % 3 === 0){
        expenses += shieldPrice;
        shieldBreakCount++;
    }
    if (shieldBreakCount % 2 === 0 && shieldBreakCount !== 0) {
        expenses += armorPrice;
        shieldBreakCount = 0;
    }
}

console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);

}

gladiatorExpenses(7, 2, 3);