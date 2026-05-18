function trekkingMania(input){

    const groups = Number(input[0]);
    let totalPeople = 0;

    let musala = 0;
    let monblan = 0;
    let kiliminjaro = 0; 
    let k2 = 0;
    let everest = 0;

    for(let index = 1; index <= groups; index++){
        const peopleFromGroup = Number(input[index]);
        totalPeople += peopleFromGroup;

        if(peopleFromGroup <=5) musala += peopleFromGroup;
        else if(peopleFromGroup <=12) monblan += peopleFromGroup;
        else if(peopleFromGroup <=25) kiliminjaro += peopleFromGroup;
        else if(peopleFromGroup <= 40) k2 += peopleFromGroup;
        else everest += peopleFromGroup;
    }

  
 const musalaPercentage = (musala / totalPeople) * 100;
   console.log(`${musalaPercentage.toFixed(2)}%`);

   const monblanPercentage = (monblan / totalPeople) * 100;
   console.log(`${monblanPercentage.toFixed(2)}%`); // Коригирано

   const kiliminjaroaPercentage = (kiliminjaro / totalPeople) * 100;
   console.log(`${kiliminjaroaPercentage.toFixed(2)}%`); // Коригирано

   const k2Percentage = (k2 / totalPeople) * 100;
   console.log(`${k2Percentage.toFixed(2)}%`); // Коригирано

   const everestPercentage = (everest / totalPeople) * 100;
   console.log(`${everestPercentage.toFixed(2)}%`); // Коригирано
}


trekkingMania(['10', '10', '5', '1', '100', '12', '26', '17', '37', '40', '78']);