function graduation(input) { 
    let index = 0;
    let studentName = input[index];
    let expelsCount = 0;
    let passedYears = 0;
    let gradesSum = 0;

   
    while (passedYears < 12 && index < input.length - 1) {
        index++;
        let grade = Number(input[index]);

        if (grade < 4) {
            expelsCount++;
            if (expelsCount >= 2) break; 
            continue;
        }

        gradesSum += grade;
        passedYears++;
    }

    if (passedYears === 12) {
        let averageGrade = gradesSum / 12;
        console.log(`${studentName} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    } else {
        console.log(`${studentName} has been excluded at ${passedYears + 1} grade`);
    }
}