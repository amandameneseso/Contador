let ultimoCalculo = { // Variável global para armazenar o cálculo anterior
    numero: null,
    lim: null,
    resultados: []
};

function tabuada() {
    let num = document.getElementById('txtn');
    let tab = document.getElementById('seltab');
    let lim = document.getElementById('txtlim'); // Multiplicador máximo

    if (num.value.length == 0) {
        window.alert ('Por favor, digite um número!');
        return;
    }

    let n = Number(num.value);
    let l = lim.value.length > 0 ? Number(lim.value) : 10 // Determina o limite, com valor padrão de 10 se não for fornecido

    tab.innerHTML = ''; // limpa o select antes de exibir nova tabuada
    tab.size = "10";

    let resultados = [];
    for (let c = 1; c <= l; c++) { // multiplica até o limite
        let item = document.createElement('option');
        let texto = `${n} x ${c} = ${n*c}`;
        item.text = texto;
        item.value = `tab${c}`;
        tab.appendChild(item);
        resultados.push(texto);
    }

    ultimoCalculo = {numero: n, lim: l, resultados: resultados}
}

function limpar() {
    seltab.innerHTML = ('<option>Digite outro valor</option>');
    seltab.size = 1;
    document.getElementById('txtlim').value = '';
    document.getElementById('txtn').value = '';
}

function lembrar() {
    let num = document.getElementById('txtn');
    let tab = document.getElementById('seltab');
    let lim = document.getElementById('txtlim');

    // Verifica se há um cálculo salvo
    if (ultimoCalculo.numero !== null && ultimoCalculo.lim !== null) {
        num.value = ultimoCalculo.numero;
        lim.value = ultimoCalculo.lim;

        // Restaura os resultados no select
        tab.innerHTML = '';
        tab.size = "10";
        ultimoCalculo.resultados.forEach((texto, index) => {
            let item = document.createElement('option');
            item.text = texto;
            item.value = `tab${index + 1}`;
            tab.appendChild(item);
        });
    }   else {
        window.alert('Nenhum cálculo anterior encontrado!');
    }
}   
