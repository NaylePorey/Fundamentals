function palindromeInteders(arr){
    for (let num of arr) {
        let isPalindrome = checkIsPalindrome(num);
        console.log(isPalindrome);
    }

    function checkIsPalindrome(num) {
        let numAsStr = String(num);
       
        let reversedNumAsStr = numAsStr.split('').reverse().join(''); 

        return numAsStr === reversedNumAsStr;
    }
}

palindromeInteders(123,2, 232, 1010);