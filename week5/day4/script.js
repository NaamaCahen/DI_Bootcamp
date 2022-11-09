//I
// fetch("https://api.giphy.com/v1/gifs/random?tag=sun&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
// .then((result)=>result.json())
// .then((result)=>{
//     const img=document.createElement("img");
//     img.src=result.data.images.original.url;
//     document.body.appendChild(img);
// });

async function sunGif() {
    const result = await fetch("https://api.giphy.com/v1/gifs/random?tag=sun&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
    const json = await result.json();
    const img = document.createElement("img");
    img.src = await json.data.images.original.url;
    document.body.appendChild(img);
}
sunGif();
//II
// fetch("http://random-word-api.herokuapp.com/word?number=1")
// .then((result)=>result.json())
// .then((result)=>{
//     fetch("https://api.giphy.com/v1/gifs/random?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&tag="+result[0])
//     .then((result)=>result.json())
// .then((result)=>{
//     const img=document.createElement("img");
//     img.src=result.data.images.original.url;
//     document.body.appendChild(img);
// })
// .catch(console.log("cannot find a gif with this word"))
// })
async function wordGif() {
    try {
        const word = await fetch("http://random-word-api.herokuapp.com/word?number=1");
        if (word.status !== 200) {
            throw new Error("word error")
        } else {
            const wordJson = await word.json();
            const gifFetch = await fetch("https://api.giphy.com/v1/gifs/random?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&tag=" + wordJson[0]);
            const gifJson = await gifFetch.json();
            console.log(gifJson);
            if (gifJson.data.length === 0) {
                throw new Error("doesnt exist a gif for this word")
            }
            addGif(gifJson.data.images.original.url) ;
           
        }
    }
    catch{
        addGif("https://media.giphy.com/media/JT7Td5xRqkvHQvTdEu/giphy.gif")
    }

}

function addGif(url) {
    const image = document.createElement("img");
    image.src = url;
    document.body.appendChild(image);
}
wordGif();