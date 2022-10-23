//First Part
function playTheGame(){
    let askUser=confirm(`do you want to play the game? \n if not, press cancel`)
    if(!askUser){
        alert(`No problem, Goodbye`);
    }
    else{
        let computerNumber = Math.round( (Math.random()*10)+1);
        guess(computerNumber,0);
    }
}
function guess(computerNumber,counter){
    counter++;
    let userNum= +prompt(`please enter a number between 1 and 10`);
    while(isNaN(userNum) || userNum===0 ){
         userNum= +prompt(`PLEASE ENTER A NUMBER BETWEEN 1 AND 10`);
    }
    while(userNum<0 || userNum>10){
         userNum= +prompt(`PLEASE ENTER A NUMBER BETWEEN 1 AND 10`);
    }
    
    compareNumbers(userNum,computerNumber,counter);
}

//second part

function compareNumbers(userNumber,computerNumber,counter) {
   
    if(userNumber===computerNumber){
        alert(`WINNER!`)
        return ; 
    }else if(userNumber>computerNumber && counter<=4){
        alert(`Your number is bigger then the computer's, guess again `);
       
        counter++;
        guess(computerNumber,counter);
       
    }else if(userNumber<computerNumber && counter<=4){
        alert(`Your number is smaller then the computer's, guess again`);
        
        counter++;
        guess(computerNumber,counter);
        
    }
    else if(counter>3){
        alert(`out of chances`);
        return;
    }
}