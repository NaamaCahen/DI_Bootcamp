console.log("hello naama");
const arr=[1,2,5,3,5,4];
console.log(arr);
for(let i=0; i<arr.length;i++){
    console.log(i,arr[i]);
}
console.log(__dirname);
console.log(__filename);

const g=require("./greeting.js");
g.greeting("naama");
g.greeting("ziv chen");

const f=require("./users.js");
f.fetchUsers().then(obj=>{console.log(obj);});