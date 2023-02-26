fetch("api/admin").then((data) => {
   return data.json();// converted to object
}).then((objectData) => {
   let tableData = "";
   objectData.map((value) => {
      tableData += `<tr>
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
   document.getElementById("users")
       .innerHTML = tableData;

})
