//const palindromes = function () {
    function palindromes(str) {
        let j = str.length - 1
        for (let i = 0; i < str.length / 2; i++) {
            if (str[i] != str[j]) {
                return false;
            }
            j--;
        }
        return true;
    }

    let str1 = "racecar";
    let str2 = "nitin";
    let str3 = "r3ace3car";

    console.log(palindromes(str1));
    console.log(palindromes(str2));
    console.log(palindromes(str3));

// Do not edit below this line
module.exports = palindromes;
