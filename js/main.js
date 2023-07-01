const section = document.querySelector(".content");
const btn = document.querySelector("#start-btn");
const email = document.querySelector("#email-box");
const lbl = document.createElement("label");

function printValue(e){
    e.preventDefault();
    section.appendChild(lbl);
    alert(email.value);
    lbl.innerText = "Welcome, " + email.value;
}
btn.addEventListener("click", printValue);