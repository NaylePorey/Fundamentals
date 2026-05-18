function fishingBoat(budget, season,fishermen){
    let boatPrice = 0;

      switch (season) {
        case 'Spring': boatPrice = 3000; break;
        case 'Summer':
        case 'Autumn': boatPrice = 4200; break;
        case 'Winter': boatPrice = 2600; break;
    }

    if (fishermen <= 6) {
        boatPrice *= 0.90; 
    } else if (fishermen <= 11) {
        boatPrice *= 0.85; 
    } else {
        boatPrice *= 0.75; 
    }

    if (fishermen % 2 === 0 && season !== 'Autumn') {
        boatPrice *= 0.95; 

}
 if (budget >= boatPrice) {
        const left = budget - boatPrice;
        console.log(`Yes! You have ${left.toFixed(2)} leva left.`);
    } else {
        const needed = boatPrice - budget;
        console.log(`Not enough money! You need ${needed.toFixed(2)} leva.`);
    }
}

fishingBoat(3000, 'Summer', 11);