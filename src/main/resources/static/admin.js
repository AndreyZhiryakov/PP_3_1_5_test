const url = "api/admin";
const urlNew = "api/new";
const urlId = "api/{id}"


const usersTable = document.getElementById("users");
const addUserForm = document.getElementById("new-user-form");
const firstNameValue = document.getElementById('firstname-value');
const lastNameValue = document.getElementById('lastname-value');
const ageValue = document.getElementById('age-value');
const emailValue = document.getElementById('email-value');
const passwordValue = document.getElementById('password-value');
const rolesValue = document.getElementById('roles-value');
const deleteUserForm = document.getElementById("delete-modal")

let output = "";

// users Table
const usersCreate = (users) => {
    users.forEach(user => {
        output += `
<tr>
<td>${user.id}</td>
<td>${user.firstname}</td>
<td>${user.lastname}</td>
<td>${user.age}</td>
<td>${user.email}</td>
<td>
<th:block>
        <span th:switch="">
        <span th:case="'ROLE_ADMIN'">ADMIN</span>
        <span th:case="'ROLE_USER'">USER</span>
        </span>
</th:block>
<td>
<button type="button" class="btn btn-info" data-toggle="modal" role="dialog"
                  data-target= "#edit-modal">
  Edit
</button>
</td>
<td>
<button type="button" class="btn btn-danger" data-toggle="modal"
       role="dialog" data-target="#delete-modal">
       Delete user
       </button>
</td>
</tr>`;

    })
    usersTable.innerHTML = output;
}
fetch(url)
    .then(res => res.json())
    .then(data => usersCreate(data))

//Users table

deleteUserForm.addEventListener('click', (e) => {
    e.preventDefault();
    let delButtonIsPressed = e.target.id == 'delete-user';

//Delete user
    if (delButtonIsPressed) {
        console.log('remove')
    }
})

// Create new user
addUserForm.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch(urlNew, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstname: firstNameValue.value,
            lastname: lastNameValue.value,
            age: ageValue.value,
            email: emailValue.value,
            password: passwordValue.value,
            roles_: rolesValue.value

        })
    })
        .then(res => res.json())
        .then(data => {
            const dataArr = [];
            dataArr.push(data);
            usersCreate(dataArr);
            location.reload();
        })
})







