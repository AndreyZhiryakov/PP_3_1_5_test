const url = "api/admin";
const urlNew = "api/new";
const urlDel = "api/delete"


const usersTable = document.getElementById("users");
const addUserForm = document.getElementById("new-user-form");
const firstNameValue = document.getElementById('firstname-value');
const lastNameValue = document.getElementById('lastname-value');
const ageValue = document.getElementById('age-value');
const emailValue = document.getElementById('email-value');
const passwordValue = document.getElementById('password-value');
const rolesValue = document.getElementById('roles-value');
const deleteUserForm = document.getElementById("delete-modal");

//const idDel = document.getElementById("edit-id");
const modalDelete = document.getElementById('delete-modal')
const deleteForm = document.getElementById('delete-form')


let output = "";

// users Table
const usersCreate = (users) => {
    users.forEach(user => {
        output += `
<tr>
<td class = "id">${user.id}</td>
<td class = "firstname">${user.firstname}</td>
<td class = "lastname">${user.lastname}</td>
<td class = "age">${user.age}</td>
<td class= "email">${user.email}</td>
<td class = "roles">
<th:block>
        <span th:switch="">
        <span th:case="'ROLE_ADMIN'">ADMIN</span>
        <span th:case="'ROLE_USER'">USER</span>
        </span>
</th:block>
<td>
<button id = "edit-user" type="button" class="btn btn-info" data-toggle="modal" role="dialog">
  Edit
</button>
</td>
<td>
<button id = "delete-user" type="button" class="btn btn-danger" data-toggle="modal"
       role="dialog">
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



usersTable.addEventListener('click', (e) => {
    e.preventDefault();
    let delButtonIsPressed = e.target.id == "delete-user";
    let editButtonIsPressed = e.target.id == "edit-user";

    let id = e.target.parentElement.parentElement.firstElementChild.innerHTML;

    //Delete the existing user
    if(delButtonIsPressed) {
        fetch(`${urlDel}/${id}`,{
            method:'DELETE'
            }
            )
            .then(res => res.json())
            .then(() => location.reload())
    }
    if (editButtonIsPressed){
        const parent = e.target.parentElement.parentElement;
        let idContent = parent.querySelector('.id').textContent;
        let firstNameContent = parent.querySelector('.firstname').textContent;
        let lastNameContent = parent.querySelector('.lastname').textContent;
        let ageContent = parent.querySelector('.age').textContent;
        let emailContent = parent.querySelector('.email').textContent;
        let passwordContent = '';
        let rolesContent = parent.querySelector('.roles').textContent;
        console.log(idContent, firstNameContent, lastNameContent, ageContent, emailContent, passwordContent,
            rolesContent);


    }

});

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







