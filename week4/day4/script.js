// // Exercise1
// // Part I
// // What does the following code return/print?

// // const facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// // const {numPlanets, yearNeptuneDiscovered} = facts;

// // console.log(numPlanets); // ?=8
// // console.log(yearNeptuneDiscovered); // ?=1846

// // Part II
// // What does the following code return/print?

// // let planetFacts = {
// //   numPlanets: 8,
// //   yearNeptuneDiscovered: 1846,
// //   yearMarsDiscovered: 1659
// // };

// // let {numPlanets, ...discoveryYears} = planetFacts;

// // console.log(discoveryYears); // ? 

// // {yearNeptuneDiscovered: 1846,
// // yearMarsDiscovered: 1659}

// // Exercise3
// // Modify the code below, and destructure the object in the parameter (ie. you should have 3 parameters : name, house and goodstudents)
// // function getDetails({name,house,goodstudent}) {
// // 	console.log(name, house, goodstudent)
// // }
// // getDetails({name: 'Harry Potter',house: 'Gryfindor',goodstudent : false})

// // Exercise4
// // Modify the code below, and destructure the object in the parameter (ie. you should have 4 parameters : name, house, friendName and age)
// // function getMoreDetails({name,house,friend:{friendName,age}) {
// //     console.log(name, house, friendName, age)
// // }
// // getMoreDetails(
// //     {
// //         name: 'Hermione Granger',
// //         house: 'Gryfindor',
// //         friend: {
// //             friendName: 'Harry Potter', age: 20
// //         }
// //     })
// //     Exercise5
// //     Modify the code below, and destructure the object in the parameter (ie. you should have 4 parameters : firstname, lastname, locationOne, locationTwo, valueHouses)

//     const elonPerson = {
//         first: 'Elon',
//         last: 'Musk',
//         housesLocation : ["new york", "paris"],
//         twitter: '@elonmusk',
//         company: 'Space X',
//         houses : {
//           amount: 2,
//           value : "5Million"
//         }
//     }
//     getElonMuskDetails(elonPerson);
//     function getElonMuskDetails({firstname,lastname,{locationOne,locationTwo}}){
//         console.log(firstname, lastname)
//         console.log(locationOne, locationTwo, valueHouses)

//     }

// // Exercise 6 : NOT MANDATORY
// // Display in the body of the document, the name, email and phone of every employee. Use a loop and object destructuring
// // const employees = [
// // 	{name: "Anne", email: "Anna@example.com", phone:"0000–000–0000"},
// // 	{name: "Tom", email: "Tom@gmail.com", phone:"0111–111–1111"},
// // ]



//exercises classes and objects
// Exercise 1

// Part I
// Create a TV function constructor with 3 parameters : brand, channel and volume Channel should be 1 by default. Volume should be 50 by default.
// Create properties brandTV, channelTV and volumeTV equal to the 3 parameters value.
// Add methods to increase and decrease volume. When the methods are called it will increase or decrease the volume by 1.
// Create an object for the LG TV
// Call the inscrease method, and check if the volume changed
class TV {
    constructor(brand, channel = 1, volume = 50) {
        this.brandTV = brand;
        this.channelTV = channel;
        this.volumeTV = volume;
    }
    increaseVolume() {
        if (this.volume < 100) {
            this.volumeTV++;
        }
    }
    decreaseVolume() {
        if (this.volumeTV > 0) {
            this.volumeTV--;
        }
    }
}
const LGTV = new TV("LG");
LGTV.increaseVolume();
console.log(LGTV);

// Part II
// Create a subclass for Smart TV
// It overrides the method increase, so it increase the volume by 10 and not by 1
// Add a attribute of Netflix that should be equal to true by default
class smartTV extends TV {
    constructor(netFlix = true) {
        super("walla");
        this.netFlix = netFlix;
    }
    increaseVolume() {
        this.volumeTV += 10;
    }
}
const smart = new smartTV();
smart.increaseVolume();
console.log(smart);
// Part III: Modify the TV class
// Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.
// Add a method to reset TV so it goes back to channel 1 and volume 50.
// It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".
