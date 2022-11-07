const username = "John";
username = "Tom"; //error cannot reassign constant variable
//error stop the execution
console.log("HELLO"); //not executed


//creating an error object
const myerror =  new TypeError("Something went wrong");
console.log(myerror.message)
// 'Something went wrong'
console.log(myerror.name)
// 'TypeError'
console.log("hello"); // executed

//throw the error - Exception
// error thrown by the developer
const mySecondError =  new TypeError("Something went wrong");
throw mySecondError;
console.log("hello"); //not executed


function calculator (firstnum, secondNum) {
    try{
        const division = firstnum/secondNum;
        const multiplication = division*2;
        console.log(multiplicatin);
        return multiplication
    } catch(myerr){
        console.log(myerr);
        console.log("WRONG NUMBER");
        //send the user to another to another page
        //show an image saying not found
    }
}

calculator(3, 5)
calculator(3, 0)


//throw an error

function calculatorTwo (firstnum, secondNum) {
    try {
        if(secondNum!==0){
            const division = firstnum/secondNum;
            const multiplication = division*2;
            console.log(multiplication);
            return multiplication
        } else {
            throw new Error ("denominator equal to 0")
        }
    } catch (err){
        //CATCH catches the error thrown
        console.log("IN THE CATCH", err);
    } finally {
        console.log("IN THE FINALLY"); //no matter what happens
    }
}


calculatorTwo(3, 2) //stay in the try, then goes to finally
calculatorTwo(3, 0) //goes to the catch, then goes to finally

//will be executed if the error is caught
function checkName () {
    console.log("Hello user");
}

checkName()