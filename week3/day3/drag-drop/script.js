//retrieve the divs to drag
const boxOne = document.getElementById("boxOne");
const boxTwo = document.getElementById("boxTwo");
const boxThree = document.getElementById("boxThree");

//making the boxes daggable
boxOne.setAttribute("draggable","true");
boxTwo.setAttribute("draggable","true");
boxThree.setAttribute("draggable","true");

//add event that occures while start dragging
boxOne.addEventListener("dragstart", startDragging);
boxTwo.addEventListener("dragstart", startDragging);
boxThree.addEventListener("dragstart", startDragging);


//the function which is called by the dragstart event
function startDragging(event){
    
    //event.target is the current element that is dragged
    //change the border of the element I drag
    event.target.style.border = "2px dotted black"; 
    // I need to set the element that I want to drop in the future
    // I will retrieve the element by id
    event.dataTransfer.setData("text/plain", event.target.id);

}

function modifyDropZones () {
    //retrieve all the targets
    const allDropZones = document.querySelectorAll(".dropzone");
    // [div.dropzone, div.dropzone, div.dropzone]

    for (const zone of allDropZones){
        zone.addEventListener("dragover", draggingOver);
        zone.addEventListener("drop", dropOnTarget);
    }
}

modifyDropZones()

//using dragover event, the event.target is the dropZone that we go over
function draggingOver(event){
    event.preventDefault();
    // console.log(event.target);
    event.target.style.background = "pink";
}

function dropOnTarget(event){
    event.preventDefault();
    //in the drop eventm the event.target is the drop
    event.target.style.background = "lightblue";

    const dataId = event.dataTransfer.getData("text/plain"); //id of the box
 
    const getBox = document.getElementById(dataId);
    event.target.appendChild(getBox)
}


// make the green boxes draggable

// event dragStart on the green boxes
    //in the function we set the data to the id of the box I draf
    // event.target.id

// add the event drag over on the dropzones
    //in the function we use event.preventDefault()

// add the event drop on the dropzones
    //in the function we use event.preventDefault()
    //we get the data that we set in the dragStart function
    //we retrieve the id and retrieve the element
    //we append the element on the dropzone












 