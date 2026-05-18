function basketballEquipment(yearlyPriceTrainings){


     const sneakersPrice = yearlyPriceTrainings * 0.60;
    const outfitPrice = sneakersPrice * 0.80;
    const ballPrice = outfitPrice * 0.25;
    const accessoriesPrice = ballPrice *0.20;

    const totalCost = yearlyPriceTrainings + sneakersPrice + outfitPrice
    + ballPrice + accessoriesPrice;

    console.log(totalCost);
}

basketballEquipment(365);
basketballEquipment(550);