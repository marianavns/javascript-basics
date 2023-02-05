/* 
   FUNÇÃO REFERENCIADA DIRETAMENTE NO ELEMENTO DO HTML, QUANDO O EVENTO CLICAR ACONTECE, E CONFIGURADA NO JS
    onclick=calculaSoma()
    NÃO É A MELHOR MANEIRA
*/

function calculaSoma() {
    let primeiraEntradaNoJS = document.getElementById('primeiroNumero') // CAPTURAR TODOS OS ELEMENTOS NECESSÁRIOS DO HTML
    let segundaEntradaNoJS = document.getElementById('segundoNumero')
    let resposta = document.getElementById('resposta')
    let n1 = Number(primeiraEntradaNoJS.value)                          // TRATAR OS ELEMENTOS HTML, SE NECESSÁRIO
    let n2 = Number(segundaEntradaNoJS.value)
    let soma = n1 + n2                                                  // MANIPULAR OS DADOS (SCRIPT REAL)
    resposta.innerHTML = `A soma entre ${n1} e ${n2} é ${soma}.`        // ENVIAR A RESPOSTA PARA O HTML, NO LOCAL CERTO
}



/*
    FUNCIONALIDADE REFERENCIADA E CONFIGURADA 100% NO JS, "OUVINDO" ETERNAMENTE O ELEMENTO HTML E O EVENTO QUE PODE VIR DELE
    let botaoSubtracao = document.getElementById('botaoDeSubtracao') --> botaoSubtracao.addEventListener("click",funcaoANONIMA)
*/
                    
let botaoSubtracao = document.getElementById('botaoDeSubtracao')    // IMPORTAR O ELEMENTO A SER "OUVIDO", O BOTÃO DE SUBTRAIR             
botaoSubtracao.addEventListener(                                    // INSERIR O LISTENER NO BOTÃO. DEFININDO
    "click",                                                        // (a) que evento será ouvido 
    () => {                                                         // (b) o que acontecerá, via FUNÇÃO ANÔNIMA
        let n1 = capturaEntrada('primeiroNumero');
        let n2 = capturaEntrada('segundoNumero');
        let subtracao = n1 - n2
        capturaResposta("resposta").innerHTML = `A subtração entre ${n1} e ${n2} é ${subtracao}.`;
    } 
)


// FUNÇÕES DE AJUDA PARA SIMPLIFICAR OS CÓDIGOS DA SUBTRAÇÃO

function capturaEntrada(elementID){
    let entrada = document.getElementById(elementID);
    let valorEntrada = Number(entrada.value)
    return valorEntrada
}

function capturaResposta(elementID){
    let resposta = document.getElementById(elementID);
    return resposta
}