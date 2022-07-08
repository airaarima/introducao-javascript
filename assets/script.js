var numInicial = document.getElementById("contando");
var contando = 0;

function increment() {
    contando++;
    numInicial.innerHTML = contando;
}

function decrement() {
    contando--;
    numInicial.innerHTML = contando;
}

