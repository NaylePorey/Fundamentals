function landscaping(input) {
    
    let sqm = input;
    
    let initialPrice = sqm * 7.61;
    
    let discount = initialPrice * 0.18;
    
    let finalPrice = initialPrice - discount;

    console.log(`The final price is: ${finalPrice.toFixed(2)} lv.`);
    console.log(`The discount is: ${discount.toFixed(2)} lv.`);
}

landscaping([55,150]);