//exercise1
//1.
const divUser=document.body.firstElementChild;
console.log(divUser); //1st way
console.log(document.body.children[0]);//2nd way
//2.
console.log(document.body.children[1]);//1st way
console.log(divUser.nextElementSibling);//2nd way
//3.
console.log(document.body.children[1].children[1]);
console.log(divUser.nextElementSibling.firstElementChild.nextElementSibling);