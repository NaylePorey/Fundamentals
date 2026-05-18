function examPreparation(input) {
    const maxPoorGrades = Number(input[0]);
    let index = 1;
    let poorGrades = 0;
    let sumGrades = 0;
    let totalProblems = 0;
    let lastProblem = '';

    while (input[index] !== 'Enough') {
        let problemName = input[index++];
        let grade = Number(input[index++]);

        if (grade <= 4) {
            poorGrades++;
        }

        if (poorGrades === maxPoorGrades) {
            console.log(`You need a break, ${poorGrades} poor grades.`);
            return;
        }

        sumGrades += grade;
        totalProblems++;
        lastProblem = problemName;
    }

    const averageScore = sumGrades / totalProblems;
    console.log(`Average score: ${averageScore.toFixed(2)}`);
    console.log(`Number of problems: ${totalProblems}`);
    console.log(`Last problem: ${lastProblem}`);
}