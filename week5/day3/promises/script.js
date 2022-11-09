//arrow function
const myGrade = 80;
const mypromise = new Promise((resolve, reject) => {
    if(myGrade > 70) {
        resolve("I get a gift")
    } else {
        reject("I don't have good grades")
    }
})

console.log(mypromise);
//it will return a promise object
// Promise
// state : fulfilled
// result : "I get a gift"

// --------------
// WITH A SET TIMEOUT

const grade = 80;

const successStudies = new Promise ((resolve, reject) => {
	setTimeout(() => {
		if (grade > 70) {
			resolve(["phone", "flowers"]) //the array is the result of the promise
		} else {
			reject("Low grades")
		}
	}, 2000)
})

//after 2 seconds the promise will come back resolved

//CONSUMING THE PROMISE 

//I cannot call the promise right away because it takes time for the promise to come
//back fulfilled or rejected
// so I need a way to wait for the promise --> we use
// the then method, takes as a parameter the result of the fulfilled promise
// use the result if the promise is fulfilled
// so the result parameter is equal to ["phone", "flowers"]
successStudies.then(function (result) {
    console.log("result", result); //["phone", "flowers"]
})

const gradeJohn = 80;
let bankAmountJohn = 1000;

const successStudiesJohn = new Promise ((resolve, reject) => {
	setTimeout(() => {
		if (grade > 70) {
			resolve(50)
		} else {
			reject("Low grades")
		}
	}, 2000)
})

//if the promise reject it goes straight to the catch method
successStudies
.then((money) => bankAmountJohn += money)
.catch((err) => console.log("IN THE CATCH", err))


//chaining promise
// then method is also returning a promise
// the result of a then method is whatever it returns
successStudies
.then((result) => bankAmount+=result) 
.then((amount) => {throw new Error("wrong")}) //amount = 1050
.catch((err) => console.log("IN THE CATCH", err))