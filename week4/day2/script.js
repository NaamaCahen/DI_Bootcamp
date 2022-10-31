// self invoking anonymous FUNCTIONS
// Add in your html file a div with an id of container
// Create a self invoking function that takes one parameter the name of the user
// When invoked, the function adds the name of the user in a sentence in the div

((userName)=>{
    let div=document.getElementById("container");
    div.textContent="hello "+userName;
})("NAAMA");

// Nested functions
// PART I
// 1. Create a function named starWars that takes no parameter.
// 2. The function should declare a variable characters equal to an empty array
// 3. In the startWars function, create a function named createCharacter. It receives two parameters, the first name and last name of a character. If the character doesn't have a last name, the default should be "Smith" and push it to the characters array.
// 4. In the startWars function, create a function named displayCharacter should display in the body the fullname of the characters,
// 5. Call the createCharacter function a few times inside the starWars function and call the displayCharacter function once

function starWars(spaceShip){
    let characters=[];
    function createCharacter(firstName,lastName="Smith"){
        let character=`${firstName} ${lastName}`
        characters.push(character);
    }
    function displayCharacter(){
        let h3=document.createElement("h3");
        h3.textContent=spaceShip;
        document.body.appendChild(h3);
        characters.forEach((element)=>{
           let p= document.createElement("p");
            p.textContent=element;
            document.body.appendChild(p);
        })
    }
    createCharacter("naama","cahen");
    createCharacter("yoao","levi");
    createCharacter("john");
    displayCharacter();
}
starWars();

// Second Part 

// 6. Change the starWars function, to take one parameter, the name of the spaceship the characters are in 
// 7. The displayCharacter function should now display in the body the fullname and spaceship of the characters 
// 8. Call the starWars function once with the spaceship "The Devastator", and another times with the spaceship "Republic Attack Cruiser". what happens?
starWars("The Devastator");
starWars("Republic Attack Cruiser");