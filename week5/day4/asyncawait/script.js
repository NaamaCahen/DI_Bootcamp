//WITHOUT ASYNC AWAIT

const username = "Tom";

// returns a promise
function test () {
    return new Promise((resolve, reject) => {
        if(username === "John"){
            resolve("great")
        } else {
            reject("wrong")
        }
    })
}

console.log(test())

//WITH ASYNC AWAIT

//returns a promise
//async a new syntax 
async function testOne () {

}

console.log(testOne())

// Promise {<fulfilled>: undefined}
// [[Prototype]] : Promise
// [[PromiseState]] : "fulfilled"
// [[PromiseResult]] : undefined


async function testTwo () {
    if(username === "John"){
        return "great" // if the async function return a value it means that the
        //promise is resolved and the result of this promise is "great"
    } else {
        throw new Error("wrong") // // if the async function throw an error
        //the promise is rejected and the result of this promise the error
    }
}

console.log(testTwo())

test()
.then((res) => console.log(res)) //res will be equal to "great"
.catch((err) => console.log("---IN THE CATCH---", err))


// AWAIT
//returns a promise
function learnJS(){
    return new Promise((resolve, reject){
        setTimeout(
            function() {resolve("I'm learning JS")}
            , 2000)
    })
}

// state:fulfilled
// result : "I'm learning JS"

//returns a promise
async function learnReact(){
    return "I'm learning REACT"
}

//the result of the promise is whatever i return

// state:fulfilled
// result : "I'm learning REACT"

//FIRST learn JS, and only after, I learn React

//await is a keyword only used in an async function
async function learning () {
    const js = await learnJS(); //the await does the job of the .then
    // waiting for the promise to come back settled
    // and retrieve the result
    console.log("hello"); // wait 2 sec for the promise learnJS() to come back resolved
    console.log(js); //--> "I'm learning JS"
    const react = await learnReact();
    console.log(react); //--> "I'm learning REACT"
}

learning()


// other example


function learnJSTwo(){
    return new Promise((resolve, reject) => {
        setTimeout(
            function() {resolve("I'm learning JS")}
            , 2000)
    })
}

function learnReactTwo(){
    return new Promise((resolve, reject) => {
        setTimeout(
            function() {resolve("I'm learning REACT")}
            , 4000)
    })
}


// await literally suspends the function execution until the promise settles,
async function learningTwo () {
    const js = await learnJSTwo();
    console.log("hello"); //wait 2 sec
    console.log(js); //--> "I'm learning JS"
    const react = await learnReactTwo(); //after 2 sec, we wait 4 sec
    console.log(react); //--> "I'm learning REACT"
}


learningTwo()

//async is not blocking so this loop will run before the 2 seconds end
for (let i = 0; i < 40; i++) {
    console.log("test");
}


//other examle - passing parameters
function learnJSThree(){
    return new Promise((resolve, reject) => {
        setTimeout(
            function() {resolve("I'm learning JS")}
            , 2000)
    })
}

async function learnReactThree(sentence){
    return `${sentence} and I'm learning REACT`;
}

// await literally suspends the function execution until the promise settles,
async function learningThree () {
    const js = await learnJSThree();
    console.log("js", js);
    const react = await learnReactThree(js);
    console.log(react);
}


learningThree()
