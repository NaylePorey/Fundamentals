



function solve(totalNumbers){
    let printedNumbers = 0;
    let currentNumber = 1;

    let sum = 0;

    while(printedNumbers < totalNumbers) {
console.log(currentNumber);

currentNumber += 2;
printedNumbers++;
sum += currentNumber;

    }
    console.log(`Sum: ${sum}`);
}

solve(5);