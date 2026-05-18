function journey(budget, season){
    let destination;
    let place;
    let spent;

if(budget <= 100){
    destination = 'Bulgaria';

    if(season === 'summer'){
        place= 'Camp';
        spent = budget * 0.30;

    }else if(season === 'winter'){
        place = 'Hotel';
        spent = budget * 0.70;
    }
}else if(budget <=1000){
    destination = 'Balkans';
    if(season === 'summer'){
        place = 'Camp';
        spent = budget * 0.40;
    } else if(season === 'winter'){
        place = 'Hotel';
        spent = budget * 0.80;
    }
}else if(budget > 1000){
    destination = 'Europe';
    place = 'Hotel';
    spent = budget * 0.90;
}

console.log(`Somewhere in ${destination}`);
console.log(`${place} - ${spent.toFixed(2)}`);

}

journey(75, 'winter');