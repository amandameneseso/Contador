function insert (num) {
    let numero = document.getElementById('calculo').innerHTML
    document.getElementById('calculo').innerHTML = numero + num
}

function limpar() {
    document.getElementById('calculo').innerHTML = ''
}

function voltar() {
    let calculo = document.getElementById('calculo').innerHTML;
    document.getElementById('calculo').innerHTML = calculo.substring(0, calculo.length -1)
}

function calcular() {
    let calculo = document.getElementById('calculo').innerHTML;
    if(calculo) {
        document.getElementById('calculo').innerHTML = eval(calculo);
    }   else {
        document.getElementById('calculo').innerHTML = "0"
    }
}