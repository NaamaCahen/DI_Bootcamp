//First Part
function playTheGame(){
    let askUser=confirm(`do you want to play the game? \n if not, press cancel`)
    if(!askUser){
        alert(`No problem, Goodbye`);
    }
    else{
        let userNum= +prompt(`please enter a number between 1 and 10`);
        while(isNaN(userNum) || userNum===0 ){
            let userNum= +prompt(`PLEASE ENTER A NUMBER BETWEEN 1 AND 10`);
        }
        while(userNum<0 || userNum>10){
            let userNum= +prompt(`PLEASE ENTER A NUMBER BETWEEN 1 AND 10`);
        }
        let computerNumber = Math.round( Math.random()*10);
    }
}