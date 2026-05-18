function equalSumsEvenOddPosition(input) {
    let startNum = Number(input[0]); 
    let endNum = Number(input[1]);  
    let result = "";

    for (let i = startNum; i <= endNum; i++) {
        let currentNum = String(i);
        let evenSum = 0;
        let oddSum = 0;

        for (let j = 0; j < currentNum.length; j++) {
            let digit = Number(currentNum[j]);
            
        
            if (j % 2 === 0) {
                oddSum += digit;
            } else {
                evenSum += digit;
            }
        }

        if (evenSum === oddSum) {
            result += i + " ";
        }
    }

    if (result.length > 0) {
        console.log(result.trim());
    }
}