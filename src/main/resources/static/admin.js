
fetch("api/admin").then((data) =>{
   return data.json();// converted to object
}).then((objectData)=>{
   let tableData = "";
   objectData.map((value)=>{
    tableData+=`<tr style="background-color:rgba(58,74,74,0.06)" >

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
                                                th:data-target= "#editModal">
                                            Edit
                                        </button>
                                    </td>
                                     <!-- Modal -->
                                    <div class="modal fade" th:id="editModal" data-backdrop="static"
                                         data-keyboard="false"
                                         tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="editModalLabel">Edit user</h5>
                                                    <button type="button" class="btn-close" data-dismiss="modal"
                                                            aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <form th:method="PATCH"
                                                          th:action=" "
                                                          style="margin:0 auto; text-align: center; width: 300px"
                                                          th:object="">
                                                        <div class="form-group">
                                                            <label for="id"><strong>ID</strong></label>
                                                            <input type="text" class="form-control"
                                                                   th:value="" id="id" name ="Id"/>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="firstname"><strong>First name</strong></label>
                                                            <input type="text" class="form-control"
                                                                   th:value="" id="firstname"
                                                                   name ="Firstname">
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="lastname"><strong>Last name</strong></label>
                                                            <input type="text" class="form-control"
                                                                   th:value="" id="lastname"
                                                                   name ="Lastname">
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="age1"><strong>Age</strong></label>
                                                            <input type="number"  size="1" name="Age" min="1" max="150" step="1"
                                                                   class="form-control"
                                                                   th:value=""id="age"
                                                            >
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="email"><strong>Email</strong></label>
                                                            <input type="email" class="form-control"
                                                                   th:value="" id="email"
                                                                   name ="Email">
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="password"><strong>Password</strong></label>
                                                            <input type="password" class="form-control"
                                                                   th:value="" id="password"
                                                                   name ="Password">
                                                        </div>
                                                        <div class="form-group">
                                                            <label><strong>Role</strong></label>
                                                             <select th:value="" name="roles" class="form-control bg-body-secondary form-control-sm  text-muted field left"
                                                                     multiple id="roles" style="height: 60px"  value="11" readonly>
                                                                <option th:each=""
                                                                        th:value=""
                                                                         name="id"/>
                                                            </select>
                                                        </div>

                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary"
                                                                    data-dismiss="modal">Close
                                                            </button>
                                                            <button type="submit" class="btn btn-primary">Edit</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    
                                    <td>
                                        <button type="button" class="btn btn-danger" data-toggle="modal"
                                                role="dialog" th:data-target="#deleteModal">
                                            Delete user
                                        </button>
                                    </td>
                                    <!-- Modal -->
                                        <div class="modal fade" th:id="deleteModal" id="deleteModal" data-backdrop="static"
                                             data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                                             aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="staticBackdropLabel1">Delete
                                                            user</h5>
                                                        <button type="button" class="close" data-dismiss="modal"
                                                                aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div class="modal-body" >
                                                        <form th:method="DELETE"
                                                              th:action=""
                                                              th:object="">
                                                              style="margin:0 auto; text-align: center; width: 300px">
                                                            <div class="form-group">
                                                                <label for="id"><strong>ID</strong></label>
                                                                <input type="text" class="form-control" th:value=""
                                                                       id="id1" name="Id">
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="firstname"><strong>First
                                                                    name</strong></label>
                                                                <input type="text" class="form-control"
                                                                       th:value=""id="firstname1"
                                                                       name="First name">
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="lastname"><strong>Last
                                                                    name</strong></label>
                                                                <input type="text" class="form-control"
                                                                       th:value="" id="lastname1" name="Last name">
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="age"><strong>Age</strong></label>
                                                                <input type="number"  size="1" name="Age" min="1" max="150" step="1"
                                                                       class="form-control"
                                                                       th:value=""id="age1"
                                                                       >
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="email"><strong>Email</strong></label>
                                                                <input type="email" class="form-control"
                                                                       th:value="" id="email1"
                                                                       name ="Email">
                                                            </div>
                                                            <div class="form-group">
                                                                <label><strong>Role</strong></label>
                                                                <select th:value="" name="roles" class="form-control bg-body-secondary form-control-sm  text-muted field left" multiple id="validationServer006" style="height: 60px"  value="11" readonly>
                                                                    <option th:each=""
                                                                            th:value=""
                                                                            th:text=""  name="id"/>
                                                                </select>
                                                            </div>
                                                            <button type="submit" class="btn btn-primary">Delete</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </tr>`;
   });
   document.getElementById("users")
   .innerHTML = tableData;

})
