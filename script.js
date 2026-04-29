const bancoPreguntas = {
quimica: {
imagen: "https://cdn-icons-png.flaticon.com/512/2913/2913465.png",
preguntas: [
["¿Símbolo del Oxígeno?","O"],
["¿Número atómico del Carbono?","6"],
["¿Fórmula del agua?","H2O"],
["¿Estado del mercurio?","liquido"],
["¿Partícula con carga negativa?","electron"],
["¿pH neutro?","7"],
["¿Gas necesario para combustión?","oxigeno"],
["¿Tabla creada por?","mendeleiev"],
["¿Enlace entre metales?","metalico"],
["¿Unidad de masa atómica?","uma"],
["¿Átomo más pequeño?","hidrogeno"],
["¿Sal común fórmula?","nacl"],
["¿Proceso de fotosíntesis produce?","oxigeno"],
["¿Mezcla homogénea?","solucion"],
["¿Cambio sólido a gas?","sublimacion"],
["¿Partícula positiva?","proton"],
["¿Centro del átomo?","nucleo"],
["¿Escala temperatura científica?","kelvin"],
["¿Metal líquido?","mercurio"],
["¿Ciencia que estudia materia?","quimica"]
]},
matematicas: {
imagen: "https://cdn-icons-png.flaticon.com/512/2920/2920244.png",
preguntas: [
["¿Resultado 5x5?","25"],
["¿Raíz de 81?","9"],
["¿Valor de pi (3 dec)?","3.14"],
["¿Área cuadrado lado 4?","16"],
["¿Suma ángulos triángulo?","180"],
["¿Hipotenusa en triángulo?","pitagoras"],
["¿10% de 200?","20"],
["¿Fracción de 0.5?","1/2"],
["¿Número primo menor que 10?","7"],
["¿Perímetro círculo?","2pir"],
["¿Área triángulo?","basealtura/2"],
["¿Ecuación recta?","y=mx+b"],
["¿100/4?","25"],
["¿3²?","9"],
["¿Media de 2,4,6?","4"],
["¿Polígono 5 lados?","pentagono"],
["¿Ángulo recto?","90"],
["¿Factorial 3?","6"],
["¿Número par?","2"],
["¿Sistema decimal base?","10"]
]},
espanol: {
imagen: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
preguntas: [
["¿Sinónimo de feliz?","alegre"],
["¿Antónimo de grande?","pequeño"],
["¿Verbo en pasado de correr?","corrio"],
["¿Sujeto en oración?","quien realiza accion"],
["¿Palabra aguda ejemplo?","cafe"],
["¿Palabra esdrújula ejemplo?","telefono"],
["¿Signos de interrogación?","¿ ?"],
["¿Plural de lápiz?","lapices"],
["¿Género de mesa?","femenino"],
["¿Artículo definido?","el"],
["¿Conector de causa?","porque"],
["¿Sinónimo de rápido?","veloz"],
["¿Oración tiene?","sujeto y predicado"],
["¿Tiempo presente ejemplo?","corro"],
["¿Adjetivo describe?","sustantivo"],
["¿Sustantivo propio?","mexico"],
["¿Uso de coma?","pausa"],
["¿Prefijo anti?","oposicion"],
["¿Diptongo ejemplo?","cielo"],
["¿Lengua oficial México?","español"]
]}
};

let materiaActual = "";

function cargarMateria(materia){
    materiaActual = materia;
    document.getElementById("imagenMateria").src = bancoPreguntas[materia].imagen;

    const contenedor = document.getElementById("preguntas");
    contenedor.innerHTML = "";

    bancoPreguntas[materia].preguntas.forEach((p,i)=>{
        contenedor.innerHTML += `
        <div class="pregunta">
            <label>${i+1}. ${p[0]}</label><br>
            <input type="text" id="p${i}">
        </div>`;
    });

    document.getElementById("resultado").innerText="";
}

function calcularPuntaje(){
    let puntos = 0;
    bancoPreguntas[materiaActual].preguntas.forEach((p,i)=>{
        const resp = document.getElementById("p"+i).value.toLowerCase().trim();
        if(resp === p[1]) puntos++;
    });

    document.getElementById("resultado").innerText =
        "Tu puntaje es: "+puntos+" / 20";
}