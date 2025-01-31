// 1️⃣ What is a Copy in JavaScript?
// When we copy an object or an array in JavaScript, we expect to create a new variable that holds a separate, independent version of the original data. However, copying can be tricky, as JavaScript variables hold references to objects instead of directly storing them.

// There are two types of copies:

// Shallow Copy (🚀 Only copies the top-level properties)
// Deep Copy (🌊 Copies all levels, even nested objects)

// 2️⃣ What is a Shallow Copy?
// A shallow copy only copies the top-level properties of an object or array. If the original object has nested objects or arrays, the copied version still points to the same references, meaning changes in the copy affect the original.
let obj1 = {
    name: "Joni",
    details: {
        age: 25,
        skills: ["JavaScript", "React"]
    }
};

let obj2 = { ...obj1 };

// obj2 is a shallow copy of obj1. Changes to obj2 will affect obj1.
console.log("obj1 name", obj1.name);
obj2.name = "joni halder"
obj2.details.age = "change the age";
console.log("obj2 name", obj2.name);
console.log("obj1 age ", obj1.details.age);
console.log("obj2 age ", obj1.details.age);

let arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, ["sen boy", "coder", ["hello world"]]];

//copy the arry

let arry2 = [...arry];
console.log("arry2  ", arry2);
arry2[2] = "joni halder";
console.log("arry2  ", arry2[9][0]);

// can change this sen boy === rahul using ... operators  ... no
arry2[9][0] = "rahul";
console.log("arry2  ", arry2[9][0]);
console.log("arry1 change the sen boy  value  ", arry[9][0]);


// 3️⃣ How to Create a Shallow Copy?

// ✅ Using Spread Operator (...)
// ✅ Using Object.assign()
// ✅ Using JSON.parse(JSON.stringify(obj))
// ✅ Using Array.prototype.slice() for arrays

// 🚨 Issue with Shallow Copy

// If the object contains nested objects or arrays, they still share references.
// Changes in the nested object affect both copies.

// 4️⃣ What is a Deep Copy?
// A deep copy creates a new object that is completely independent of the original. This means all nested objects and arrays are also copied, and modifying the copied version does not affect the original.
// 5️⃣ How to Create a Deep Copy?
// ✅ Using structuredClone() (Best Modern Method)
// ✅ Using JSON.parse(JSON.stringify(obj)) (Legacy Method)
// ✅ Using Recursion (Manual Deep Copy)

// 7️⃣ When to Use Each?
// 🔹 Use a Shallow Copy when:

// You don’t have nested objects an arrys.
// You need better performance.
// 🔹 Use a Deep Copy when:
// You need a completely independent copy.
// Your object contains nested structures.
// 8️⃣ Best Practices
// ✅ Use structuredClone() for modern apps
// ✅ Use JSON.parse(JSON.stringify(obj)) for simple objects
// ✅ Use recursion if you need full control
// ✅ Avoid shallow copies for deeply nested objects


// nested obj create step

// deep C0py
let personInfo = {
    name: "rahul",
    age: 25,
    address: {
        street: "street1",
        city: "city1",
        state: "state1",
    },
    socialmedia: {
        facebook: "rahul.facebook.com",
        instagram: "rahul.instagram.com",
    },
    twitter: {
        ac1: { name: "rahul.twitter.com" },
        sec: { name: "rahul2.twitter.com" }
    }
};
function MakeDeepCopy(obj) {
    // Step 1: Base case (stop recursion for non-objects) Return primitive values directly
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }

    // Step 2: Create a new object or array
    let copiedVal = Array.isArray(obj) ? [] : {};

    // Step 3: Get all keys from the object /  Loop through keys and recursively copy values
    let keys = Object.keys(obj);

    // Step 4: Iterate over each key and recursively copy values
    for (let i = 0; i < keys.length; i++) {
        copiedVal[keys[i]] = MakeDeepCopy(obj[keys[i]]);
    }

    // Step 5: Return the deep copied object
    return copiedVal;
}




let copiedPerson = MakeDeepCopy(personInfo);








// // copy just perospos

// let person2 = { ...person };
// console.log("person2", person2);
// console.log("person1", person);

// // try to person2 address city change
// person2.address.city = "city2";
// console.log("person2 adderss city", person2.address.city);
// console.log("person adderss city", person.address.city);

// Understanding JSON.parse(JSON.stringify(obj)) for Deep Copy
// This method converts an object to a JSON string and then back to a new object, effectively creating a deep copy.

// ✅ Use Cases (When to Use)
// This method works well for simple objects that contain:

// Primitive values (number, string, boolean, null)
// Arrays
// Objects without functions, undefined, or special data types

let objData = {
    name: "anitosh halder",
    age: 25,
    address: {
        street: "West Bengal",
        city: "Gangarmpur",
    },
    socialmedia: {
        facebook: "rahul.facebook.com",
        instagram: "rahul.instagram.com",
        twitter: {
            ac1: "anitoshtwitter",
            ac2: "anitoshtwitter2"
        }
    },
}

let objData2 = JSON.parse(JSON.stringify(objData));

console.log("after data", objData, objData2);
objData2.address.city = "city changed";
console.log("befor data changed obj2 data", objData2.address.city);
console.log("befor data changed obj data", objData.address.city);

// ❌ Why NOT Use This Method? (Limitations)
// This method fails when dealing with complex data types such as:

// Functions (function) → Gets removed
// Undefined (undefined) → Gets removed
// Date (Date) → Converted to a string
// Regular Expressions (RegExp) → Converted to an empty object
// Map, Set, BigInt, and other special objects → Lost during conversion
// // Circular References → Throws an error

// What is a Recursive Call in JavaScript Deep Copy?
// A recursive call in JavaScript refers to a function calling itself to handle deeply nested structures.

// For deep copying an object, recursion is used to traverse nested objects or arrays, ensuring that all levels are copied properly.

// 🔹 Why Use Recursion for Deep Copy?
// A shallow copy (Object.assign() or { ...obj }) only copies the first level of an object, meaning nested objects still reference the original object.

// A recursive function ensures: ✅ Every level of the object is copied
// ✅ Nested objects & arrays have separate memory references
// ✅ No link remains between the original and the copied object

//make deep Copy :-
