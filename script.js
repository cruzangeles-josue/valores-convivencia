// Mensaje al cargar la página
alert("¡Bienvenido a mi sitio web!");

// Mostrar mensaje al presionar un botón
function saludar() {
    alert("Hola, gracias por visitar mi página.");
}

// Cambiar el título principal
function cambiarTitulo() {
    document.getElementById("titulo").innerHTML = "¡Título Modificado con JavaScript!";
}

// Cambiar el color del fondo
function cambiarColor() {
    document.body.style.backgroundColor = "lightblue";
}

// Mostrar la fecha y hora actual
function mostrarFecha() {
    const fecha = new Date();
    document.getElementById("fecha").innerHTML = fecha;
}

// Contador de clics
let contador = 0;

function contarClic() {
    contador++;
    document.getElementById("contador").innerHTML =
        "Has hecho clic " + contador + " veces.";
}