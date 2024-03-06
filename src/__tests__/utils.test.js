import {isPalindrome} from "../utils";

describe("isPalindrome", () => {
    it("returns true if string is a palindrome, false if it isn't", () => {
        const word = "racecar";
        const check = isPalindrome(word);
        expect(check).toBe(true);
    });

    it("returns true if string is a palindrome, false if it isn't", () => {
        const word = "car";
        const check = isPalindrome(word);
        expect(check).toBe(false);
    });

    it("returns true if string is a palindrome, false if it isn't", () => {
        const word = "cAr";
        const check = isPalindrome(word);
        expect(check).toBe(false);
    });

    it("returns true if string is a palindrome, false if it isn't", () => {
        const word = "raCEcar";
        const check = isPalindrome(word);
        expect(check).toBe(true);
    });

    it("returns false for an empty string", () => {
        const word = "";
        const check = isPalindrome(word);
        expect(check).toBe(false);
    });

    it("throw an error if input has non-alphabetic characters", ()=> {
        const word = "rac3car"
        expect(() => {
            isPalindrome(word);
        }).toThrow("String cannot contain non-alphabetic characters!")
    });

    it("throw an error if input is not a string", () => {
        const word = 10;
        expect(() => {
            isPalindrome(word)
        }).toThrow("This is not a string!")
    });
});