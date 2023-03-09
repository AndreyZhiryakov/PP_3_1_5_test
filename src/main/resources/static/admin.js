const url = "api/admin";
const urlNew = "api/new";
const urlDel = "api/delete"
const urlEdit = "api/edit"

const dbRoles = [{id: 1, name: "ROLE_USER", authority: "ROLE_USER", unRole: "USER" }, {id: 2, name: "ROLE_ADMIN",
    authority: "ROLE_ADMIN", unRole: "ADMIN"}]


const btnNewUser = document.getElementById("new-btn")
const usersTable = document.getElementById("users");
const addUserForm = document.getElementById("new-user-form");
const firstNameValue = document.getElementById('firstname-value');
const lastNameValue = document.getElementById('lastname-value');
const ageValue = document.getElementById('age-value');
const emailValue = document.getElementById('email-value');
const passwordValue = document.getElementById('password-value');
const rolesValue = document.getElementById('roles-value');

const deleteId = document.getElementById('delete-id');
const deleteFirstName = document.getElementById('delete-firstname');
const deleteLastName = document.getElementById('delete-lastname');
const deleteAge = document.getElementById('delete-age');
const deleteEmail = document.getElementById('delete-email');
const deleteRoles = document.getElementById('delete-roles');

const btnDelete = document.getElementById('delete-btn');


const editId = document.getElementById('edit-id');
const editFirstName = document.getElementById('edit-firstname');
const editLastName = document.getElementById('edit-lastname');
const editAge = document.getElementById('edit-age');
const editEmail = document.getElementById('edit-email');
const editPassword = document.getElementById('edit-password');
const editRoles = document.getElementById('edit-roles');

const btnSubmit = document.getElementById('edit-btn');


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
  ${user.roles.map(role => role.role.replace('ROLE_',''))}
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
    if (delButtonIsPressed) {
        const parentDel = e.target.parentElement.parentElement;
        let idContentDel = parentDel.querySelector('.id').textContent;
        let firstNameContentDel = parentDel.querySelector('.firstname').textContent;
        let lastNameContentDel = parentDel.querySelector('.lastname').textContent;
        let ageContentDel = parentDel.querySelector('.age').textContent;
        let emailContentDel = parentDel.querySelector('.email').textContent;
        let rolesContentDel = parentDel.querySelector('.roles').textContent;

        deleteId.value = idContentDel;
        deleteFirstName.value = firstNameContentDel;
        deleteLastName.value = lastNameContentDel;
        deleteAge.value = ageContentDel;
        deleteEmail.value = emailContentDel;
        deleteRoles.value = rolesContentDel;

        $('#delete-modal').modal('show');

        // Delete the existing user
        //DELETE

        btnDelete.addEventListener('click', (e) => {
            e.preventDefault();
            fetch(`${urlDel}/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(() => location.reload())
        })
    }

    if (editButtonIsPressed) {
        const parent = e.target.parentElement.parentElement;
        let idContent = parent.querySelector('.id').textContent;
        let firstNameContent = parent.querySelector('.firstname').textContent;
        let lastNameContent = parent.querySelector('.lastname').textContent;
        let ageContent = parent.querySelector('.age').textContent;
        let emailContent = parent.querySelector('.email').textContent;
        let passwordContent = '';
        let rolesContent = parent.querySelector('.roles').textContent;

        editId.value = idContent;
        editFirstName.value = firstNameContent;
        editLastName.value = lastNameContent;
        editAge.value = ageContent;
        editEmail.value = emailContent;
        editPassword.value = passwordContent;
        editRoles.value = rolesContent;

        $('#edit-modal').modal('show');

        // Update the existing user
        //PATCH

        btnSubmit.addEventListener('click', (e) => {
            e.preventDefault();
            fetch(`${urlEdit}/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: editId.value,
                    firstname: editFirstName.value,
                    lastname: editLastName.value,
                    age: editAge.value,
                    email: editEmail.value,
                    password: editPassword.value,
                    roles_: editRoles.value
                })
            })
                .then(res => res.json())
                .then(() => location.reload())
        })
    }
});

// btnNewUser.addEventListener('click' ,() =>{
//     console.log('new user');
// })
// get roles from db

const getRoles = () => {
    fetch('http://localhost:8088/api/admin/roles')
        .then(response => {
            return response.json();
        })
        .then(roles => {
            let content = "";
            for (let j = 0; j < roles.length; j++) {
                content += "<option value=" + roles[j].id + ">" + roles[j].role + "</option>";
            }
            let rolesSelections = document.querySelectorAll("#rolesCreate, #rolesPatch, #rolesDelete")
            for (let i = 0; i < rolesSelections.length; i++) {
                rolesSelections[i].innerHTML = content;
            }
        })
}
console.log(getRoles());
// Create new user

addUserForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // const select = document.getElementById('roles-value');
    // // var options = select.selectedOptions;
    // //var values = Array.from(options).map(({value}) => value);
    // // console.log(values);
    // var values =  Array.from(select.options).filter(option => option.selected).map(option => option.value);
    //
    // console.log("VALUES " + values);
    // console.log("dbRoles" + dbRoles);
    //
    // var rolesUserArr = new Map();
    // for (let x = 0; x < values.length; x++) {
    //     //console.log("++++++++" + values.length)
    //     for (let y = 0; y < dbRoles.length; y++) {
    //         //console.log("---------" + values.length)
    //         if (values[x] == dbRoles[y].name) {
    //             //console.log("!!!!!!!!!" + values.length)
    //             rolesUserArr.set(dbRoles[y].id, dbRoles[y].name);
    //             //console.log(dbRoles[y].id, dbRoles[y].name);
    //         }
    //     }
    // }
    // console.log("rolesUserArr[0]" + rolesUserArr[0]);
    //
    // let listRoles = roleArray(document.getElementById('roles-value'))
    //
    // console.log("listRoles " + listRoles[0] + listRoles[1]);
    //
    //
    // var roleSetString = "[";
    // for (let pair of rolesUserArr) roleSetString +=`{"id":${pair[0]}, "name":"${pair[1]}","authority":"${pair[1]}", "unRole": "${pair[1].replace('ROLE_','')}"},`;
    // roleSetString =  roleSetString.slice(0, -1);
    // roleSetString += "]";
    // var roleSet = JSON.parse(roleSetString);
    //
    // console.log("roleSet" + roleSet);

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
            roles:
                [
        {
            id: 1,
            role: "ROLE_USER",
            authority: "ROLE_USER",
            unRole: "USER"
        },
        {
            id: 2,
            role: "ROLE_ADMIN",
            authority: "ROLE_ADMIN",
            unRole: "ADMIN"
        }
    ]
        })
    })
        .then(res => res.json())
        .then(data => console.log(data))
        // .then(data => {
        //     const dataArr = [];
        //     dataArr.push(data);
        //     usersCreate(dataArr);
        //     location.reload();
        // })
})

let roleArray = (options) => {
    let array = []
    for (let i = 0; i < options.length; i++) {
        if (options[i].selected) {
            let role = {id: options[i].value}
            array.push(role)
        }
    }
    return array
}






