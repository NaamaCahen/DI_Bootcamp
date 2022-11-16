(function appendCart(){
    const cart=JSON.parse( localStorage.getItem("cart"));
    console.log(cart);
    cart.forEach((product)=>{
        const p=document.createElement("p");
        p.textContent=product.name;
        const price=document.createElement("p");
        price.textContent=product.price;
        document.body.append(p,price);
    })
    const btn=document.createElement("button");
    btn.textContent="submit payment";
    document.body.appendChild(btn);
    btn.addEventListener("click",()=>{
        localStorage.clear();
       const message=document.createElement("div");
       message.textContent="THANK YOU!"
       message.style.fontSize='5em';
       document.body.appendChild(message);
    })
})()