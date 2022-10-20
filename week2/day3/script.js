// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
for (let i = 0; i <= 15; i++) {
    if (i%2) {
        console.log(`${i} is odd`);
    }
    else{
        console.log(`${i} is even`);
    }
}

//exercise2
let names= ["john", "sarah", 23, "Rudolf",34]
for(let i=0; i<names.length; i++){
    if(typeof names[i] !=="string"){
        continue;
    }
    if(names[i].charAt(0)===(names[i].charAt(0)).toUpperCase()){
        console.log(names[i]);
    }
    else{
        let capital=names[i].charAt(0);
        capital=capital.toUpperCase();
        names[i]=capital+names[i].slice(1);
        console.log(names[i]);
    }
}


let n;
for(n of names){
    if (typeof n !== "string"){
        break;
    }
    console.log(n);
}