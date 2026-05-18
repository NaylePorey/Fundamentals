function repainting(nilonNeeded, paintNeeded, liquidNeeded, workersHoursToBeDone){


    const nilonSum = (nilonNeeded + 2) * 1.50;
    const paintSum = (paintNeeded * 1.10) * 14.50;
    const liquidSum = liquidNeeded * 5;
    const bagsSum = 0.40;

    const materialsSum = nilonSum + paintSum + liquidSum + bagsSum;
    const workersSum = (materialsSum * 0.30) * workersHoursToBeDone;

    console.log(materialsSum + workersSum);
}

repainting(10, 11, 4, 8);
repainting(5, 10, 10, 1);

