const person = {
    name: "Joni",
    age: 25,
    city: "Gangarampur",
    isDeveloper: true
};

console.log(person); // Output: { name: 'Joni', age: 25, city: 'Gangarampur', isDeveloper: true }
console.log(person.name); // Output: Joni
console.log(person.age); // Output: 25
console.log(person.city); // Output: Gangarampur
console.log(person.isDeveloper); // Output: true
console.log(Object.keys(person)); //name , age , city , isDeveloper
console.log(Object.values(person));


// match obj logic 
let obj = {
    name: "joy",
    age: 25,
    city: "gangarampur",
    isDeveloper: true

}

let obj2 = {
    name: "joy",
    age: 25,
    city: "gangarampur",
    isDeveloper: true

}

console.log(obj === obj2);


let obj3 = { name: "anitosh halder", age: 20, city: "gangarampur", isDeveloper: false };
let obj4 = obj3; // Assign obj4 to reference the same object as obj3

console.log(obj3 === obj4); // true, because both point to the same memory location
console.log(" json format check ", JSON.stringify(obj3) === JSON.stringify(obj4)); // true


// const userName = prompt("Enter your name:");
// const userAge = parseInt(prompt("Enter your age:"));
// console.log(`user name ${userName} and user age is ${userAge}`);


// const usersCrate = {
//     name: userName,
//     age: userAge,

// }


// console.log(usersCrate);


// object topic 
// 3️⃣ How to add and delete properties in an object?
let stuInfo = {
    stuName: "Joni Halder",
    age: 23,
    city: "gangarampur",
}
console.log("stuInfo before chage", stuInfo);
stuInfo.gender = "male"
console.log("stuInfo add value then ", stuInfo);
// delete stuinfo age...........
delete stuInfo.age
console.log("stuInfo dej value then ", stuInfo);










// userinfo
let user = {
    name: "joni halder",
    age: 25,
    GetAgeYear: function () {
        return new Date().getFullYear() - user.age
    }

}

// create user 
const CreateUsers = (firstname, lastname, gender, age) => {
    let user = {
        firstname,
        lastname,
        gender,
        age,
        GetAgeYear: function () {
            return new Date().getFullYear() - user.age
        }


    }

    return user;
}

const user1 = CreateUsers("joni", "halder", "male", 23);
const user2 = CreateUsers("ankan", "ghosh", "male", 18);
const user3 = CreateUsers("joy", "sen", "male", 21);

// // Why Learn Constructor Functions in JavaScript?
// Constructor functions in JavaScript provide a way to create multiple objects with the same structure and behavior. Instead of manually creating objects, a constructor automates object creation, making the code efficient, reusable, and scalable.


// Why Learn Constructor Functions in JavaScript?
// Constructor functions in JavaScript provide a way to create multiple objects with the same structure and behavior. Instead of manually creating objects, a constructor automates object creation, making the code efficient, reusable, and scalable.

// 📌 Key Benefits of Using Constructor Functions
// Code Reusability – Instead of writing the same object structure multiple times, use a constructor to generate objects dynamically.
// Scalability – Useful when dealing with multiple objects (e.g., users, products, employees).
// Encapsulation – Allows grouping properties and methods inside a single function.
// Improved Readability & Maintainability – Easier to understand and modify than manually creating objects.
// Prototype Efficiency – Objects created via constructors can use prototype methods, improving memory efficiency.
// 📌 When to Use Constructor Functions?
// When creating multiple objects with similar properties (e.g., users, products, employees).
// When you need object-oriented programming (OOP) concepts in JavaScript.
// When objects need default values or methods.
// When prototypal inheritance is required.
