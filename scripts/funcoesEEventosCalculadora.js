function calculaSoma() {

    // CAPTURAR TODOS OS ELEMENTOS NECESSÁRIOS DO HTML
    let primeiraEntradaNoJS = document.getElementById('primeiroNumero')
    let segundaEntradaNoJS = document.getElementById('segundoNumero')
    let resposta = document.getElementById('resposta')

    // TRATAR OS ELEMENTOS HTML, SE NECESSÁRIO
    let n1 = Number(primeiraEntradaNoJS.value)
    let n2 = Number(segundaEntradaNoJS.value)
    
    // MANIPULAR OS DADOS (SCRIPT REAL)
    let soma = n1 + n2

    // ENVIAR A RESPOSTA PARA O HTML, NO LOCAL CERTO
    resposta.innerHTML = `A soma entre ${n1} e ${n2} é ${soma}.`
}

function calculaSubtracao() {
    let n1 = capturaEntrada('primeiroNumero');
    let n2 = capturaEntrada('segundoNumero');
    let resposta = capturaResposta('resposta')
    let subtracao = n1 - n2
    resposta.innerHTML = `A subtração entre ${n1} e ${n2} é ${subtracao}.`
}

function calculaMultiplicacao() {
    let n1 = capturaEntrada('primeiroNumero');
    let n2 = capturaEntrada('segundoNumero');
    let resposta = capturaResposta('resposta')
    let multiplicacao = n1 * n2
    resposta.innerHTML = `A multiplicação entre ${n1} e ${n2} é ${multiplicacao}.`
}

function calculaDivisao() {
    let n1 = capturaEntrada('primeiroNumero');
    let n2 = capturaEntrada('segundoNumero');
    let resposta = capturaResposta('resposta')
    let divisao = n1 / n2
    resposta.innerHTML = `A divisão entre ${n1} e ${n2} é ${divisao}.`
}

function capturaEntrada(elementID){
    let entrada = document.getElementById(elementID);
    let valorEntrada = Number(entrada.value)
    return valorEntrada
}

function capturaResposta(elementID){
    let resposta = document.getElementById(elementID);
    return resposta
}