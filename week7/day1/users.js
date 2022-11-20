async function fetchUsers() {
    const users= await fetch(`https://jsonplaceholder.typicode.com/users`)
    const obj=await users.json();
    return obj;
}
module.exports={
    fetchUsers
}