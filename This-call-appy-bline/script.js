console.log(this);  // In the global scope, `this` refers to the window object (in browsers)

// 1. Understanding this in JavaScript
// In JavaScript, this refers to the object that is executing the function. The value of this depends on how the function is called.

function abcd(){
    console.log("hey i am call this in the function", this);
    
}

abcd()

// method -object
let obj ={
    name:function(){
        console.log(this);
    }
}
obj.name() //Here, this refers to person because the greet function is a method inside the object.

// fnc inside method (es5 )-window 
let obj2={
    sayName:function(){
        console.log(this);
        
        function inner(){
            console.log("inner call this ",this);
        }
        inner();
    }
}

obj2.sayName()

//  arrow function and this keywork use
let obj3={
    sayHello : ()=>{
        console.log(this);
    }
}
obj3.sayHello()

//  new key word use
function person(name){
    // this.name = name
    console.log(this);
    
}
//  new keyword use
// let person1 = new person("Joni");
// console.log(person1.name);
 
let res= new person();
console.log(res);

//  button click
//  event listener
document.querySelector("button").addEventListener("click",()=>{
    console.log("button click",this);
})

//  call , apply , blind 
let person2={
    name:"Joni",
    age:30
}

function callFunction(){
    console.log(this);
}
callFunction.call(person2)  //  call() Method  The call() method allows us to explicitly set the value of this when calling a function.

callFunction.apply(person2)  //  apply() Method  The apply() method calls a function
//apply() Method
// The apply() method is similar to call(), but instead of passing arguments individually, we pass them as an array.
// The apply() method calls a function with a given this value and arguments provided as an array.
