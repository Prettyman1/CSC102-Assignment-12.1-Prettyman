// Created by Tyler Prettyman
// Assingment 12.1

// Class to encapsulate palindrome checking logic
class PalindromeChecker {
    constructor() {
        this.userInput = document.getElementById('userInput'); // Get the input element with id 'userInput'
        this.result = document.getElementById('result'); // Get the result element with id 'result'
    }

    // Main function to check if the input is a palindrome
    check() {
        const formattedInput = this.formatInput(this.userInput.value); // Format the user input
        if (this.isPalindrome(formattedInput)) { // Check if the formatted input is a palindrome
            this.result.innerText = `"${this.userInput.value}" is a palindrome!`; // Display the result as a palindrome
        } else {
            this.result.innerText = `"${this.userInput.value}" is not a palindrome.`; // Display the result as not a palindrome
        }
    }

    // Helper function to format user input
    formatInput(input) {
        return input.replace(/\s+/g, '').toLowerCase(); // Remove whitespace and convert to lowercase
    }

    // Function to determine if a string is a palindrome
    isPalindrome(str) {
        for (let i = 0, j = str.length - 1; i < j; i++, j--) { // Iterate through the string from both ends
            if (str[i] !== str[j]) return false; // If characters at corresponding positions are not equal, it's not a palindrome
        }
        return true; // If all characters match, it's a palindrome
    }
}

// Creating an instance of PalindromeChecker
const palindromeChecker = new PalindromeChecker(); // Create an instance of the PalindromeChecker class
