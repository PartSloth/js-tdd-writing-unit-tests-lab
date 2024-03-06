export function isPalindrome(word) {
    if (typeof word !== "string") {
        throw ("This is not a string!")
    }
    const reverse = word.split("").reverse().join("");
    if (word === "") {
        return false;
    } 
    if (!/^[A-Za-z]+$/.test(word)) {
        throw "String cannot contain non-alphabetic characters!";
    }

    return word.toLowerCase() === reverse.toLowerCase();
};