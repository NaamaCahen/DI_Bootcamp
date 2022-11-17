// // 1.How to access the second element of the array const nums = [3, 7, 10]
// nums[1];

// // 2.For the code below, what does arrNums.splice(2, 0) return?
// const arrNums = [1, 2, 3, 4, 5];
// // the splice method returns an array of the removed items,
// // in this case it returns an empty array-[], because I didnt remove any item

// // 3.What is the result of the following code :
// const bestNumbers = [1, 2, 3]
// const secondBestNumbers = [7, 8, 9]
// const favoriteNumbers = [4, 5, 6, ...bestNumbers, ...secondBestNumbers];
// console.log(favoriteNumbers)
// //[4,5,6,1,2,3,7,8,9] -it uses desrtucturing

// // 4.What does the following code print to the console?
// const football = {
//   type: "sport",
//   clubs: {
//     france : "Paris Saint-Germain",
//     spain : "Atlético Madrid",
//   }
// }  
// football.clubs.spain = "Real Madrid";
// console.log(football.clubs.spain);
// //Real Madrid

// //5.What does the following code print to the console?
// const myteam = "bestTeam";
// const football = {
//   type: "sport",
//   clubs: {
//     france : "Paris Saint-Germain",
//     spain : "Atlético Madrid",
//   }
// }  
// football.clubs[myteam] = "France national football team";
// console.log(football.clubs);
// //it will print an error because myteam is not a property of the football object.

// //6.Can we define the function as follows? If yes, what is it called, and explain how to invoke it.
// const x = function(a, b){
//     return a*b;
//  }
//  //yes, it's a function expression , and we invoke it by calling the variable like this:
//  x(5,6);//will return 5*6 =>30

//  //7.Variables created without any keyword, are always global, even if they are created inside a function ? Yes or No and explain
// function x() {
// 	a1 = 5;
//     console.log(a1);
// }
// // YES , variables that are declared without keyword are global no matter where they are created.

// //8.In JavaScript can we pass functions as arguments to other functions? What does this code return ?
// function sayHello() {
//     return "Hello, ";
//  }
//  function greeting(helloMessage, name) {
//    console.log(helloMessage() + name);
//  }
//  greeting(sayHello, "JavaScript!");
//  //yes it's a callback function
//  //this code logs: Hello, JavaScript!

//  //9.Transform this function into an arrow function
// function sum(num1, num2){
//     return num1 + num2
// }
// sum(40,2)
// sum(42,0)
// console.log("the answer to everything is", sum(42,0))
// //arrow function:
// const sum=(num1,num2)=>num1+num2;

// //10.What does the following code print to the console? Explain the process and concept behind it
// function foo () {
//     function bar() {
//       return "Poppin' bottles";
//     }
//     return bar();
//   }
//   console.log(foo());
//   //it will print to the console: Poppin' bottles
//   //explaination: in the console.log we call the foo function, the function foo returns the bar nested function, and bar returns Poppin' Bottle.

// //   11.Which of the following events will you add in the addEventListener()method? ☐ click ☐ onclick
// //click

// //12.Does the addEventListener() method allow you to add many events to the same element?
// x.addEventListener("mouseover", func1);
// x.addEventListener("click", func2);
// x.addEventListener("mouseout", func3);
// //yes! it allows you to add as many events as tou want

// // 13.DOM exercise
// // Part I : Create a button in your HTML page, when the user will click the the button a paragraph will be added on the DOM with the content "New Paragraph". Use arrow functions.
// const btn= document.querySelector("button");
// btn.addEventListener("click", ()=>{
//     const p=document.createElement("p");
//     const text=document.createTextNode("New Paragraph");
//     p.appendChild(text);
//     document.body.appendChild(p);
//     // Part II : Add to each new paragraph, an event listener of mouse over. When you hover on a paragraph, the paragraph should become red (ie. color of the text).
//     p.addEventListener("mouseover",(event)=>{
//         event.target.style.color="red";
//     })
// })

// //14.Do this exercise twice: first with a for loop, then with a for of loop. Console.log the sum of this array
// const marks = [67, 60, 89, 90, 67, 42];
// //for
// function forLoop() {
//     let sum = 0;
//     for (let i = 0; i < marks.length; i++) {
//         sum += marks[i];
//     }
//     console.log(sum);
// }
// function forOfLoop(){
//     let sum=0;
//     for (const mark of marks) {
//         sum+=mark;
//     }
//     console.log(sum);
// }
// forLoop();
// forOfLoop();

// //15.What is the value of passed in the following code?
//     const marks = [67, 60, 89, 90, 67, 42];
//     const passed = marks.every(function(m) {
//        return m >= 50;
//     });
//     //passed=false, because every executes a function for every element and return true just if all of them were true, if one is false- it returns false.(in our cas 42 is not bigger than 50)

// //16.What does the following code log?
//    const nums = [10, 50, 88];
//    const bignums = nums.filter(function(n) {
//       return n > 10;
//    });
//    console.log(bignums);
// // [50,88] it filters the array and returning an array just with the  values that passed the function condition.

// //17.Use a javascript array method to square the value of every element in the array.
//    let input = [ 1, 2, 3, 4, 5 ];
//    //code
//    input=input.map((m)=>m*m)
//    console.log(input) // [ 1, 4, 9, 16, 25]

// //18.Use 2 javascript array methods and chain them to return the sum of all the positives ones.
//     const secondInput = [ 1, -4, 12, 0, -3, 29, -150];
//     //code
//     const total=secondInput.filter((m)=>m>=0).reduce((acc,val)=>acc+=val);
//     console.log(total) //42   

//19.Use 3 javascript methods and chain them to abbreviate the name and return the name initials.
    const input = 'George Raymond Richard Martin';
    //code 
    const initials=input.split(' ').map((m)=>m[0]).reduce((acc,val)=>acc+=val);
    console.log(initials)//'GRRM'

    