const bancoPreguntas = {
quimica: {
imagen: "https://cdn-icons-png.flaticon.com/512/2913/2913465.png",
preguntas: [
["¿Símbolo del Oxígeno?","o"],
["¿Número atómico del Carbono?","6"],
["¿Fórmula del agua?","h2o"],
["¿pH neutro?","7"],
["¿Partícula negativa?","electron"],
["¿Sal común fórmula?","nacl"],
["¿Gas para combustión?","oxigeno"],
["¿Metal líquido?","mercurio"],
["¿Cambio sólido a gas?","sublimacion"],
["¿Centro del átomo?","nucleo"],
["¿Átomo más pequeño?","hidrogeno"],
["¿Escala científica?","kelvin"],
["¿Tabla periódica creada por?","mendeleiev"],
["¿Mezcla homogénea?","solucion"],
["¿Partícula positiva?","proton"],
["¿Ciencia materia?","quimica"],
["¿Enlace metales?","metalico"],
["¿Unidad masa atómica?","uma"],
["¿Fotosíntesis produce?","oxigeno"],
["¿Fórmula del dióxido carbono?","co2"]
]},
matematicas: {
imagen: "https://cdn-icons-png.flaticon.com/512/2920/2920244.png",
preguntas: [
["5x5","25"],["Raíz 81","9"],["10% de 200","20"],["3²","9"],
["Ángulo triángulo","180"],["100/4","25"],["Fracción 0.5","1/2"],
["Número primo <10","7"],["Media 2,4,6","4"],["Ángulo recto","90"],
["Perímetro círculo","2pir"],["Ecuación recta","y=mx+b"],
["Área cuadrado 4","16"],["Polígono 5 lados","pentagono"],
["Factorial 3","6"],["Sistema decimal base","10"],
["Hipotenusa","pitagoras"],["Valor pi","3.14"],
["Área triángulo","basealtura/2"],["Número par","2"]
]},
espanol: {
imagen: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
preguntas: [
["Sinónimo feliz","alegre"],["Antónimo grande","pequeño"],
["Pasado correr","corrio"],["Plural lápiz","lapices"],
["Género mesa","femenino"],["Artículo definido","el"],
["Sinónimo rápido","veloz"],["Adjetivo describe","sustantivo"],
["Sustantivo propio","mexico"],["Prefijo anti","oposicion"],
["Diptongo ejemplo","cielo"],["Lengua México","español"],
["Uso coma","pausa"],["Palabra aguda","cafe"],
["Esdrújula","telefono"],["Oración tiene","sujeto y predicado"],
["Tiempo presente","corro"],["Conector causa","porque"],
["Signos interrogación","¿ ?"],["Sujeto oración","quien realiza accion"]
]}
};

let materiaActual = "";
let preguntas = [];
let indice = 0;
let puntos = 0;
let tiempo = 20;
let intervalo;

function cargarMateria(materia){
    materiaActual = materia;
    preguntas = bancoPreguntas[materia].preguntas;
    document.getElementById("imagenMateria").src = bancoPreguntas[materia].imagen;

    indice = 0;
    puntos = 0;
    mostrarPregunta();
}

function mostrarPregunta(){
    if(indice >= preguntas.length){
        mostrarResultado();
        return;
    }

    tiempo = 20;
    iniciarTemporizador();

    document.getElementById("retro").innerHTML = "";
    document.getElementById("preguntas").innerHTML = `
        <div class="pregunta">
            <label>${preguntas[indice][0]}</label><br>
            <input type="text" id="respuesta">
        </div>
    `;

    document.getElementById("progreso").innerText =
        "Pregunta " + (indice+1) + " / 20";

    document.getElementById("avance").style.width =
        ((indice)/20)*100 + "%";
}

function iniciarTemporizador(){
    clearInterval(intervalo);
    intervalo = setInterval(()=>{
        tiempo--;
        document.getElementById("temporizador").innerText =
            "Tiempo: " + tiempo + "s";

        if(tiempo<=0){
            clearInterval(intervalo);
            verificarRespuesta();
        }
    },1000);
}

function siguientePregunta(){
    verificarRespuesta();
}

function verificarRespuesta(){
    clearInterval(intervalo);

    const resp = document.getElementById("respuesta").value.toLowerCase().trim();
    const correcta = preguntas[indice][1];

    if(resp === correcta){
        puntos++;
        document.getElementById("retro").innerHTML =
            "<span class='correcto'>Correcto ✅</span>";
    }else{
        document.getElementById("retro").innerHTML =
            `<span class='incorrecto'>
            Incorrecto ❌ <br>
            Respuesta: ${correcta}<br>
            Explicación: Repasa este concepto.
            </span>`;
    }

    indice++;

    setTimeout(mostrarPregunta, 1500);
}

function mostrarResultado(){
    document.getElementById("preguntas").innerHTML = "";
    document.getElementById("retro").innerHTML = "";
    document.getElementById("temporizador").innerHTML = "";
    document.getElementById("avance").style.width = "100%";

    let nivel = "";

    if(puntos <=7) nivel = "Principiante";
    else if(puntos <=15) nivel = "Intermedio";
    else nivel = "Experto 🧠";

    document.getElementById("resultadoFinal").innerHTML =
        `Acertaste ${puntos} de 20<br>
         Nivel: ${nivel}`;
}