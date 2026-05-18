function suppliesForSchool(pensNeeded, markerNeeded, liquidNeeded, discountPercentage){




    const pensSum = pensNeeded * 5.80;
    const markersSum = markerNeeded * 7.20;
    const liquidSum = liquidNeeded * 1.20;

    let materialsSum = pensSum + markersSum + liquidSum;
    materialsSum -= materialsSum * (discountPercentage / 100);

    console.log(materialsSum);
}

suppliesForSchool(2, 3, 4, 25);
suppliesForSchool(4, 2, 5, 13);