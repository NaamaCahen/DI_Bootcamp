//exercise1
//1.
const divUser=document.body.firstElementChild;
console.log(divUser); //1st way
console.log(document.body.children[0]);//2nd way
//2.
console.log(document.body.children[1]);//1st way
console.log(divUser.nextElementSibling);//2nd way
//3.
console.log(document.body.children[1].children[1]);
console.log(divUser.nextElementSibling.firstElementChild.nextElementSibling);





// Add a <div id="container"></div> to the HTML file
// Create a function that adds the name of each students to a paragraph
// each paragraph needs to be background yellow, font-size 25px
// Add the 3 paragraph to the div already on the page


//lise's solution:

const users = ["John", "Lola", "Tom"];

// for each user 
// create a paragrah
// the text of the paragraph is the name of the user

function addPara () {
    const wrapper = document.getElementById("container"); 
    for (let i = 0; i<users.length; i++){
        const paragraph = document.createElement("p");
        paragraph.classList.add("para"); // add a class called para
        const text = document.createTextNode(`Hello ${users[i]}`);
        paragraph.appendChild(text);
        wrapper.appendChild(paragraph);
    }
}

addPara();

document.getElementById("container").style.backgroundColor = "yellow"
// inline style