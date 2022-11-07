// console.log("1"); //1
// console.log("2"); //2
// console.log("3"); //3

// --- If your code executes sequentially from top to bottom, it is synchronous. 
//-- execute before the console log

// //-----------1ST EXAMPLE--------------
// // Use here 
// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

// 2. function gets 2 parameters


// function funcOne (name, callback){ //2
//     console.log("In the first function"); //3
//     callback(name) //funcTwo("John") //4
//     console.log("hello") //8
// }

// function funcTwo (name){//5
//     console.log("In the callback function"); //6
//     console.log(name.toUpperCase()); //7 JOHN
// }

// funcOne("John", funcTwo) //1




// function one () {
//     one()
// }

// one()




function task(message) { //3
    // emulate time consuming task
    let n = 10000000000;
    while (n > 0){
        n--;
    }
    console.log(message);
}

console.log('Start script...'); //1
task('Download a file.'); //2
console.log('Done!'); //wait for the function to finish

let btn = document.querySelector("button");
btn.addEventListener("click", () => console.log("clicked"))


// ASYNCHRNOUS

// use this website to test

http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

setTimeout(function (){console.log("this is the first message")}, 5000); //1
setTimeout(function (){console.log("this is the second message")}, 3000); //2
setTimeout(function (){console.log("this is the third message")}, 1000); //3


//callback function
// btn.addEventListener("click", function (){console.log("hello");})