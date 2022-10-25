// //Exercise 1 - basic add event listener

// Create two buttons - id of "red", id of "blue"
// When we click on the red button -> Change the backgroundcolor of the page to red
// When we click on the blue button -> Change the backgroundcolor of the page to blue
document.getElementById("blue").addEventListener('click',changeColor);
document.getElementById("red").addEventListener('click',changeColor);

function changeColor(event){
    let btn=event.target;
    let color=btn.id;
    // console.log(btn.id);
    document.body.style.backgroundColor=color;

}
// Exercise 2 - using the event object

 const colors = ["blue", "yellow", "green", "pink"];

// Add inside the HTML file a div of id "container" (do it directly in the HTML)
// Add one button per color inside the div container (do it directly in the JS)
// Each button should have an "click" event listener that changes the background color of the document, to the text content of the button (do it directly in the JS)
function ex2(){
for (const color of colors) {
    let newButton=document.createElement("button");
    let btnText=document.createTextNode(color);
    newButton.appendChild(btnText);
    newButton.setAttribute("id",color)
    document.getElementById("container").appendChild(newButton);
    newButton.addEventListener('click',changeColor);
}
}

ex2();
// Exercise 3 - Pictures

 const pics = [ "https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" ,"https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" ,"https://images.pexels.com/photos/3439576/pexels-photo-3439576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" ];

// Using this array, create a button on the page that when clicked on display 3 animals photo, but the order of the picture should be random
// Set a class to the image, so each image will be 200px height, and width, and in the middle of the page
// Add a button next to each image
// When we click on one image, it should disapear(ie. be deleted),
// When we hover on the image, it should display the "alt".