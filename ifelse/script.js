

// if else-if statement 

let markes = prompt("Plz Enter Your Markes");

if (markes <= 90) {
    console.log("AA Grade");

} else if (markes <= 80 || markes >= 60) {
    console.log("B Grade");

}

// questions
// Quest time :====> ( Using conditionals )

// 1. Given an integer input, The objective is to write a code to Check if a Number is Positive or Negative.

//    For Instance,
//    Input : num = 20
//    Output : The number is Positive.

let num = 20;
if (num > 0) {
    console.log("The number is Positive.");
} else if (num < 0) {
    console.log("The number is Negative.");
} else {
    console.log("The number is Zero.");
}



// 2. Given an integer input num, the objective is to write a code to Check Whether a Number is Even or Odd. To do so we check if the number is divisible by 2 or not, it’s Even if it’s divisible otherwise Odd.

//    Example
//    Input : num = 3
//    Output : Odd

let num2 = 3;
if (num2 % 2 === 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}

// 3. Given two integer inputs as number1 and number2, the objective is to find the largest among the two.
let number1 = 20;
let number2 = 40;
if (number1 > number2) {
    console.log(number1 + " is greater than " + number2);
}
else {
    console.log(number2 + " is greater than " + number1);
}
//    Example
//    Input : 20 40
//    Output : 40

// 4. Given three integer inputs the objective is to find the largest among them.

//    Example
//    Input : 20 30 10
//    Output : 30


let num1 = 20;
let Num2 = 30;
let num3 = 10;

if (num1 > Num2 && num1 > num3) {
    console.log("num1 is greater than num2 and num3");
}
else if (Num2 > num1 && Num2 > num3) {
    console.log("Num2 is greater than num1 and num3");
}
else {
    console.log("num3 is less than num1 and num2");
}

// 5. Given an integer input year, the objective of the code is to Check if a Year is a Leap Year or Not. To do so we’ll check if the year input satisfies either of the two conditions of leap year.

//    Conditions for a Leap Year
//    Here are the two conditions that any year must satisfy to be called a leap year
//    a. The year must be perfectly divisible by 400.
//    b. The number must be divisible by 4 but not by 100.

//    Example
//    Input : 2020
//    Output : It's a Leap Year.

let year = 2020;

if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log("It's a Leap Year.");

}
else {
    console.log("It's not a Leap Year.");
}

// 6. Check if a user-provided password matches a hardcoded password and print "Access granted" or "Access denied."

//    // Input: 'password123'
//    // Output: "Access granted"

let password = "password123";
let userPassword = "password123";
if (password === userPassword) {
    console.log("Access granted");
}
else {
    console.log("Access denied");
}

// 7. Check if a number is divisible by both 3 and 5.

//    // Input: 15
//    // Output: "Divisible"

let number = 15;
if (number % 3 === 0 && number % 5 === 0) {
    console.log("Divisible");
}
else {
    console.log("Not Divisible");
}

// 8. Check if a character is a vowel or consonant.

//    // Input: 'a'
//    // Output: "Vowel"

let character = 'a';
if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
    console.log("Vowel");
}
else {
    console.log("Consonant");
}
// 9. Use a condition to group ages into categories like "Child" (0-12), "Teenager" (13-19), "Adult" (20-59), and "Senior" (60+).

//    // Input: 25
//    // Output: "Adult"
let age = 25;
if (age <= 12) {
    console.log("Child");
}
else if (age >= 13 && age <= 19) {
    console.log("Teenager");
}

else if (age >= 20 && age <= 59) {
    console.log("Adult");
}

// 10. Determine the grade based on marks.

//     Marks:
//     = 90: "A"

//     = 75: "B"

//     = 50: "C"

//     < 50: "F"

//     // Input: 85
//     // Output: "B"

let marks = 85;
if (marks >= 90) {
    console.log("A");
}

else if (marks >= 75) {
    console.log("B");
}
else if (marks >= 50) {
    console.log("C");
}
else {
    console.log("F");
}


// 11. Classify temperature into categories:

//     < 0: "Freezing"
//     0-15: "Cold"
//     16-30: "Moderate"
//     30: "Hot"

//     // Input: 18
//     // Output: "Moderate"

// 12. Determine if a number is a single-digit number.

//     // Input: 5
//     // Output: "Single-digit"

let myNumber = 52;
if(myNumber >=0 && myNumber <=9){
    console.log("Single-digit");
}
else{
    console.log("Not a single-digit number");
}
// 13. Check if a number is between 1 and 100.
//     // Input: 150
//     // Output: "Out of range"

let myNum = 150;
if (myNum >= 1 && myNum <= 100) {
    console.log("In range");
}
else {
    console.log("Out of range");
}



// 14. Check if two numbers are equal.
//  // Input: 5, 5....
//  // Output: "Equal"


let Num = 5;
let Num1 = 5;
if (Num === Num1) {
    console.log("Equal");
}
else {
    console.log("Not Equal");
}


