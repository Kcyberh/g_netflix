const btn = document.querySelectoer("#start-btn");
const email = document.querySelector("#email-box");
const lbl = document.querySelector("#lblStatus");

function printValue(){
    alert(email.value);
    lbl.innerText = "Welcome, " + email.value;
}