// Exercise 1 : guess what will be console logged, and explain why
let text = "Hello";

function checkText (){
	console.log("In the function",text); //2.in the function Hello
	text += " World";
	console.log("Still in the function",text);//3. still in the function Hello World
}

console.log("before the function", text);//1.before the function Hello

checkText() //2.

console.log("after the function", text);//4.after the function Hello World
// Exercise 2 : guess what will be console logged, and explain why
let friend = "Harry";

function checkfriend (){
	let friend = "Alice";
	console.log("In the function",friend); //2. alice
	friend += " Smith";
	console.log("Still in the function",friend);//3. alice smith
}

console.log("before the function", friend);//1.before the function Harry

checkfriend()

console.log("after the function", friend);//4.Harry


// Exercise 1:

// Greet the user with his name, the user's name is a parameter. Do this exercise,
// first by using function declarations
// then function expression,
// then arrow function

function greetUser1(userName){
    alert("welcome " ,userName);
}

const greetUser2= function(userName){
    alert(`welcome ${userName}`);
}

const greetUser3 = (userName) =>alert(`welcome ${userName}`);


// Exercise 2: Function & Arrow function & Ternary Operator

// Check if the user's age is higher than 18. Use ternary operator.
// if the user's age is higher than 18, return "You can drive"
// else, return "You cannot drive"
// Do this exercise,

// first by using function declarations
// then function expression,
// then arrow function
function canDrive(age){
    if(age>=18){
        return "you can drive"
    }else{
        return "you cannot drive"
    }
}

const canDrive2=function(age){
    if(age>=18){
        return "you can drive"
    }else{
        return "you cannot drive"
    }
}

const canDrive3= (age) => age>=18 ? "you can drive": "you cannot drive";