function tennisRanklist(input) {
    let index = 0;
    const countTournaments = Number(input[index++]);
    const startingPoints = Number(input[index++]);

    let pointsFromTournaments = 0;
    let winsCount = 0;

    for (let i = 0; i < countTournaments; i++) {
        const stage = input[index++];

        if (stage === "W") {
            pointsFromTournaments += 2000;
            winsCount++;
        } else if (stage === "F") {
            pointsFromTournaments += 1200;
        } else if (stage === "SF") {
            pointsFromTournaments += 720;
        }
    }

    const finalPoints = startingPoints + pointsFromTournaments;
    const averagePoints = Math.floor(pointsFromTournaments / countTournaments);
    const winPercentage = (winsCount / countTournaments) * 100;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${averagePoints}`);
    console.log(`${winPercentage.toFixed(2)}%`);
}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);


