let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 10;
//arreglo para contener numeros sorteados
let listaSorteados = [];

//funcion insertar texto en un elemento
function asignarTexto(elemento, texto){
    let selector = document.querySelector(elemento);
    selector.innerHTML = texto;
}

//función al oprimir el boton intentar
function verificarIntento(){
    let numeroUsuario = document.getElementById('numeroUsuario').value;
    //console.log(numeroUsuario, numeroSecreto);
    console.log(numeroSecreto == numeroUsuario);
    console.log(intentos);
    if (numeroUsuario == numeroSecreto){
        asignarTexto('p', `${intentos < 3 ? '¡Nada mal, extra! Acertaste, el número era ' : '¡Pudiste hacerlo mejor! De todas maneras llegaste al número'}${numeroSecreto}. Número de intentos: ${intentos}`);
        //limpiar caja de input
        limpiarInput();
        //quitar caracteristica disable
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario < numeroSecreto){
            asignarTexto('p', `¡Hah! Qué mal, el número secreto es mayor a ${numeroUsuario}`);
        } else {
            asignarTexto('p', `¡Aún no me derrotas! El número secreto es menor a ${numeroUsuario}`);
        }
        //sumar intentos
        intentos++
        //limpiar caja del input
        limpiarInput();
    }
    return
}

function limpiarInput(){
    document.getElementById('numeroUsuario').value = '';
    
}

function generarNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroSecreto, listaSorteados);
    //si ya sorteamos todos los numeros
    if (listaSorteados.length == numeroMaximo){
        asignarTexto('p', `Has sorteado todos los números disponibles`);
    } else {
        //si el numero esta en la lista
        if (listaSorteados.includes(numeroSecreto)){
        return generarNumeroSecreto();
        } else {
        //si no esta, se incluye nuevo numero
        listaSorteados.push(numeroSecreto);
        return numeroSecreto;
        }
    }
}

function condicionesIniciales(){
    //reestablecer mensajes
    asignarTexto('h1', 'Adivina el número secreto');
    asignarTexto('p', `¡Oi, Extra! Escoge un número del 1 al ${numeroMaximo}`);
    //generar numero secreto
    numeroSecreto = generarNumeroSecreto();
    //reestablecer numero de intentos
    intentos = 1;
}

function reiniciarJuego(){
    condicionesIniciales();
    //añadir caracteristica disable
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();