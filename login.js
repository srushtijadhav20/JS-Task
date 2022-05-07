const loginForm = document.getElementById("loginform");


function loginFun(){
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "test@cronj.com" && password === "123") {
        alert("You have successfully logged in.");
        window.open('employee.html')
       
    } else {
        alert("Invalid Username and/or password");
         }
}
