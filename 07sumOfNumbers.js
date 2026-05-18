function sumOfNumbers(numberAsText){
    let sum = 0;

    for(let i = 0; i < numberAsText.length; i++){
        let currentChar = numberAsText[i];
        let chaAsNumber = Number(currentChar);

        sum += chaAsNumber;
    }

    console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers('78');