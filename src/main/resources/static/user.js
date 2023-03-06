const url = "api/user";
const userTable = document.getElementById("user-info");

// fetch(url)
//
//     .then(res => res.json())
//     .then(data => console.log(data))
//      .catch(error => console.log(error))



let userShow = " ";



const userInfo = (user) => {

    userShow += `
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
</tr>`


    userTable.innerHTML = userShow;
}

fetch(url)
    .then(res => res.json())
    .then(data => userInfo(data))
    .catch(error => console.log(error))

