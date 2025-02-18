// operator in javascript are symbols used to perfromed operation on operads ( values and variables). let's go step by step , convering everything basic to advance operators with examples

// 1) arithmetic operators
// +  addtition 
// - subtraction
// * multiplication 
// / division
// % modules 
// ** EXPOntiation

// example 
let num = 12;
let num2 = 20;
console.log("num + num2", num + num2);
console.log("num - num2", num - num2);
console.log("num * num2", num * num2);
console.log("num / num2", num / num2);
console.log("num % num2", num % num2);

// 2) assignment operators
// i) =  ; ii) += ; iii) -= iv) *= v) /= VI) %=
// example
// a= 10   assign value
//  a += 5 a= a+5
//  a-=5  a= a-5
//  a-=5  a= a-5
//  a*=5  a= a*5
//  a /=5  a= a/5
//  a%=5  a= a%5


// 3 compearsion operators
// ==   equal to                example 5=="5" // output -- true
// ===   strict equal           example 5==="5" // output -- false
// !=   not eqal                example 5 !="6" // output -- true
// !==    strict not equal      example 5 !=="5" // output -- true
// >    greater than            example 10 > 5  // output -- true
// <    less than               example 50 < 20   // output -- false
// >=    greater than equal     example 5 >=5 // output -- true
// <=     less than equal       example 5 <= 10  // output -- true

console.log("equl to ==", 5 == "5");
console.log(" ===", 5 === "5");
console.log("not eqal !=",5 !="5");
console.log("strict not equal",5 !=="5");
console.log("greater than 5 > 20",5 >20);
console.log("less than", 2 < 10 );
console.log(" greater than equal",  80>=80 );
console.log(" less than equal",  80<=80 );



//  logical operators
// (i) && logical and (ii) || logical or (iii) logical not 
let a = 20;
let b = 30;
console.log("logial and && ", a < b  && b > a );

console.log("logical or ", a > b || b > a  );
console.log("logical ! not 5 !=10 ",  5 !=10 );
console.log("logical  !(a>b) ",  !(a>b) );

//  ternary operator
//   a shortcut for if-else statements. syntax : condtition ? experession1 : expression2
let adult = 24;
let res =  adult >= 18 ? " Adult ":" minor";
console.log(res);

//  type of operators 
//  (i) type of   :description:  returns the type   example type of typeof 33  // output number
// (ii) instanceof checks object type             example  arr instanceof Arry


// *********  nullish coalescing operator (??)...***********

//  returns the right-hand operand when the left hand operand is null or undefined...
// definition:
//  the nullish coalescing operator (??) returns the right-hand operand when the left-hand operand is null or nudefindd it is a safe way to handle null or nudefinded values without being triggered falsy values like 0 , and false "0" or ,""
//  syntax..
// result= value1 ?? value2

let name ;
let user= name ?? "Guest";
console.log(user);

//  why use
// 1. safe way to handle null or undefined values
// 2. avoid null pointer exception
// 3. avoid undefined values
// 4. avoid null or undefined values in conditional statements
// 5. avoid null or undefined values in function parameters
// 6 . default values : provides default values for null or nudefined
// 7. avoid falsy pitfalls : unlike || , it does not treat 0 , false or "" as falsy values.
// 8. cleaner fallcack logic : more accurate defult value assignment..


// *********optional chaningin operator start here  (?.)***********
// 
//  definition :
//  the optional chaining operator (?.) allows you to access deeply nested object properties without causing an error if one of the peroperties is undifined or null 
// syntax .... object?property    , object?[expression] ,  object ? method()

let users={profile:{name:"Joni Halder"}};
console.log(users.profile?.name);
console.log(users.account?.age);

let users2={profile:{name:"Joni Halder",socialmedia:{account:"halderboymedia.com"} }};

console.log(users2.profile.socialmedia?.account);

//  why use optional chaining (?.)
// prevents errors: avoids "cannot read property of undefined "" errors
// safe access: accesses property safely without checking if intermediate objects exist.
//  reduces boilerplate : removes the need for multiple if statement of logical conditions..
// example without optional chainning

// let users3={};
// console.log(users3.profile.name);


//  with optional chaining (safe)...
let users4={};
console.log(users4?.profile?.name);

//  use case ...  1) accessing nested object properties.
//  2) accessing nested array elements.
//  3) accessing nested function calls.
//  4) accessing nested object methods.

let users5={
    profile:{
        name:"Joni Halder",
        socialmedia:{
            account:"halderboymedia.com",
            followers:1000
        },
        address:{
            street:"123, main street",
            city:"Dakshin Dinajpur",
            country:"India"

        }
    }
};

console.log(users5.profile?.name);
console.log(users5.profile.address?.city);
console.log(users5.profile.address?.state);


//  benefits of ?.
//  error prevention : no "can not read property of undefined" errors
//  cleancer code : reduces unnesessary checkes (if or && conditions).
// efflcient : simple and readable for deep object traverak.

// *********optional chaningin operator end here  (?.)***********
