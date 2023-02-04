/*  # # # # # #  FUNÇÕES   LITERAIS   E   PROTOTIPADAS   # # # # # #  */ 




/* ### FUNÇÃO LITERAL (MAIS COMUM) ### */ 
function calculadoraLiteral (num1, num2){
    return (num1 + num2)
}
let resultadoLiteral = calculadoraLiteral(10, 3)
document.querySelector('#calculadoraLiteral').innerHTML = "O resultado da calculadora literal é " + resultadoLiteral + "."
console.log("O resultado da calculadora literal é " + resultadoLiteral + ".")




/* ### FUNÇÃO PROTOTIPADA (FORMA MAIS INDICADA, PRECISA SER INSTANCIADA) ### */ 
function CalculadoraPrototipada (){
    CalculadoraPrototipada.prototype.somar = function (num1, num2){
        return (num1 + num2)
    }
}
const calculadoraPrototipada1 = new CalculadoraPrototipada;
let resultadoPrototipado = calculadoraPrototipada1.somar(10, 3);
document.querySelector('#calculadoraPrototipada').innerHTML = "O resultado da calculadora prototipada (instanciada) é " + resultadoPrototipado + "."
console.log("O resultado da calculadora prototipada (instanciada) é " + resultadoPrototipado + ".")