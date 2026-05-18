function cinema(typeTicket,rows, cols){

let pricePerTicket = 0;

    if (typeTicket === 'Premiere'){
        pricePerTicket = 12;

    } else if(typeTicket === 'Normal'){
        pricePerTicket = 7.5;

    } else if( typeTicket === 'Discount'){
        pricePerTicket = 5;
    }

    const income = pricePerTicket * (rows * cols);
    console.log(`${income.toFixed(2)} leva`);
}

cinema('Discount', 12, 30);