// ==============================
// BUSCADOR DE VALORES
// ==============================

function buscarValor() {

    let entrada = document.getElementById("buscador").value.toLowerCase();

    let secciones = document.querySelectorAll("section");

    secciones.forEach(function(seccion){

        if(seccion.textContent.toLowerCase().includes(entrada)){
            seccion.style.display = "block";
        }else{
            seccion.style.display = "none";
        }

    });

}


// ==============================
// QUIZ
// ==============================

function respuestaCorrecta(){

    document.getElementById("resultado").innerHTML =
    "✅ ¡Correcto! El respeto es un valor fundamental.";

}

function respuestaIncorrecta(){

    document.getElementById("resultado").innerHTML =
    "❌ Incorrecto. Esa opción no representa un valor.";

}


// ==============================
// FORMULARIO
// ==============================

function validarFormulario(event){

    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let mensaje = document.getElementById("mensaje").value;

    if(nombre=="" || correo=="" || mensaje==""){

        alert("Complete todos los campos.");

        return;

    }

    alert("Formulario enviado correctamente.");

}