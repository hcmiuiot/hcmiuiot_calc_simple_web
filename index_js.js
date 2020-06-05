// Save password to cookie (Not Complete!)
function savePwd2Cookie() {
    alert("Task is not completed!");
}
//-------------------------------------------------------------------------------------------------
// Forgot password (Not Complete!)
function errorfunction() {
    alert("Sorry! This function will not work because i don't know how to do it :)");
}
//-------------------------------------------------------------------------------------------------
// Show the Password Function
function showPwd() {
    var pwd = document.getElementById("Password");
    var pwdValue = pwd.value;
    if (pwdValue == "") {
        alert("Fill the Password!");
    }
    else {
        changePwdType();
    }
function changePwdType() {
    var pwd = document.getElementById("Password");
    if (pwd.type == "password"){
        pwd.type = "text"
        var eyeIcon = document.getElementById("eyeIcon");
        eyeIcon.src= "eye.png"
    }
    else {
        pwd.type = "password"
        var eyeIcon = document.getElementById("eyeIcon");
        eyeIcon.src = "eye-slash.webp"
    }
}
}
//-------------------------------------------------------------------------------------------------
// Check Login Element - Post to server
function loginCheck() {
    var username = document.getElementById("Username");
    var usernameValue = username.value;
    var pwd = document.getElementById("Password");
    var pwdValue = pwd.value;
    if (usernameValue == "" || pwdValue == "") {
        showErrorMsg();
    }
    else {
        request2Sver();
    }
}
// Show the Err: Fill Us.name and Pwd both
function showErrorMsg() {
    var x = document.getElementById("h6"); // h6 is
    if (x.style.display === "none") {
        x.style.display = "block";
    }
}
// Request to Server
function request2Sver() {
    var usernameElement = document.getElementById("Username");
    var user = usernameElement.value;
    var pwdElement = document.getElementById("Password");
    var pwd = pwdElement.value;

    axios.post("http://localhost:5000/login", {
        username: user,
        password: pwd
    })
        .then(function (response) {
            console.log(response);
            handleLoginResponse(response);
        });
}

function handleLoginResponse(response) {
    if (response && response.status == 200) { // successfully login
        calcDiv();
    } else {
        alert("Login failed!");
    }
}
// Show the Calculator Div
function calcDiv() {
    div1 = document.getElementById("login")
    div1.style.display = "none";
    calcDiv = document.getElementById("calculator");
    calcDiv.style.display = "block";
}