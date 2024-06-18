let body = document.getElementById("body");
body.style.backgroundColor ="white";

const principalDiv = document.getElementsByClassName("container");

document.addEventListener('DOMContentLoaded', function() {
    const tituloContacto = document.querySelector('h1.titleContact');
    tituloContacto.textContent = " Shopping";

    
});



const principalHeader = document.getElementById('header');
principalHeader.style.height = "40px";

const navegation = document.createElement('navbar');
const nav = document.createElement('nav');
const ul = document.createElement('ul');
const image = document.createElement("img");image.src="https://www.brandemia.org/wp-content/uploads/2011/09/logo_nike_principal.jpg";image.alt = "logo de nike"

ul.style.display = "flex";
ul.style.flexDirection ="row";
ul.style.justifyContent ="space-around";
image.style.width="30px"
image.style.height="30px"
image.style.padding="5px"



principalHeader.appendChild(navegation);
navegation.appendChild(nav);
nav.appendChild(ul);
ul.appendChild(image);
navegation.className ="navbar";

const links =["Shoes","Buy","Contacts"];


for( const link of links){
   const li = document.createElement('li');
   li.style.padding = "10px";
   li.innerHTML = `<a href="${link.toLowerCase()}.html" >${link}</a>`
   const a = li.querySelector('a');
   a.style.textDecoration = "none"; 
   a.style.color = "black"; 
   a.style.padding = "10px";
   ul.appendChild(li);
}
