const section = document.querySelector(".content");
const btn = document.querySelector("#start-btn");
const email = document.querySelector("#email-box");
const lbl = document.createElement("label");
const img = document.createElement("img");
function printValue(e){
    e.preventDefault();
    section.appendChild(lbl);
    alert(email.value);
    lbl.innerText = "Welcome, " + email.value;
    lbl.style.color = "red";
    lbl.style.fontSize ="40px";
    img.style.width = "300px"
    img.src = "/images/3d.png"
    section.appendChild(img);
 }

 function onHover() {
img.style.width = "500px"
 }
 function onLeave(){
    img.style.width = "300px"
 }

 
btn.addEventListener("click", printValue);
img.addEventListener("mouseover", onHover);
img.addEventListener("mouseout", onLeave);

function loadData(){
   const div = document.createElement("div");
   const lbl = document.createElement("label");
   const lbl1 = document.createElement("label");
   const p = document.createElement("p");
   const p1 = document.createElement("p")
   
   fetch('https://jsonplaceholder.typicode.com/todos/1')
   .then(response => response.json())
   .then((json) => {
      p.innerText=json["title"];
      p1.innerText = json["completed"];
      lbl.innerText = "Title of Work";
      div.appendChild(lbl);
      div.appendChild(p);
      div.appendChild(p1)
      section.appendChild(div);
     
   })
 }
loadData();