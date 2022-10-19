const userCart = {
	username : "John",
	password: 1234,
	isUserSignedIn : true,
	cart : {
		apple : 2,
		banana : 1,
		pear : 5,
	},
	prices : {
		apple : 0.5,
		banana : 0.8646466363,
		pear : 0.2
	}
};

// 1. Add the lastname Smith to the object
userCart.lastName="Smith";
// 2. Change the price of the pear, so it will contain the Taxes. 17%
userCart.prices.pear*=1.17;
// 3. Ask the user for the fruit he wants between Apple, Banana and Pear. Make sure that your code accept all type of strings, for example "Banana" or "banana" or "BaNaNA"
let chooseFruit=prompt(`choose your favorite fruit between:Apple, Banana and Pear`).toLowerCase();
console.log(`your chosen fruit is ${chooseFruit}`);
// 4. Console.log the price for the specific fruit the user wants
console.log(userCart.prices[chooseFruit]);


//conditionals
let age=prompt(`how old are you?`);
if(age<18){
    console.log(`Sorry, you are too young to drive this car. Powering off`);
}
else if(age==18){
    console.log("Congratulations on your first year of driving. Enjoy the ride!");
}
else if(age>18){
    console.log( "Powering On. Enjoy the ride!"
    );
}


let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too large' );
    break;
  default:
    alert( "I don't know such values" );
}