let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Escoge un número del 1 al 10';

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
    return;
}


function verificarIntento () {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        }
        else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja () {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto () {
    let numeroSecreto = Math.floor(Math.random()*numeroMaximo) + 1;

    console.log(numeroSecreto);
    console.log(numerosSorteados);

    //Si ya sorteamos todos los numeros
    if (numerosSorteados,length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
        //si el numero generado está incluido en la lista
        if (numerosSorteados.includes(numeroSecreto)) {
            return generarNumeroSecreto();
        } else {
            numerosSorteados.push(numeroSecreto);
            return(numeroSecreto);
        }
    }
    
}

function condicionesIniciales () {
    asignarTextoElemento ('h1', 'Juego del Número Secreto');
    asignarTextoElemento ('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego (){
    //limpiar caja
    limpiarCaja();
    //Restablecer las condiciones iniciales
    condicionesIniciales();    
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
}

condicionesIniciales();
