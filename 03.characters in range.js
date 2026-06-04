function charactersInRange(char1, char2){
    let charsInBetween = [];
    let ascii1 = char1.charCodeAt(0);
    let ascii2 = char2.charCodeAt(0);

    let start = Math.min(ascii1, ascii2);
    let end = Math.max(ascii1, ascii2);


    for (let ascii = start + 1; ascii < end; ascii++) {
        let currentChar = String.fromCharCode(ascii);
        charsInBetween.push(currentChar);
    }
    
    console.log(charsInBetween.join(' '));
}

charactersInRange('a', 'b');