const url = "api/admin";
const urlNew = "api/new";


const usersTable  = document.getElementById("users");
const addUserForm = document.getElementById("new-user-form");
const firstNameValue = document.getElementById('firstname-value');
const lastNameValue = document.getElementById('lastname-value');
const ageValue = document.getElementById('age-value');
const emailValue = document.getElementById('email-value');
const passwordValue = document.getElementById('password-value');
const rolesValue = document.getElementById('roles');
let tableData = "";


//Get all users
const usersCreate = (users) => {
    users.map((value) => {
        tableData += `
<tr>
<td>${value.id}</td>
<td>${value.firstname}</td>
<td>${value.lastname}</td>
<td>${value.age}</td>
<td>${value.email}</td>
<td>
<th:block>
        <span th:switch="">
        <span th:case="'ROLE_ADMIN'">ADMIN</span>
        <span th:case="'ROLE_USER'">USER</span>
        </span>
</th:block>
<td>
<button type="button" class="btn btn-info" data-toggle="modal" role="dialog"
                  data-target= "#editModal">
  Edit
</button>
</td>
<td>
<button type="button" class="btn btn-danger" data-toggle="modal"
       role="dialog" data-target="#deleteModal">
       Delete user
       </button>
</td>
</tr>`;
    });
    usersTable.innerHTML = tableData;
}

fetch(url).then((data) => {
    return data.json();// converted to object
}).then(objectData => usersCreate(objectData))

//Create new user
//POST method

addUserForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(firstNameValue.value)
    fetch(urlNew, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstname:firstNameValue.value,
            lastname:lastNameValue.value,
            age:ageValue.value,
            email:emailValue.value,
            password:passwordValue.value,
            roles_:rolesValue.value
        })
        })
        .then(res => res.json())
        .then(data => {
            const dataArr = [];
            dataArr.push(data);
            usersCreate(dataArr);
        })
    })


// newUser.addEventListener('click', () => {
//     $('#newModal').modal('show')
// })

// document.getElementById('addUserButton').addEventListener('click',
//     async () => {
//     const newFirstName = document.getElementById('newfirstname');
//     const firstname = newFirstName.value;
//     console.log(firstname);
//     const newLastName = document.getElementById('newlastname');
//     const lastname = newLastName.value;
//     const newAge = document.getElementById('newage');
//     const age = newAge.value;
//     const newEmail = document.getElementById('newemail');
//     const email = newEmail.value;
//     const newPassword = document.getElementById('newpassword');
//     const password = newPassword.value;
//     const role = 'ROLE_ADMIN';
//
//     const res = await fetch("api/new", {
//         method: 'POST',
//         body: JSON.stringify({firstname,lastname,age,email,password,role})
//     });
//     const user = await res.json();
//     console.log(user);
//     })


