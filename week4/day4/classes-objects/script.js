// const character = {
//     //attribute
// 	name: 'Hermione Granger',
// 	house: 'Gryfindor',
//     //method
// 	speak : function (type){
//         console.log(this);
//         console.log(`I'm a ${type} wizard,my name ${this.name}`);

//     }
// };

// const houseWizard = character.house;
// character.speak("magician")

const characterOne = {
    //attribute
	name: 'Hermione Granger',
	house: 'Gryfindor',
    //method
    //not working with arrow function
	speak : (type) => {
        console.log(this);
        console.log(`I'm a ${type} wizard,my name ${this.name}`);
    }
};


characterOne.speak("magician")

//object literals
const characterTwo = {
    //attribute
	name: 'Harry Potter',
	house: 'Gryfindor',
    //method : key in an object that is equal to an anonymous function
	speak : function (type){
        console.log(`I'm a ${type} wizard,my name ${this.name}`);
    }
};


// OLD WAY
// template to create objects
// constructor function
// function Character (username, userhouse) {
//     //attributes
//     this.name = username;
//     this.house = userhouse;
//     //method
//     this.speak =  function (type){
//         console.log(`I'm a ${type} wizard,my name ${this.name}`);
//     }
// }

// //creating an object, that has the same attributes and methods as the Character Function
// // instance of the class Character
// const firstCharacter = new Character("Harry Potter", "Gryfundor");
// console.log(firstCharacter.name);
// firstCharacter.speak("magician")


class Character {
    //we create the attributes
    constructor (username, userhouse){
        this.name = username;
        this.house = userhouse;
        this.power = 1000;
        this.listPowers = [];
    }
    
    //method
    speak (type) {
        console.log(`I'm a ${type} wizard,my name ${this.name}`);
    }

    drinkPotion (color){
        color === "blue" ? this.power *= 100 : this.power *= 2
    }

    addPower (power){
        this.listPowers.push(power)
    }    
}

const firstCharacter1 = new Character("Harry Potter", "Gryfundor");
firstCharacter1.speak("magician");
firstCharacter1.drinkPotion("blue")
firstCharacter1.addPower("invibility")

const secondCharacter2 = new Character("Hermione", "Gryfundor");
secondCharacter2.secret = "the best student";


//magician who is a character
// magician has everything a character has
class Magician extends Character {
    constructor (magicianName, magicianHouse, magicPower) {
        super(magicianName, magicianHouse); //call the constructor function of the parent class
        this.magic = magicPower;
    }

    speak () {
        console.log(`OhOhOh ! I'm a magician wizard,my name ${this.name}`);
    }
}

const magician1 = new Magician("John", "Gryfundor", "run fast")
magician1.speak()