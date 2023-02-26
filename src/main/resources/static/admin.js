
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
                                    <td>${value.role}</td>
                                </td>
                                    <td>
                                        <button type="button" class="btn btn-info" data-toggle="modal" role="dialog">
                                            Edit
                                        </button>
                                    </td>
                                    
                                    <td>
                                        <button type="button" class="btn btn-danger" data-toggle="modal"
                                                role="dialog" >
                                            Delete user
                                        </button>
                                    </td>
                                </tr>`;
   });
   document.getElementById("users")
   .innerHTML = tableData;

})
