//Exercise Function

// You are the manager of the chocolate factory, in order to make your clients happy you will send them a gift depending on their quantity of chocolate box they ordered.
// Create a function named checkQuantityOrder, that takes one parameter, the quantity the user ordered.
// If the client ordered more between 5 and 10 boxes (included) console.log "Dear client, you won a bouquet of flowers"
// If the client ordered more between 10 and 20 boxes (included) console.log "Dear client, you won a bottle of wine"
// If the client ordered more than 20 boxes (included) console.log "Dear client, you won a trip to Paris"

function checkQuantityOrder(quantity, clientName='client'){
   let gift;
    if(quantity>=5 && quantity<=10){
        // console.log(`Dear ${clientName}, you won a bouquet of flowers`);
        gift='flowers';
    }else if(quantity>10 && quantity<=20){
        // console.log(`Dear ${clientName}, you won a bottle of wine`);
        gift='a bottle of wine';
    }else if(quantity>20){
        // console.log(`Dear ${clientName}, you won a trip to Paris`);
        gift='a trip to Paris'
    }
    return gift;

}
// Call the function a few times,
checkQuantityOrder(8);
checkQuantityOrder(15);
checkQuantityOrder(30);

//BONUS : add a parameter to the function, the name of the client. If you don't know the name of the client, call him/her "client"
// If the client ordered more between 5 and 10 boxes (included) console.log "Dear <name_client>, you won a bouquet of flowers"
// If the client ordered more between 10 and 20 boxes (included) console.log "Dear <name_client>, you won a bottle of wine"
// If the client ordered more than 20 boxes (not included) console.log "Dear <name_client>, you won a trip to Paris"

// Call the function a few times,
checkQuantityOrder(8, "John");
checkQuantityOrder(15);
checkQuantityOrder(30, "David");



//Exercise 2 : ONE FUNCTION ONE ACTION

// Modify the function checkQuantityOrder, so that instead of console logging "Dear client, you won a ..." it will return the gift iself(for example the flowers, or the bouquet).

// 2. Create a function sendGift, it retriEves the result of the function checkQuantityOrder and console log "Dear client, you won a ..."
function sendGift(qty){
    let gift= checkQuantityOrder(qty);
    console.log(`dear client you won ${gift}`);
}

sendGift(80);
sendGift(8);
sendGift(20);


