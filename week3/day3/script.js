
function start() {
    setTimeout(displayBanner, 5000);
   const timer=setInterval(countDown,1000);
   return timer;
}

function displayBanner() {
    document.getElementById("banner").style.display = 'block';
}


let counter=10;
const timer=start();

function countDown(){
    
    counter--;
    if(counter>=0){
        document.querySelector("#count").textContent=counter;
    }else{
        document.querySelector("div#count").style.display='none';
        clearInterval(timer);
        return;
    }

   
}
