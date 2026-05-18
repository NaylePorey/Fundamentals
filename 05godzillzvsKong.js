function godzillaVSKong(budget, actorsCount, clothingPricePerActor){
  const decor = budget * 0.10;
  let totalClothingPrice = actorsCount * clothingPricePerActor;

  if(actorsCount > 150) totalClothingPrice *= 0.90;
   
    const totalCost = totalClothingPrice + decor;

    if (totalCost > budget){
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalCost - budget).toFixed(2)} leva more.`);
    }else{
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - totalCost).toFixed(2)} leva left.`)
    }
}


godzillaVSKong(9587.88,222, 55.68);
