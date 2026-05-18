function numberDivisibleByNine(startNum, endNum) {
    let sum = 0;
    let numbers = ""; 

    for (let n = startNum; n <= endNum; n++) {
        if (n % 9 === 0) {
            sum += n;
            numbers += n + "\n"; 
        }
    }

    console.log(`The sum: ${sum}`);
    console.log(numbers); 
}

numberDivisibleByNine(100, 200);