//function declaration

getPrice(2,5);

function getPrice(a, b){
    const total = a + b
}

getPrice(2,5);

//function expression not hoisted
// getPrice(2,5); //no possible

// function expression
// anonymous function assigned to a variable

const getPriceSecond = function (a, b) {
    const total = a + b;
}

getPriceSecond(2,5);


//Function expression are useful as callback functions
const btn = document.getElementById("btn");
btn.addEventListener("click", sayHi);
btnTwo.addEventListener("click", sayHi);

function sayHi () {

}

//other way
btn.addEventListener("click", function(){
    alert("hello")
});

setTimeout(function(){
    alert("hello")
}, 2000)

//base for arrow function

//function expression  - anonymous function
function (a, b) {
    const total = a + b;
    return total;
}

//ANONYMOUS ARROW FUNCTION
(a,b) => {
    const total = a + b;
    return total;
}

//power of arrow function is that it returns automatically a value
(a,b) => a + b

//the arrow function returns a + b
const getPriceThird = (a,b) => a + b;

getPriceThird(2,4)

//no parameter
const getPrice31 = () => "hello";

//no parameter
const getPrice32 = a => a;

// if the function does more than just returningm you need the 
// curly brackets and the return keyword
const getPrice33 = (a,b) => {
    const sentence = `Hello we are doing some math`;
    const total = a+b;
    return total;
}

// ---------------------------------
// Transform a function declaration into a function expression
function makeChocolate (typeChocolate) {
    const niceChocolate = `${typeChocolate} chocolate with strawberry`;
    return niceChocolate; //give to the function makeChocolate a result
    //the result is the value of this variable : niceChocolate
}

//function expression
const makeChocolate = (typeChocolate) => {
    const niceChocolate = `${typeChocolate} chocolate with strawberry`;
    return niceChocolate; 
}

//function expression with an arrow function
const makeChocolate = (typeChocolate) => `${typeChocolate} chocolate with strawberry`


btn.addEventListener("click", () => alert("hello"));


// Ternary operator
// SYNTAX
// condition ? true go here : false go here

//function declaration
function checkTemperature (temp) {
    const season = temp>20 ? "Summer" : "Winter";
    return season;

}

checkTemperature(25)


const checkTemperature = (temp) => temp>20 ? "Summer" : "Winter";
checkTemperature(25)



//function expression
const checkTemperature = function (temp) {
    if(temp>20){
        return "Summer"
    } else {
        return "Winter"
    }
}

//arrow function
const checkTemperature = (temp) => {
    if(temp>20){
        return "Summer"
    } else {
        return "Winter"
    }
}