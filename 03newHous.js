function newHous(flowerType,flowerCount,budget){

    let pricePerFlower;

switch (flowerType) {
    case 'Roses': pricePerFlower = 5; break;
    case 'Dahlias': pricePerFlower = 3.80; break;
    case 'Tulips': pricePerFlower = 2.80; break;
    case 'Narcissus': pricePerFlower = 3.00; break;
    case 'Gladiolus': pricePerFlower = 2.50; break;
    
}

let totalCost = pricePerFlower * flowerCount;

  if(flowerType === 'Roses' && flowerCount > 80){
    totalCost *= 0.90;
  }else if(flowerType === 'Dahlias' && flowerCount >90){
    totalCost *= 0.85;

  }else if(flowerType === 'Tulips'&& flowerCount >80){
    totalCost*= 0.85;

  }else if(flowerType === 'Narcissus'&& flowerCount <120){
    totalCost *= 1.15;

  }else if(flowerType === 'Gladiolus'&& flowerCount <80){
          totalCost *= 1.20;
  }
   if(budget>=totalCost){
    const leftoverMoney = budget - totalCost;

    console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${leftoverMoney.toFixed(2)} leva left.`);
   }else{
    const leftoverMoney = totalCost - budget;

    console.log(`Not enough money, you need ${leftoverMoney.toFixed(2)} leva more.`);
   }

}

newHous('Roses', 55, 250);