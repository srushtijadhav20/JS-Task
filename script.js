var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}
        


function readFormData() {
    var formData = {};
    
    formData["fullName"] = document.getElementById("fullName").value;
    formData["age"] = document.getElementById("age").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["email"] = document.getElementById("email").value;
    formData["Remarks"] = document.getElementById("Remarks").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.age;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.email;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.Remarks;

    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a onClick="onEdit(this)"><button class="button">Edit</button></a>
                       <a onClick="onDelete(this)"><button class="button">Delete</button></a>`;
     
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("age").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("email").value = "";
    document.getElementById("Remarks").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("age").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("email").value = selectedRow.cells[3].innerHTML;
    document.getElementById("Remarks").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.age;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.email;
    selectedRow.cells[4].innerHTML = formData.Remarks;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function searchEmail() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput1");
    filter = input.value.toUpperCase();
    table = document.getElementById("employeeList");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[3];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
  function searchName() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("employeeList");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }



//validation
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        alert("FullName must be filled");
    } 
    else{
        
            let regExp = /^[a-zA-Z ]+$/;
            if(!regExp.test(document.getElementById("fullName").value))
             {
              alert("Name must contain string value");
              return false;
             }
         }
    
    if (document.getElementById("age").value =="") {
        isValid = false;
        alert("Age must be filled");   
    } 
    else{
        
            let regExp2 = /^[0-9]+$/;
            if(!regExp2.test(document.getElementById("age").value))
            {
            alert("Age must contain numerical value");
           return false;
            }
        }
    if (document.getElementById("salary").value == "") {
        isValid = false;
        alert("salary must be filled");   
    } 
    else{
        
            let regExp2 = /^[0-9]+$/;
            if(!regExp2.test(document.getElementById("salary").value))
            {
            alert("Salary must contain numerical value");
           return false;
            }
        }
    

    if (document.getElementById("email").value == "") {
        isValid = false;
        alert("Email must be filled");   
    } 
    else{
        
            let regExp3 = /^[a-zA-Z0-9._]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,4}$/;
            if(!regExp3.test(document.getElementById("email").value))
            {
            alert("Enter valid Email format");
           return false;
            }
          
    }
    if (document.getElementById("Remarks").value == "") {
        isValid = false;
        alert("Remarks must be filled");   
    } 
    else{
        let regExp = /^[a-zA-Z ]+$/;
        if(!regExp.test(document.getElementById("Remarks").value))
         {
          alert("Remarks must contain String value");
          return false;
         }
      }
    return isValid;
}

//validation of Form


  //validation of name
  function validateName()
  {
  let regExp = /^[a-zA-Z ]+$/;
  if(!regExp.test(document.forms["employee-form"]["fullName"].value))
   {
    alert("Enter string value");
    return false;
   }
  }
  //validation of Age
  function validateAge()
  {
    let regExp2 = /^[0-9]+$/;
    if(!regExp2.test(document.forms["employee-form"]["age"].value))
    {
    alert("Enter numerical value");
   return false;
    }
  }
  //validation of Salary
  function validateSalary()
  {
    let regExp2 = /^[0-9]+$/;
    if(!regExp2.test(document.getElementById(salary).value))
    {
    alert("Enter numerical value");
   return false;
    }
  }
  //validation of Remarks
  function validateRemark()
  {
    let regExp = /^[a-zA-Z ]+$/;
    if(!regExp.test(document.forms["employee-form"]["Remarks"].value))
     {
      alert("Enter string value");
      return false;
     }
  }
  //validation of Email ID
  function validateEmail()
  {
    let regExp3 = /^[a-zA-Z0-9._]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,4}$/;
    if(!regExp3.test(document.forms["employee-form"]["email"].value))
    {
    alert("Enter valid Email");
   return false;
    }
  }
  
  
  
  
  
  
  
  
  
  
  

  
 