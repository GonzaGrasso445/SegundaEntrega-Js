
let formulario = document.getElementById("formulario");
let nombreForm = document.getElementById("nombreForm");
let apellidoForm = document.getElementById("apellidoForm");
let telForm = document.getElementById("telForm");
let emailForm = document.getElementById("emailForm");
let compraForm = document.getElementById("compraForm");
let textForm = document.getElementById("textForm");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(`Se registró un mensaje del cliente: ${nombreForm.value} ${apellidoForm.value}  . La forma de comunicarse es al teléfono: ${telForm.value}, Email: ${emailForm.value}` );
    console.log(`El mensaje es el siguiente: ${textForm.value} `);
});


let button = document.getElementById("inputcentrado1")

button.addEventListener("click", () => {
    button.style.backgroundColor = "black";
    button.style.color = "white";
})


