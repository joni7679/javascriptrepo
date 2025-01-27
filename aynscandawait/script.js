// async as  a keyword  used to define an asynchronous function
// async function always returns a promise
// await is used to wait for the promise to resolve
// async function can contain multiple await expressions
// await only works inside async functions


// step 1 : create a function that returns a promise
async function myFunction() {
    return 'Hello';
}
//is a promise and can be treated as one

myFunction().then(console.log);

// step 2 : create a function that returns a promise
async function myFunction2() {
    return Promise.resolve('i am a promise');
}
//is a promise and can be treated as one
myFunction2().then(console.log);
// step 3 : create a function that returns a promise
async function myFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("hello gusy i am lern to async function basic to advance"), 3000);
    })
}
//is a promise and can be treated as one
myFunction3().then((data) => console.log(data));
myFunction3().catch((error) => console.log("error", error));

// api use
// step 4 : fetch data from api using async function 
// why use async function to fetch data from api
// Handle Promises Seamlessly:

// APIs usually return promises (e.g., fetching data with fetch() or axios).
// async and await make it easier to handle these promises.
// Readability:

// Code using async/await looks synchronous, even though it’s asynchronous.
// This improves readability and debugging.
// Error Handling:

// Use try...catch blocks to handle errors instead of chaining .catch() for promises.
// Avoid Callback Hell:

// It prevents deeply nested callbacks and improves code structure.

// async function fetchUsers() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await res.json();
//     console.log(data);
// }
// fetchUsers();
async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    let name = "joni dev";
    console.log(name);
    console.log(data);
}
fetchUsers();

// The **await** keyword is used to pause the execution of an async function until a promise is resolved or rejected. It ensures that asynchronous code is written in a synchronous-like manner, making it easier to read and manage.
async function fetcData() {
    try {
        const res = await fetch('https://dummyjson.com/products')
        const data = await res.json();
        console.log(data.products);
    }
    catch (error) {
        console.log("error", error);
    }

}
fetcData().then(() => console.log("data fetched"));

//  The **try...catch** block is used to handle errors in asynchronous code. It allows you to catch and handle any errors that occur during the execution of the async function.

function getsongs(song) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${song} is playing Arijit singh`);
        }, 2000);
    });
}
getsongs('Tum hi ho').then((data) => console.log(data));

// The **.then()** method is used to handle the resolved value of a promise. It
// takes a callback function as an argument, which will be executed

function getsongs2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["Tum hi ho", "Tera hone laga hoon", "Tum se hi"]);
        }, 2000);
    });

}


getsongs2().then((data) => console.log(data));
getsongs2().then((data) => console.log(data[0]));
// The **.catch()** method is used to handle the rejected value of a promise. It takes a callback function as an argument, which will be executed
// if the promise is rejected.
getsongs2().catch((error) => console.log("error", error));

// The **Promise.all()** method is used to handle multiple promises at once. It takes an array of promises as an argument and returns a single promise that resolves when all the promises in the array have resolved, or rejects when any of the promises are rejected.
// The **Promise.all()** method is used to handle multiple promises at once. It takes an
// array of promises as an argument and returns a single promise that resolves when all the

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 2000);
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 resolved');
    }, 4000);
});

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 3 resolved');
    }, 60000);
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
})

// The **Promise.race()** method is used to handle multiple promises at once, but it only returns the value of the first promise that resolves or rejects. It takes an array of promises as an argument and returns a single promise that resolves or rejects when the first promise in the array resolves or rejects.


Promise.race([promise1, promise2, promise3]).then((value) => {
    console.log(value);
})



// interviwer question 

// ### ✅ **Basic Questions:**
// 1. What is the purpose of `async` and `await` in JavaScript, and how do they improve code readability?

// 2. Can you use `await` outside of an `async` function? Why or why not?
// 3. What does an `async` function return by default? How can you handle the returned value?
// 4. How would you handle errors in an `async/await` function?  
// 5. What happens if you forget to use `await` before a promise inside an `async` function?
let myPromise = async () => {
    let  data =  fetch(`https://fakestoreapi.com/products/categories`);
    console.log(data);
}
myPromise()




// 6. Can you use `async/await` with promises that are not created with
// ### ✅ **Intermediate Questions:**
// 6. Explain the difference between `Promise.then()` and `async/await`. Which one would you use for better performance?




// 7. How would you run multiple `await` calls in parallel instead of sequentially to improve performance?
// 8. Can you use `await` inside a loop? Why might it be inefficient, and how can you optimize it?
// 9. How do you use `Promise.all()` with `async/await`? Provide an example.
// 10. What happens if one of the promises in `Promise.all()` rejects? How would you handle it?


// ### ✅ **Advanced Questions:**

// 11. How can you cancel an ongoing `async/await` operation? Provide an example.
// 12. What is the difference between `Promise.all()` and `Promise.allSettled()` when used with `async/await`?
// 13. How would you retry a failed API call using `async/await`? Write a function that retries up to 3 times.
// 14. How would you handle multiple dependent promises using `async/await`? Provide a real-world example.
// 15. Can you create a custom `sleep()` function using `async/await`? Write the function.

// ---

// Would you like me to **solve some of these questions** or provide **practice exercises** to enhance your logic? 😊