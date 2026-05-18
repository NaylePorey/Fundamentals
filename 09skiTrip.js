function skiTrip(days, type, feedback) {
    
    days = Number(days);
    let nights = days - 1;
    let price = 0;

    if (type === 'room for one person') {
        price = nights * 18.00;
    } else if (type === 'apartment') {
        price = nights * 25.00;
        if (days < 10) {
            price *= 0.70;
        } else if (days <= 15) {
            price *= 0.65;
        } else {
            price *= 0.50;
        }
    } else if (type === 'president apartment') {
        price = nights * 35.00;
        if (days < 10) {
            price *= 0.90;
        } else if (days <= 15) {
            price *= 0.85;
        } else {
            price *= 0.80;
        }
    }

    if (feedback === 'positive') {
        price *= 1.25;
    } else if (feedback === 'negative') {
        price *= 0.90;
    }

    console.log(price.toFixed(2));
}