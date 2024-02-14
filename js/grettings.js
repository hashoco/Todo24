//const loginForm = document.getElementById("login-form");
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const gretting = document.querySelector("#gretting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    //자동으로 새로고침 을 방지하기 위함.
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);

}

function paintGreetings(username){
    gretting.classList.remove(HIDDEN_CLASSNAME);
    gretting.innerText = `Hello ${username}`;
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null){
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   loginForm.addEventListener("submit",onLoginSubmit);
}else{
    paintGreetings(saveUsername);
    
}