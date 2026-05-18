function operationsBetweenNumbers(n1, n2, operator) {
    let result;

    if ((operator === '/' || operator === '%') && n2 === 0) {
        console.log(`Cannot divide ${n1} by zero`);
        return; 
    }

    switch (operator) {
        case '+':
        case '-':
        case '*':
            if (operator === '+') result = n1 + n2;
            else if (operator === '-') result = n1 - n2;
            else result = n1 * n2;

            let type = result % 2 === 0 ? 'even' : 'odd';
            console.log(`${n1} ${operator} ${n2} = ${result} - ${type}`);
            break;

        case '/':
            result = n1 / n2;
            console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
            break;

        case '%':
            result = n1 % n2;
            console.log(`${n1} % ${n2} = ${result}`);
            break;
    }
}