function multiplicationTable(numberFromInput){
    for(let number =1; number <=10; number++){
        const result = number * numberFromInput;

        console.log(`${number} * ${numberFromInput} = ${result}`);
    }
}


multiplicationTable(2);