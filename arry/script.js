
let arry = [1, 2, 3, 4, 5, 6];
console.log(arry[0]);

// arry methodes
// push  Adds one or more elements to the end of an array and returns the new length of the array.

console.log("Array before push operation: ", arry);
arry.push(7)
console.log("Array after push operation: ", arry);

// pop  Removes the last element from an array and returns that element.

console.log("Arry before pop:", arry);
arry.pop()
console.log("Arry after pop:", arry);

// shift()
//  Removes the first element from an array and returns that element.

console.log("Arry before shift:", arry);
arry.shift()
console.log("Arry after shift:", arry);

// unshift()
//  Adds one or more elements to the beginning of an array and returns the new length of the array.
console.log("Arry before unshift:", arry);
arry.unshift(0)
console.log("Arry after unshift:", arry);

// concat---- Merges two or more arrays and returns a new array.

console.log("Arry before concat:", arry);
let arry2 = ["joni", "rahul", "anitosh", "abhijit"]
let arr3 = ["payle", "susmit", "suborna"];
console.log("Arry after concat:", arry.concat(arry2, arr3));

// join() Joins all elements of an array into a string, with an optional separator.
console.log("Arry before join:", arry);
let arry4 = ["hello", "guys", "wellcom", "to", "our", "arry", "sries"]
console.log("Arry after join:", arry4.join(" ,"));

// slice
//  Extracts a section of an array and returns a new array.
let slicearry = ["joy", "bjoy", "akash"]
console.log("Arry before slice:", slicearry);
console.log("Arry after slice:", slicearry.slice(1));


// splice()
// Description: Adds or removes elements from an array and returns the removed elements.


// foreach
// Executes a provided function once for each element in the array.

arry.forEach((value, index) => {
    console.log(value, index);

})

let arrays = [4, 5, 6, 7, 8, 9, 11, 12, 24, 56]
// map() Creates a new array populated with the results of calling a provided function on every element in the array.
let arrays2 = arrays.map((val, index) => {
    return val * 2
})

console.log(arrays2);
// filter() Creates a new array with all elements that pass the test implemented by the provided function.

let filterArry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16];
console.log("filter before filter logic", filterArry);

let filterArry2 = filterArry.filter((val, index) => {
    return val % 2 == 0
})

console.log("filter arry after filter logic use", filterArry2);


// reduce()
// Description: Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

let arr = [1, 2, 3, 4];
let sum = arr.reduce((acc, val) => acc + val, 0); // 10


// find
// Use Case: To find the first element in an array that matches a condition.
// Why: It is efficient when you only need the first matching value.
const numbers = [1, 3, 5, 6, 8];

// Find the first number that is even
const evenNumber = numbers.find(num => num % 2 === 0);
// Logic: The callback checks if a number is even (num % 2 === 0). The first match is 6, so find() stops searching and returns it.

console.log(evenNumber)

const users = [
    { id: 0, name: 'Ankan Ghosh' },
    { id: 1, name: 'Joni Halder' },
    { id: 2, name: 'Abhijit Halder' },
    { id: 3, name: 'Jack' },
];

// Find the user with ID 2
const user = users.find(user => user.id === 2);

console.log(user);


const numbers2 = [10, 20, 30, 40];

// Find the first number greater than 25 and its index
const found = numbers2.find((num, index) => {
    console.log(`Checking index ${index} with value ${num}`);
    return num > 25;
});

console.log(found); // Output: 30


// Handle undefined Gracefully

let num2 = [10, 20, 30, 40, 50, 60]

const result = num2.find(val => val > 70)

if (result === undefined) {
    console.log("not Match");

}
else {
    console.log("this frist value is", result);
}




// find() vs. filter()
// find(): Returns only the first matching element.
// filter(): Returns all matching elements as an array.

// Real-World Example: Finding a Username
// Imagine you are searching for a username in a database.

let usersname = [
    { name: "joni halder", age: 23 },
    {
        name: "Abhijit Halder", age: 25
    },
    {
        name: "Ankan Ghosh", age: 28
    },
    {
        name: "Ankan Ghosh", age: 24
    }
]

const FindUserName = usersname.find(user => user.name.toLocaleLowerCase() === "ankan ghosh");
if (FindUserName === undefined) {
    console.log("Data Not Match This Your Emp ");

}
else {
    console.log("This is Your First Name", FindUserName);
}

// Why Use toLocaleLowerCase()?
// It ensures a case-insensitive comparison, so names like "Ankan Ghosh" or "ankan ghosh" will match.

// filter vs find logic search
// filter() returns all matching elements as an array.
// find() returns only the first matching element.
// filter() is used when you need to get all matching elements.
// find() is used when you need to get only the first matching element.

const students = [
    { id: 1, name: "John Doe", roll: 101, age: 15, class: "10th" },
    { id: 1, name: "John Doe", roll: 101, age: 25, class: "10th" },
    { id: 2, name: "Jane Smith", roll: 102, age: 14, class: "9th" },
    { id: 3, name: "Ankan Ghosh", roll: 103, age: 16, class: "10th" },
    { id: 4, name: "Alice Brown", roll: 104, age: 15, class: "10th" },
    { id: 5, name: "Bob White", roll: 105, age: 14, class: "9th" },
];

 let rollNumer= 105;

// find logic use

let studentByRoll  =students.find(stu=> stu.roll===rollNumer)
console.log("find logic use", studentByRoll );

// filter logic use
let Class= "10th"
let StudentByClass= students.filter(stu=>stu.class===Class)
console.log("filter logic use", StudentByClass);

// // When to Use find()
// To locate a unique student by ID, roll, or name.
// Best when you need just one result.
// When to Use filter()
// To get multiple students meeting certain conditions (e.g., all students in a class or age group).
// Useful for displaying lists or summaries

