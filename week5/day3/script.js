
// EXERCISE 1
// Create a function that takes in a single parameter and returns a new promise.
// Using setTimeout, after 5000 milliseconds, the promise will either resolve or reject.
// If the parameter is a string, the promise resolves with that same string uppercased.
// If the parameter is anything but a string it rejects with that same input.
// Use then to repeat the string twice use catch to console.log the error finally call a function that console.log ("congratulation")
function returnPromise(x){
    const promise=new Promise((resolve,reject)=>{
         setTimeout(()=>{
            if(typeof x ==='string'){
                resolve(x.toLocaleUpperCase());
            }else{
                reject("wrong"+x);
            }
         },2000)
    });
   return promise;
}
returnPromise('naama')
.then((result)=>console.log(result.repeat(2)))
.catch((err)=> console.log(err))
.finally(()=>console.log("congratulations!"))

returnPromise(5)
.then((result)=>console.log(result.repeat(2)))
.catch((err)=> console.log(err))
.finally(()=>console.log("congratulations!"))



// Exercise
// PART I
// Use fetch to fetch one 1 random gif with the category of "sun", then append the gif to the page. Use this documentation https://developers.giphy.com/docs/api/endpoint#random https://api.giphy.com/v1/gifs/random?tag=sun&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// Part II
// Instead of having a fixed category of gif. First, fetch one word from this api :http://random-word-api.herokuapp.com/word?number=1 You will then fetch 1 random gif, depending on the word. The word will be the gif category Display the word and the gif on the page
// For example: you will fetch the random-word-api. This api will return a random word - for example : "happy" Using this word as a category, you will fetch one random gif with the category of "happy" and display it on the page
// Part III
// If the giphy API doesn't find a gif (because the word can be strange) - display a gif that says "404 ERROR"

//I
fetch("https://api.giphy.com/v1/gifs/random?tag=sun&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
.then((result)=>result.json())
.then((result)=>{
    const img=document.createElement("img");
    img.src=result.data.images.original.url;
    document.body.appendChild(img);
});
//II
fetch("http://random-word-api.herokuapp.com/word?number=1")
.then((result)=>result.json())
.then((result)=>{
    fetch("https://api.giphy.com/v1/gifs/random?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&tag="+result[0])
    .then((result)=>result.json())
.then((result)=>{
    const img=document.createElement("img");
    img.src=result.data.images.original.url;
    document.body.appendChild(img);
})
.catch(console.log("cannot find a gif with this word"))
})
