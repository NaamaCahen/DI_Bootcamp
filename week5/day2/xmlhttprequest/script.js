//HTTP GET REQUEST in order to receive some data

const button = document.querySelector("button");
button.addEventListener("click", getData)


// 1. Create XMLHttpRequest object
// I create a object that is an instance of the XMLHttpRequest class
const xhr = new XMLHttpRequest();


function getData() {
    //2. Initialize the request -- creating the request
    //open method
    // object.open(method, url)
    xhr.open("GET", "https://lisenakache.github.io/HttpRequestGithub/test.json");

    //change the responsetype to JSON so no need to parse the response
    xhr.responseType = "json";
    //3. send the request
    xhr.send();
}


//4. Listen for the response
// event onload is going to be fired when we receive the response
// listen for the response to come back
xhr.onload = function() {
    // document.body.style.backgroundColor = "blue"
    if(xhr.status === 200) {
        console.log("SUCCESS");
        console.log(xhr.response);
        // const data = JSON.parse(xhr.response);
        displayAnimals(xhr.response)
    } else {
        console.log("ERROR");
        displayError()
    }
}

// you can use also addeventlistener
// xhr.addEventListener("load", getResult)

//executed during progress of an underlying process, like an HTTP request
xhr.onprogress = function (){
    console.log("test");
    // document.body.style.backgroundColor = "red";
}

//executed during network errors
xhr.onerror = function (){
    console.log("error");
}



//display the 
function displayAnimals (animals) {
    const container = document.querySelector("#results")
    animals.forEach((element) => {
        const info = document.createElement("p");
        const text = document.createTextNode(`${element.name} - ${element.species}`)
        info.appendChild(text);
        container.appendChild(info)
    })
}


function displayError () {
    const container = document.querySelector("#results")
    const info = document.createElement("p");
    const text = document.createTextNode(`WRONG`)
    info.appendChild(text);
    container.appendChild(info)
}


//xmlHttpRequest is an asnchrnous WEB API - so not blocking the rest of the code
function test () {
    for(let i = 0; i<100; i++){
        console.log("hello");
    }
}

test()






