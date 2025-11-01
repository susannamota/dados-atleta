class Atleta{
    constructor(nome,idade,peso,altura,notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria(){
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil"
        }else if(this.idade >= 12 && this.idade <= 13){
            return "Juvenil"
        }else if(this.idade >= 14 && this.idade <= 15){
            return "Intermediário"
        }else if(this.idade >= 16 && this.idade <= 30){
            return "Adulto"
        }else{
            return "Demais Idades"
        }
            
        };

    calculaIMC(){
        let imc = this.peso / (this.altura * this.altura);
        return imc.toFixed(2)
    };

    calculaMediaValida(){
        let notasOrganizadas = this.notas.sort((a, b) => a - b);
        let notasValidas = notasOrganizadas.slice(1,notasOrganizadas.length - 1)
        let somaNotas = notasValidas.reduce(function (acumulador, itemAtual) {
            return acumulador + itemAtual
            }, 0)
            let media = somaNotas / notasValidas.length;
            return media.toFixed(2)


    };
  

    obtemNomeAtleta(){
        return this.nome
    };

    obtemIdadeAtleta(){
        return this.idade
    }

    obtemPesoAtleta(){
        return this.peso
    }

     obtemAlturaAtleta() {
        return this.altura;
    }


    obtemNotasAtleta(){
        return this.notas
    }

    obtemCategoria(){
        return this.calculaCategoria()
    }

    obtemIMC(){
        return this.calculaIMC()

    }

    obtemMediaValida(){
        return this.calculaMediaValida()
    }

    exibirInformacoes() {
        console.log(`_________________________________`)
        console.log(`Nome: ${this.obtemNomeAtleta()}`);
        console.log(`Idade: ${this.obtemIdadeAtleta()}`);
        console.log(`Peso: ${this.obtemPesoAtleta()}`);
        console.log(`Altura: ${this.obtemAlturaAtleta()}`);
        console.log(`Notas: ${this.obtemNotasAtleta().join(", ")}`);
        console.log(`Categoria: ${this.obtemCategoria()}`);
        console.log(`IMC: ${this.obtemIMC()}`);
        console.log(`Média válida: ${this.obtemMediaValida()} `);

    }

}


const atleta1 = new Atleta("Cesar Abascal", 30, 80, 1.70,[10, 9.34, 8.42, 10, 7.88]);
const atleta2 = new Atleta("João da Silva", 15, 55, 1.75,[8.9, 8.5, 10, 10, 9]);

atleta1.exibirInformacoes()
atleta2.exibirInformacoes()