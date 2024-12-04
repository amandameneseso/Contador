function contar () {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let intervalo = document.getElementById('txtt')
    let resultado = document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value.length == 0) { // verificação de valores vazios
        resultado.innerHTML = 'Opa, você esqueceu de digitar um valor. Tente novamente!'
        return; // Impede a execução do código abaixo se algum valor estiver vazio
    } else {
        resultado.innerHTML = 'Contando... <br>'

        // convertendo valores para números:
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let t = Number(intervalo.value)

        if (t <= 0 || intervalo.value.length == 0) { // validação do intervalo (valor zero ou negativo)
            window.alert ('Intervalo inválido ou não informado. Considerando intervalo = 1.')
            t = 1
        }

        if (i < f) {
            for(let c = i; c <= f; c += t) { // contagem crescente
                resultado.innerHTML += ` ${c} \u{1F449} `
            }
        }   else {
            for(let c = i; c >= f; c -= t) { // contagem decrescente
                resultado.innerHTML += ` ${c} \u{1F449} `
            }
        }
        resultado.innerHTML += ` \u{1F3C1} `
    }
}

function limpar() {
    document.getElementById('txti').value = '';
    document.getElementById('txtf').value = '';
    document.getElementById('txtt').value = '';
    resultado.innerHTML = `<p>Preparando a contagem...</p>`
}