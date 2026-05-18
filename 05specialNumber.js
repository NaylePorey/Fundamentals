function specialNumbers(input) {
    let n = Number(input);
    let buff = "";

    for (let i = 1111; i <= 9999; i++) {
        let numAsString = String(i);

        let a = Number(numAsString[0]);
        let b = Number(numAsString[1]);
        let c = Number(numAsString[2]);
        let d = Number(numAsString[3]);

        
        if (a !== 0 && b !== 0 && c !== 0 && d !== 0) {
            if (n % a === 0 && n % b === 0 && n % c === 0 && n % d === 0) {
                buff += `${i} `; 
            }
        }
    }

    console.log(buff.trim());
}

specialNumbers(16);





