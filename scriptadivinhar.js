let numeroAleatorio = 0
let tentativas = 0

function gerarNumero() {
    numeroAleatorio = parseInt(Math.random()*101) // gera um numero aleatorio inteiro de 0 a 100
    console.log (numeroAleatorio) 
    tentativas = 0 // Reinicia as tentativas
}

gerarNumero() // Chama a função para gerar o número ao carregar o script

function verificarNumero() {
    const tentativaInput = document.getElementById('txtn');
    let tentativa = tentativaInput.value;

    if (tentativa === '') {
        window.alert('Por favor, insira um número!');
        return;
    }

    tentativa = Number(tentativa)

    if (tentativa > 100 || tentativa < 0) {
        window.alert('O número deve estar entre 0 e 100!')
        tentativaInput.value = '' // Limpa o input
        return
    }   
    
    tentativas++; // Incrementa as tentativas antes de verificar
    
    if (tentativa > numeroAleatorio) {
        window.alert('O número é menor!')
    }   else if (tentativa < numeroAleatorio) {
        window.alert('O número é maior!')
    }   else {
        window.alert(`Parabéns! Você acertou após ${tentativas} tentativa(s).`)
        gerarNumero(); // Reinicia o jogo
    }
    tentativaInput.value = ''; // Limpa o input após cada tentativa
}