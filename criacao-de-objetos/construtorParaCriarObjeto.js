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
