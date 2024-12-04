let num = document.querySelector('input#num')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let numeros = []

function isNumero(n) { // valida se o número é válido e converte o valor para número
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    }   else {
        return false
    }
}

function inLista (n, l) { // Função para verificar se o número já está na lista
    if(l.indexOf(Number(n)) != -1) {
        return true
    }   else {
        return false
    }
}

function adicionar() { // Função para adicionar número à lista

    if(isNumero(num.value) && !inLista(num.value, numeros)) {
        numeros.push(Number(num.value))
        let item = document.createElement('option')
        item.textContent = `Número ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = '' // apaga o resultado depois que outro número é adicionado

        // Verifica e remove a opção inicial "Digite um número acima" se existir
        if (lista.options[0].textContent === "Digite um número acima") {
            lista.remove(0); // Remove a primeira opção
        }
        }   else {
            window.alert('Valor inválido ou já encontrado na lista.')
        }

    num.value = ''
    num.focus()
    lista.size = Math.min(numeros.length, 5);
}

function finalizar() {
    if(numeros.length == 0) {
        window.alert ('Digite algum numero!')
    }   else {
        let total = numeros.length
        let maior = Math.max (...numeros)
        let menor = Math.min (...numeros)
        let soma = numeros.reduce((total, item) => total + item, 0)
        let media = (soma / total).toFixed(2).replace('.', ',')

        res.style.display = 'block'; // Torna a div res visível
        res.innerHTML = '' // Limpa o conteúdo anterior
        res.innerHTML += `<p>Ao todo, temos ${total} números adicionados.</p>`
        res.innerHTML += `<p> O maior número é ${maior}.</p>`
        res.innerHTML += `<p> O menor número é ${menor}.</p>`
        res.innerHTML += `<p> A soma dos números é ${soma}.</p>`
        res.innerHTML += `<p> A média dos números é ${media}.</p>`
    }
}

function limpar() {
    lista.innerHTML = ''; // Limpa as opções do select
    res.innerHTML = ''; // Limpa o resultado
    numeros = []; // Esvazia o array de números
    lista.size = 0; // Reduz o tamanho do select para 0
    res.style.display = 'none'; // Esconde a div novamente
}