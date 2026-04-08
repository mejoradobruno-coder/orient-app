function mostrarSeccion(id) {
    let secciones = document.querySelectorAll('.seccion');
    secciones.forEach(sec => sec.classList.add('oculto'));
    document.getElementById(id).classList.remove('oculto');
}

function preguntaQuimica() {
    let respuesta = prompt("¿Cuál es el símbolo químico del agua?");
    if (respuesta.toLowerCase() === "h2o") {
        document.getElementById("resultadoQuimica").innerText = "¡Correcto!";
    } else {
        document.getElementById("resultadoQuimica").innerText = "Intenta de nuevo.";
    }
}function preguntaMate() {
    let respuesta = prompt("¿Cuánto es 5 × 6?");
    if (respuesta == "30") {
        document.getElementById("resultadoMate").innerText = "¡Correcto!";
    } else {
        document.getElementById("resultadoMate").innerText = "Intenta de nuevo.";
    }
}

function preguntaEspanol() {
    let respuesta = prompt("¿Qué tipo de palabra es 'rápidamente'?");
    if (respuesta.toLowerCase() === "adverbio") {
        document.getElementById("resultadoEspanol").innerText = "¡Correcto!";
    } else {
        document.getElementById("resultadoEspanol").innerText = "Intenta de nuevo.";
    }
}