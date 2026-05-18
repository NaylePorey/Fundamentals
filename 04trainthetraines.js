function trainTheTrainers(input) {
    let index = 0;
    let juryCount = Number(input[index++]);
    let totalAvgSum = 0; // Сума от средните оценки на всяка презентация
    let presentationCount = 0; // Брой на всички презентации

    let command = input[index++];

    while (command !== "Finish") {
        let presentationName = command;
        let currentPresentationSum = 0;
        presentationCount++;

        // Втори цикъл за оценките от n-членове на журито
        for (let i = 0; i < juryCount; i++) {
            let score = Number(input[index++]);
            currentPresentationSum += score;
        }

        let avgForCurrent = currentPresentationSum / juryCount;
        totalAvgSum += avgForCurrent;

        console.log(`${presentationName} - ${avgForCurrent.toFixed(2)}.`);

        command = input[index++];
    }

    let finalAssessment = totalAvgSum / presentationCount;
    console.log(`Student's final assessment is ${finalAssessment.toFixed(2)}.`);
}

trainTheTrainers((["2",

"While-Loop",

"6.00",

"5.50",

"For-Loop",

"5.84",

"5.66",

"Finish"]))