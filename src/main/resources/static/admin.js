fetch("api/admin").then((data) =>{
   //console.log(data);
   return data.json();// converted to object
}).then((objectData)=>{
   console.log(objectData[0].firstname);
   let tableDate= "";
   objectData.map((value)=>{
    tableData=`${value.id}`
   });
   document.getElementById("users")
   .innerHTML = tableData;

})
