/*  # # # # # #  CRIAÇÃO  DE  OBJETOS   NO   JAVASCRIPT  # # # # # #  */ 


/* ### CRIANDO UM OBJETO PELA NOTAÇÃO LITERAL DE OBJETO ### */ 

const bicicleta = {
    cor : "branca",
    marchas : 10,
    ano: 2017,
    marca : "caloi"
}
console.log("A marca da bicicleta é " + bicicleta.marca)



/* ### CRIANDO UM OBJETO PELO CONSTRUTOR ### */ 

function Bicicleta (cor, marchas, ano, marca){
    this.cor = cor;
    this.marchas = marchas;
    this.ano = ano;
    this.marca = marca
}
const bicicletaCriada = Bicicleta("azul", 10, 2015, "Caloi")
console.log(bicicletaCriada)



            // Não funciona, pois Arrow Functions não podem ser construtores
            Casa = (cor, andares) => {
                this.cor = cor;
                this.andares = andares;
            }
            casa1 = new Casa("branca", 2);
            console.log(casa1)
            // Não funciona, pois Arrow Functions não podem ser construtores



/* ### CRIANDO UM OBJETO PELA CLASSE ### */

class BikeClass {
    constructor(cor, marchas, marchaAtual) {
        this.cor = cor;
        this.marchas = marchas;
        this.marchaAtual = marchaAtual
    }
    mudarMarcha(direcao){
        if (direcao === "paraCima" && marchaAtual < marchas) {
            marchaAtual =+ 1
        }      
        if (direcao === "paraBaixo" && marchaAtual > 1){
            marchaAtual =- 1
        }
        console.log("Marcha atual: " + marchaAtual)
    }
}
const bicicletaDaClasse = new Bike ("branca", 10, 2);
bicicletaDaClasse.mudarMarcha("paraCima")