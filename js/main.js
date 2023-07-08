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
   // const lbl = document.createElement("label");
   // const img1 = document.createElement("img")
   
   fetch('https://jsonplaceholder.typicode.com/photos')
   .then(response => response.json())
   .then((json) => {
      // imgArr[] = json;
      for (let i= 0 ;i<12;++i ){
        let img1 = document.createElement("img");
        img1.src = json[i]["url"];
        img1.style.width = "200px";
        //style image
        img1.className = "shadow rounded border p-3 m-2"
        

        div.appendChild(img1);
      }
      // console.log(json);
      section.appendChild(div);
     
   })
 }
loadData();