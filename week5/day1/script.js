//Exercise with JSON
// Parse this JSON string into a JS object
// Use array or object methods to display THE VALUES OF THE OPTIONS OF THE FIRST SPORT QUESTION
// Create another variable to stringify the JS object. Console.log the variable
// Then use pretty print (look at the lesson)

let jsonString = `
{
    "quiz": {
        "sport": {
            "q1": {
                "question": "Which one is correct team name in NBA?",
                "options": [
                    "New York Bulls",
                    "Los Angeles Kings",
                    "Golden State Warriros",
                    "Huston Rocket"
                ],
                "answer": "Huston Rocket"
            }
        },
        "maths": {
            "q1": {
                "question": "5 + 7 = ?",
                "options": [
                    10,
                    11,
                    12,
                    13
                ],
                "answer": 12
            },
            "q2": {
                "question": "12 - 8 = ?",
                "options": [
                    1,
                    2,
                    3,
                    4
                ],
                "answer": 4
            }
        }
    }
}`
const jsonObject=JSON.parse(jsonString);
console.log(jsonObject.quiz.sport.q1.options); 
const jsonToString =JSON.stringify(jsonObject,null,2);
console.log(jsonToString);



//exeptions
// Exercise 1: exceptions
// Using the code below:
const someVar = 'Cannot be reassigned';
try {
  someVar = 'Still going to try';
} catch(e) {
  console.log(e);
}

console.log("after")
// Which type of error will be thrown ? Look on the different types errors on Google
// Is the console.log("after") will be shown on the console ?

//Write a function called checkEmail that takes one parameter: the email of the user.
// Your function should return "You are signed in". However, if the email doesn't contain @ you should throw the error, "Missing @ in the email."
function checkEmail(email){
    try{
        if(email.includes('@')){
            return "you are signed in";
        }else{
            throw new Error ("missing @ in email");
        }
    }
    catch(err){
        console.error(err.message);
    }
}
console.log(checkEmail("naama"));
console.log(checkEmail("naama@")); 
 
