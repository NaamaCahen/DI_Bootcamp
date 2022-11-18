// 1.How to access the second element of the array const nums = [3, 7, 10]
nums[1];

// 2.For the code below, what does arrNums.splice(2, 0) return?
const arrNums = [1, 2, 3, 4, 5];
// the splice method returns an array of the removed items,
// in this case it returns an empty array-[], because I didnt remove any item

// 3.What is the result of the following code :
const bestNumbers = [1, 2, 3]
const secondBestNumbers = [7, 8, 9]
const favoriteNumbers = [4, 5, 6, ...bestNumbers, ...secondBestNumbers];
console.log(favoriteNumbers)
//[4,5,6,1,2,3,7,8,9] -it uses desrtucturing

// 4.What does the following code print to the console?
const football = {
  type: "sport",
  clubs: {
    france : "Paris Saint-Germain",
    spain : "Atlético Madrid",
  }
}  
football.clubs.spain = "Real Madrid";
console.log(football.clubs.spain);
//Real Madrid

//5.What does the following code print to the console?
const myteam = "bestTeam";
const football = {
  type: "sport",
  clubs: {
    france : "Paris Saint-Germain",
    spain : "Atlético Madrid",
  }
}  
football.clubs[myteam] = "France national football team";
console.log(football.clubs);
//it will add a new property to the object.

//6.Can we define the function as follows? If yes, what is it called, and explain how to invoke it.
const x = function(a, b){
    return a*b;
 }
 //yes, it's a function expression , and we invoke it by calling the variable like this:
 x(5,6);//will return 5*6 =>30

 //7.Variables created without any keyword, are always global, even if they are created inside a function ? Yes or No and explain
function x() {
	a1 = 5;
    console.log(a1);
}
// YES , variables that are declared without keyword are global no matter where they are created.

//8.In JavaScript can we pass functions as arguments to other functions? What does this code return ?
function sayHello() {
    return "Hello, ";
 }
 function greeting(helloMessage, name) {
   console.log(helloMessage() + name);
 }
 greeting(sayHello, "JavaScript!");
 //yes it's a callback function
 //this code logs: Hello, JavaScript!

 //9.Transform this function into an arrow function
function sum(num1, num2){
    return num1 + num2
}
sum(40,2)
sum(42,0)
console.log("the answer to everything is", sum(42,0))
//arrow function:
const sum=(num1,num2)=>num1+num2;

//10.What does the following code print to the console? Explain the process and concept behind it
function foo () {
    function bar() {
      return "Poppin' bottles";
    }
    return bar();
  }
  console.log(foo());
  //it will print to the console: Poppin' bottles
  //explaination: in the console.log we call the foo function, the function foo returns the bar nested function, and bar returns Poppin' Bottle.

//   11.Which of the following events will you add in the addEventListener()method? ☐ click ☐ onclick
//click

//12.Does the addEventListener() method allow you to add many events to the same element?
x.addEventListener("mouseover", func1);
x.addEventListener("click", func2);
x.addEventListener("mouseout", func3);
//yes! it allows you to add as many events as tou want

// 13.DOM exercise
// Part I : Create a button in your HTML page, when the user will click the the button a paragraph will be added on the DOM with the content "New Paragraph". Use arrow functions.
const btn= document.querySelector("button");
btn.addEventListener("click", ()=>{
    const p=document.createElement("p");
    const text=document.createTextNode("New Paragraph");
    p.appendChild(text);
    document.body.appendChild(p);
    // Part II : Add to each new paragraph, an event listener of mouse over. When you hover on a paragraph, the paragraph should become red (ie. color of the text).
    p.addEventListener("mouseover",(event)=>{
        event.target.style.color="red";
    })
})

//14.Do this exercise twice: first with a for loop, then with a for of loop. Console.log the sum of this array
const marks = [67, 60, 89, 90, 67, 42];
//for
function forLoop() {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    console.log(sum);
}
function forOfLoop(){
    let sum=0;
    for (const mark of marks) {
        sum+=mark;
    }
    console.log(sum);
}
forLoop();
forOfLoop();

//15.What is the value of passed in the following code?
    const marks = [67, 60, 89, 90, 67, 42];
    const passed = marks.every(function(m) {
       return m >= 50;
    });
    //passed=false, because every executes a function for every element and return true just if all of them were true, if one is false- it returns false.(in our cas 42 is not bigger than 50)

//16.What does the following code log?
   const nums = [10, 50, 88];
   const bignums = nums.filter(function(n) {
      return n > 10;
   });
   console.log(bignums);
// [50,88] it filters the array and returning an array just with the  values that passed the function condition.

//17.Use a javascript array method to square the value of every element in the array.
   const input = [ 1, 2, 3, 4, 5 ];
   //code
   const newArr=input.map(m=>m*m)
   console.log(newArr) // [ 1, 4, 9, 16, 25]

