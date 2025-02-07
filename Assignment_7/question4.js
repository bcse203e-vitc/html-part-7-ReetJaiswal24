function isPalindrome(str) {
    var cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    var reversedStr = cleanedStr.split('').reverse().join('');
    if (cleanedStr === reversedStr) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("Racecar")); // true
console.log(isPalindrome("Hello, World!")); // false
