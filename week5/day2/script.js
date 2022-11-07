// AJAX
// Make an HTTP request using the GET METHOD on this API: https://jsonplaceholder.typicode.com/users

// Use the method onload, onprogress, onerror

// If there is no error, display on the page the name, email, city of the 3 first users

const xhr= new XMLHttpRequest();
xhr.open("GET","https://jsonplaceholder.typicode.com/users");
xhr.send();
xhr.responseType="json";
xhr.onload=()=>{
    if(xhr.status===200){
        console.log("success");
        
        console.log(xhr.response);
        for(let i=0;i<3;i++){
            const li=document.createElement("li");
           li.textContent=`name:${xhr.response[i].name} email:${xhr.response[i].email} city:${xhr.response[i].address.city}`;
           document.querySelector("#robots").appendChild(li);

        }
    }else{
        console.log("error");
    }
}
xhr.onprogress=()=>{
    document.body.style.backgroundColor="aqua";
}
xhr.onerror=()=>{
    document.body.style.backgroundColor="red";
}