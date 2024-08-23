// Criação de objetos

let serie = {
    nome: "The Boys", //chave: valor
    genero: ["Ação", "Paródia", "Heróis"],
    nTemporadas: 4,
    status: "Em andamento",
    classificacao: 18,
    nEpisodios: {
        temp1: 10,
        temp2: 10,
        temp3: 50,
    },
    mostrarCaracteristicas: function () {
        //arrow function nao consegue puxar variaveis globais
        return `O nome da serie é ${this.nome} e a sua classificacao é +${this.classificacao}`; //serie.nome nao sabe o que é serie, pois esta dentro da serie, utilizar .this para referenciar
    },
};

let livro = {
    nome: "Pequeno Principe",
    genero: ["Aventura", "Suspense"],
    estado: "Aberto",
    capa: "Dura",
    statusLeitura: "Concluído",
    paginas: {
        cap1: 12,
        cap2: 14,
        cap3: 15,
        cap4: 17,
        cap5: 11,
    },
    paginaTotal: 69,
    mostrarInfo: function () {
        return `O nome do livro é ${this.nome} e tem ${this.paginaTotal} páginas!`;
    },
};
// console.log(livro.mostrarInfo())

let carro = {
    modelo: "Uno",
    marca: "Fiat",
    ano: 2010,
    kmRodados: 192300,
    fipe: 10300,
    sinistro: true,
    estado: "Conservado",
    defeitos: {
        batido: true,
        pneuGasto: false,
        luzPainel: false,
    },
    mostrarInfo: function () {
        return `O modelo do carro é ${this.modelo} do ano ${this.ano} e está ${this.estado}`;
    },
};

// console.log(carro.mostrarInfo())

let motor = "1000";
let nome = "bmw s1000rr";
let tipo = "esportiva";

let moto = {
    nome: nome,
    tipo: tipo,
    motor: motor,
};

// console.log(moto)

let atleta = {
    nome: "Gabriel Medina",
    esporte: "Surf",
    idade: 28,
};

atleta.nacionalidade = "Brasil";
atleta.medalhas = {
    ouro: 0,
    prata: 0,
    bronze: 1,
};
atleta.celebrarVitoria = () => {
    return "Ganhei!!";
};

// console.log(atleta)
// console.log(atleta.celebrarVitoria())

let obj1 = {
    nome: "Bruce",
    profissao: "Batman",
};

let obj2 = obj1;
obj2.companheiro = "Robin"; //objetos sao referencias, se atribuir o objeto a uma nova variavel ele ira mudar o obj original

// console.log(obj1)
// console.log(obj2)

// Função Construtora

function computador(cpu, gpu, ram, armazenamento) {
    this.cpu = cpu;
    this.gpu = gpu;
    this.ram = ram;
    this.armazenamento = armazenamento;

    this.ligar = function () {
        console.log(`O processador ${this.cpu} esta funcionando.`);
    };
    this.mostrarInfo = function () {
        return `Processador: ${this.cpu}
P.V: ${this.gpu}
Ram: ${this.ram}
Armazenamento: ${this.armazenamento}`;
    };
}

let pc = new computador("i9", "RTX4090", "32Gb", "SSD 500Gb");

// console.log(pc.mostrarInfo())

// Função de criação de objetos

function jogos(titulo, genero, anoLancamento, empresa, jogar) {
    return {
        titulo,
        genero,
        anoLancamento,
        empresa,
        jogar,
    };
}

let jogo1 = jogos("Final Fantasy", "RPG", "1997", "Square Soft", () => {
    return "Jogando!";
});
// console.log(jogo1)
// console.log(jogo1.jogar())

// for in, for of e forEach

let carros = {
    modelo: "Buggati",
    ano: 2010,
    cor: "Laranja",
};

// Trabalha com arrays e objetos
for (let key in carros) {
    //for in serve para percorrer todas as chaves do objeto / key(pode ser qualquer palavra) mudando e representando cada atributo do objeto
    // console.log(`${key}: ${carros[key]}`)
}

// Trabalha com arrays e com objetos apos tratamento (Object.keys)
let jogadores = [["Pele", "Romário"], "CR7", "Messi"];
for (let jogador of jogadores) {
    //manipulacao para arrays diferente do for in, acessa direto a posição em si, somente arrays, nao objetos
    // console.log(jogador)
}

for (let key in jogadores) {
    // console.log(jogadores[key])
}

const NOME = "Silva";
for (let char of NOME) {
    // console.log(char)
}

for (let jogo of Object.keys(jogo1)) {
    // console.log(jogo1[jogo])
}

// For in e For of aplicado nos objetos Livro e Carro

// for (let key in livro) {
//     console.log(`${key}: ${livro[key]}`)
// }

for (let key in carro) {
    console.log(`${key}: ${carro[key]}`);
}

// ------------------------

// for (let livro1 of Object.keys(livro)) {
//     console.log(livro[livro1])
// }

// for (let key of Object.keys(carro)) {
//     console.log(carro[key])
// }
