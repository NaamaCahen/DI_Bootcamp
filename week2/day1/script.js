//exercise1
let addressNumber=15;
let addressStreet="pinkas";
let country="ISRAEL";
let globalAddress=addressStreet+" "+addressNumber+" "+country;
console.log(`I live in ${globalAddress} right now`);

// exercise2
let birth=2003;
let future=2100;
let age=future-birth;
console.log(`I will be ${age} in ${future}`);

//exercise3
let pets=["cat","dog","fish","rabbit","cow"];
console.log(pets[1]);
pets.push("horse");
pets.splice(3,1);