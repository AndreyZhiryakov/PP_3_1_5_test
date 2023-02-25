 async function getAllUsers(){
    const res = await fetch('api/admin');
    const users = await res.json();
    console.log(users);
 }

 window.addEventListener('DOMContentLoaded',getAllUsers);

function usersToHTML({id,firstname,lastname,age,email,role}){
    const usersList = document.getElementById('users')

}




