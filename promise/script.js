
// basic 

// flasey value list 
// // false
// 0 (zero)
// -0
// 0n (BigInt zero)
// "" (empty string)
// null
// undefined
// NaN (Not a Number)

let myPromise = new Promise((res, rej) => {
    let success = true;
    if (success) {
        res("Promise resolved");
    }
    else {
        rej("Promise rejected");
    }

})

myPromise.then((mes) => {
    console.log("mes", mes);

}).catch((error) => {
    console.log("mes", error);
})


// step 2

const examplePromis = new Promise((res, rej) => {
    setTimeout(() => {
        res("Data   Fetch SuccessFully")
    }, 3000)
})

examplePromis.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);

})

// step 3
const examplePromis1 = new Promise((res, rej) => {

    let randomNum = Math.floor(Math.random() * 10);
    console.log(randomNum);
    if (randomNum > 5) {
        res("Random Number is greater than 5");
    }
    else {
        rej("Random Number is less than 5");
    }

})

examplePromis1.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})

// api use 

let api = fetch(`https://fakestoreapi.com/users`).then((res) => {
    console.log(res);
    return res.json()

}).then((data) => {
    console.log(data);
})


// chainging promise
// task  1--sabse Pahle ghar par aao
// task 2 -- gate kholo gur gate lagao
// task 3 -- ghar mein jao aur khana khao
// task 4 -- khana khane ke baad ghar se bahar niklo

let promiseTask1 = new Promise((res, rej) => {
    return res("sabse pahle gahar par aao")
})
    .then((mes) => {
        console.log(mes);
        return new Promise((res, rej) => {
            return res("gato kholo gur gate lagao")
        })
    }).then((res) => {
        console.log(res);
        return new Promise((res, rej) => {
            return res("ghar mein jao aur khana khao")
        })

    }).then((data) => {
        console.log(data);
        return new Promise((res, rej) => {
            return res("khana khane ke baad ghar se bahar niklo")
        })
    }).then((ans) => {
        console.log(ans);
        return new Promise((res, rej) => {
            return rej("tum meri bate why not listen me")
        })

    }).then((ans) => {
        console.log("!!!!!!!!!!!!!!!!!!!!!");

    }).catch((error) => {
        console.log("error", error);

    }).finally((data) => {
        console.log("Finaly this Data Res or Not rej");

    })
// example 2
// Go to the market
// Buy groceries
// Error during shopping: Out of money!
// Shopping process ended

// example 3

// Order placed
// Order confirmed
// Food is being prepared
// Food is out for delivery
// Food delivered
// Order process completed
// promise all

// Execute multiple promises concurrently and wait for all of them to complete.
// The Promise.race method is a utility in JavaScript's Promise API that resolves or rejects as soon as the first promise in a list settles (either resolves or rejects). It does not wait for all the promises to complete like Promise.all.
const promise1 = new Promise((resolve) => setTimeout(() => resolve("Task 1 done"), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Task 2 done"), 6000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve("Task 3 done"), 2000));

Promise.all([promise1, promise2, promise3]).then((result) => {
    console.log(result);
})



const postsComments = fetch('https://jsonplaceholder.typicode.com/comments');
const commentsUser = fetch('https://jsonplaceholder.typicode.com/users');
const userPost = fetch('https://jsonplaceholder.typicode.com/posts');

Promise.all([userPost, postsComments, commentsUser]).then(([userPost, postsComments, commentsUser]) => {
    console.log("userPost", userPost);
    console.log("postsComments", postsComments);
    console.log("commentsUser", commentsUser);



}).catch((error) => {
    console.error("Failed to fetch data:", error);
});

// promis.race
// The Promise.race() static method takes an iterable of promises as input and returns a single Promise. This returned promise settles with the eventual state of the first promise that settles.


const fastTask = new Promise((resolve) => setTimeout(() => resolve("Fast task done"), 1000));
const slowTask = new Promise((resolve, rej) => setTimeout(() => rej("Slow task done"), 3000));
Promise.race([fastTask, slowTask]).then((win) => {
    console.log(win);
}).catch((error) => {
    console.log('win problem', error);
})

const fetchData = new Promise((resolve) => setTimeout(() => resolve("Fetched data"), 3000));
const timeout = new Promise((resolved, reject) => setTimeout(() => reject("Timeout exceeded"), 2000));
Promise.race((result) => {
    console.log(result);
}).catch((error) => {
    console.log("ERROR", error);
})

// try 
let fatchProducts = () => {
    fetch('https://dummyjson.com/products').then((res) => {
        console.log(res.json());
    }).then((data) => {
        console.log(data);
    })
}

fatchProducts()

