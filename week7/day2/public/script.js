function getProducts(){
    fetch(`http://localhost:5000/api/products`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        craeteproducts(data);
    })
    .catch(e=>{
        console.log(e);
    })
}
const craeteproducts=(arr)=>{
    const root = document.getElementById('root');
    arr.forEach((item,i)=>{
        const div= document.createElement("div");
        div.textContent=item.name+' '+item.price;
        root.appendChild(div);
    })
}
getProducts();