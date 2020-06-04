function errorfunction() {
    alert("Sorry! This function will not work because i don't know how to do it :)")
}
function showErrorMsg() {
    var x = document.getElementById("h6"); // h6 is
    if (x.style.display === "none") {
        x.style.display = "block";
    }
}
//
function check() {
    var us = document.getElementById("Username");
    var user = us.value;
    var pw = document.getElementById("Password");
    var pwd = pw.value;
    if (user == "" || pwd == "") {
        showErrorMsg();
    }
    else {
        goto();
    }
}
// Save password to cookie
function savePwd2Cookie() {
    alert("Task is not completed!")
}
// eye
function eyec() {
    var v1 = document.getElementById("Password");
    var v2 = v1.value;
    if (v2 == "") {
        alert("Fill the Password!");
    }
    else {
        eyecc()
    }
}
function eyecc() {
    var v1 = document.getElementById("Password");
    if (v1.type == "password") {
        v1.type = "text"
    }
    else {
        v1.type = "password"
    }
}
//res
function goto() {
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
    // gotoo();
}

function handleLoginResponse(response) {
    if (response && response.status == 200) { // successfully login
        div3();
    } else {
        alert("Login failed!");
    }
}
//res2
function gotoo() {
    if (this.status == 200) {
        div3();
    }
    else {
        alert("Check your elements again!" + this.status);
    }
}
//div3
function div3() {
    div1 = document.getElementById("login")
    div1.style.display = "none";
    div3 = document.getElementById("calculator");
    div3.style.display = "block";
}