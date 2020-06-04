
const url = 'http://localhost5000/register';
let header = document.getElementById("ctn");
let btns = header.getElementsByClassName("sign-up");
let display = header.getElementsByClassName("login-container");
let pwd = document.getElementById("password");
let rePwd = document.getElementById("re-password");
let userName = document.getElementById("user-name");
let fullName = document.getElementById ("full-name");
let checked = document.getElementById ("checked");

// post data
const sendHttpRequest = (method, url, data) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open (method, url);
    
    if(data) {
      xhr.setRequestHeader('Content-Type', "application/json");
    }

    xhr.onload = () => {
      console.log(xhr.response);
      resolve(xhr.response);
    };

    xhr.send(JSON.stringify(data));
  });
  return promise;
};

// show/hide login register
function hidden(count) {
  let current = document.getElementsByClassName("hidden");
  current[0].className = current[0].className.replace(" hidden", "");
  display[count].className += " hidden";
}

//check wrong
function check (fullName, userName, pwd, repwd) {
  if (fullName.length > 30 || fullName.length <4) {
    return "full name must be 4 to 30 character";
  }   

  if (userName.length > 16 || userName.length <4) {
    return "user name must be 4 to 16 character";
  }
  if (pwd != repwd) {
    return "invalid username or password"
  } else {
    return "";
  }
}

// click sign up 
btns[1].onclick = () => { 
  let err = check(fullName.value,userName.value,pwd.value, rePwd.value);
  if (err != "") {
    document.getElementsByClassName("inner-text")[0].innerHTML = err;
    pwd.value = "";
    rePwd.value= "";
    userName.value = "";
  } else {
    sendHttpRequest('POST', url, {
      fullname: fullName.value,
      username: userName.value,
      password: pwd.value
    }).then (responseData => {
      console.log(responseData);
    });
  }
}
// click register
btns[0].onclick = () => hidden(0);