//18.Use 2 javascript array methods and chain them to return the sum of all the positives ones.
    const secondInput = [ 1, -4, 12, 0, -3, 29, -150];
    //code
    const total=secondInput.filter((m)=>m>=0).reduce((acc,val)=>acc+=val);
    console.log(total) //42   

//19.Use 3 javascript methods and chain them to abbreviate the name and return the name initials.
    const input = 'George Raymond Richard Martin';
    //code 
    const initials=input.split(' ').map((m)=>m[0]).reduce((acc,val)=>acc+=val);
    console.log(initials)//'GRRM'

// 20.How objects are passed to a function in JavaScript? By Value or By Reference ? Explain in detail, using the below example:
function changeTshirt (myshirt){
    console.log("myshirt", myshirt);
    myshirt.color = "red"
    console.log("myshirt", myshirt); //this is the parameter
    console.log("tshirt", tshirt);   //this is the global variable
}
const tshirt = {
    color : "blue",
    price : 10
}
changeTshirt(tshirt)
//objects are passed to functions by reference, that means that if you change the value of one of the object's properties inside the function, it will change also the global variable,
//and that's because javascript objects addresses are stored in the heap and just the names are in the stack , so when you send it as an argument to a function what happens is that
//it creates in the stack a new pointer(name), but that points to the same address! so in our case- myshirt and tshirt are just different names of the same address so when I change myshirt.color to red 
//it will automatically be changed also in tshirt .

//21.How would you change the code above, so that when you modify the key color from the parameter myshirt, it won't change the global variable tshirt ?
function changeTshirt (myshirt){
       myshirt={...tshirt};
        console.log("myshirt", myshirt);
        myshirt.color = "red"
        console.log("myshirt", myshirt); //this is the parameter
        console.log("tshirt", tshirt);   //this is the global variable
    }
    const tshirt = {
        color : "blue",
        price : 10
    }
    changeTshirt(tshirt)
//I used object destructuring to pass the values of tshirt to myshirt and not the refernce;

//22.Use object destructuring to retrieve the value of the keys france and spain
 const football = {
    type: "sport",
    clubs: {
      france : "Paris Saint-Germain",
      spain : "Atlético Madrid",
    }
  }  
  const {france,spain} = football.clubs;
  console.log(france);
  console.log(spain);

//23.Use object destructuring in the function to retrieve the value of the keys france and spain
  function retrieveSports ({clubs:{france:franceTeam, spain:spainTeam}}){
    console.log(franceTeam);
    const sentence = `My favorite football teams are ${franceTeam} and ${spainTeam}`;
    console.log(sentence);
 }
 const football = {
     type: "sport",
     clubs: {
       france : "Paris Saint-Germain",
       spain : "Atlético Madrid",
     }
   }  
 retrieveSports(football);

 //24.What will be printed in the console
class Item {
    constructor(nameProduct, priceProduct) { 
          this.name = nameProduct;
          this.price = priceProduct;
    } 
    displayInfo () {
         console.log(this.name + " is for $ " + this.price)
    }
 } 
 const cake = new Item("Chocolate Cake", 10);
 cake.displayInfo();
 //Chocolate Cake is for $ 10

 //25.What will be the output and why ? What will be the state of the promise ?
Promise.resolve('Success!')//return a resolved promise with the value: Success!
.then(data => {
  return data.toUpperCase()//returns SUCCESS!
})
.then(data => {
  console.log(data)//SUCCESS!
})

//26.What will be displayed by the following code, after 2 seconds?
const p = new Promise(function(resolve, reject) {
    setTimeout(function() {
       resolve("OK");
    }, 2000);
 });
 p.then().then(function(data) {
    console.log(data);
 });
 //OK

//27.Consider the following async function and its output. What will be displayed to the console when calling the test() function? Explain the process
async function test() {//2
    let result = 'first!';//3 result=first
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done!'), 1000);//4resolves the promise with 'done!' after one second
    });
    result = await promise;//5 result awaits the promise response and then gets "done!" 
    console.log(result);//6 done!
}
test();//1 invoking the function


// 28.Use async await, and fetch a fact on cats and display it. Use this third party API : https://catfact.ninja/fact
// i In the HTML file, create a button, everytime you click it you will add a random cat fact on the DOM
// ii In the JS file, create 2 functions : one to fetch data from API, the other one to display it on the page using the DOM
// iii Make sure to use try and catch
document.getElementById("cat").addEventListener("click", fetchFactCat);
async function fetchFactCat() {
    try{
    const fetchFact = await fetch(`https://catfact.ninja/fact`);
    const obj = await fetchFact.json();
    appendOnPage(obj);
}
catch{
    console.log("error!");
}
}
function appendOnPage(obj) {
    const p = document.createElement("p");
    const fact = document.createTextNode(obj.fact);
    p.appendChild(fact);
    document.body.appendChild(p);
}