//GET REQUEST
console.log(fetch('https://jsonplaceholder.typicode.com/users'))
// fetch returns a promise

//------------------------------
// HTTP GET REQUEST to the server
fetch('https://jsonplaceholder.typicode.com/users')
.then((res) => {return res.json()}) 
// then consumes the result of the promise returned by fetch
// res is the object response
.then((arr) => console.log(arr)) //arr is the result of the promise returned by json method

//------------------------------
function getData () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
        if(res.status != 200){
            throw new Error ("failed status")
        } else {
            return res.json() //allow us to manipulate the data received
        }
    })
    .then((arr) => appendData(arr)) 
    .catch((err) => console.log("IN THE CATCH", err))
}

getData()

function appendData(users){
    let section = document.getElementById("container")
	users.forEach(info => {
		let li = document.createElement("li");
		li.textContent = `${info.name} - ${info.email}`
		section.appendChild(li)
	});
}