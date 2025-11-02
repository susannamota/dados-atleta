
# dados-atleta

*Este projeto faz parte do programa DEVstart*

## Sistema de Análise de Atletas

  

Sistema completo para análise de atletas que processa informações pessoais, calcula categorias por idade, IMC e média de notas válidas, descartando as notas extremas.

  

**Funcionalidades**

-  **Cálculo de Categoria**: Classifica atletas por faixa etária (Infantil, Juvenil, Intermediário, Adulto)

-  **Cálculo de IMC**: Calcula o Índice de Massa Corporal do atleta

-  **Processamento de Notas**:

- Ordena notas em ordem crescente

- Descarta a maior e a menor nota

- Calcula a média das notas válidas

-  **Apresentação Formatada**: Exibe todas as informações de forma organizada

  

**Tecnologias Utilizadas**

  

- JavaScript ES6+

- Array methods: map(), sort(), slice(), reduce()

- Template literals para formatação de strings

  

**Exemplo de Saída**
```
Nome: Cesar Abascal
Idade: 30
Categoria: Adulto
Peso: 80
Altura: 1.7
IMC: 27.68
Notas: 10, 9.34, 8.42, 10, 7.88
Média válida: 9.25
```
________________________________


**Código Javascript**
```
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
  console.log(`Categoria: ${this.obtemCategoria()}`);
  console.log(`Peso: ${this.obtemPesoAtleta()}`);
  console.log(`Altura: ${this.obtemAlturaAtleta()}`);
  console.log(`IMC: ${this.obtemIMC()}`);
  console.log(`Notas: ${this.obtemNotasAtleta().join(", ")}`);
  console.log(`Média válida: ${this.obtemMediaValida()} `);
  }
}
const atleta1 = new Atleta("Cesar Abascal", 30, 80, 1.70,[10, 9.34, 8.42, 10, 7.88]);
const atleta2 = new Atleta("João da Silva", 15, 55, 1.75,[8.9, 8.5, 10, 10, 9]);

atleta1.exibirInformacoes()
atleta2.exibirInformacoes()
```

**Melhorias Futuras**

- Adicionar funcionalidade de ranking

- Validação de Dados: Adicionar verificações para entradas inválidas

- Sistema de Competições: Gerenciar múltiplas competições e eventos

  

Desenvolvido como parte de um exercício de lógica de programação com JavaScript, Por **Susanna Mota**.
