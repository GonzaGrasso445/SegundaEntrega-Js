const footer = document.getElementById("footer");
const footerContent = document.createElement("div");
const footerSubContent=document.createElement("div");
footerSubContent.style.display="flex"
footerSubContent.style.flexDirection="row"
footerSubContent.style.justifyContent="space-around"
const imagefooter = document.createElement("img");imagefooter.src="https://i.pinimg.com/736x/4a/02/93/4a0293eb2c313ef422f4f5fbc8c057cf.jpg";imagefooter.alt = "logo de intagram"
imagefooter.style.width="50px"
imagefooter.style.height="50px"
const imagefooter1 = document.createElement("img");imagefooter1.src="https://i.pinimg.com/564x/7f/e9/d7/7fe9d7012076dbda78e984253ee79f49.jpg";imagefooter1.alt = "logo de x"
imagefooter1.style.width="50px"
imagefooter1.style.height="50px"
const imagefooter2 = document.createElement("img");imagefooter2.src="https://i.pinimg.com/564x/58/a9/5d/58a95d64b8b0e54f4664ba7bf4c8932a.jpg";imagefooter2.alt = "logo de wa"
imagefooter2.style.width="50px"
imagefooter2.style.height="50px"

const descriptionFooter = document.createElement('h3');
descriptionFooter.innerHTML = "Nike Company, all rights reserved";
descriptionFooter.style.color="white";
descriptionFooter.style.marginTop="30px";
footer.appendChild(footerContent);
footerSubContent.appendChild(imagefooter);
footerSubContent.appendChild(imagefooter1);
footerSubContent.appendChild(imagefooter2);
footerContent.appendChild(footerSubContent);
footerContent.appendChild(descriptionFooter);
