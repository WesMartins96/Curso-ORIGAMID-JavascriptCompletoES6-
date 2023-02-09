//Veremos sobre Objetos - Constructor Function


//Objetos
//Criar um objeto é simples, basta definirmos uma variável e iniciar a definição do seu
//valor com as chaves '{}'. Mas e se precisarmos criar um novo objeto, com as mesmas 
//características do anterior?
const carro = {
  marca: 'Marca',
  preco: 0,
}

const honda = carro;
honda.marca = 'Honda';
honda.preco = 22.000;

const fiat = carro;
fiat.marca = 'Fiat';
fiat.preco = 7.999;
//carro, fiat e honda apontam para o mesmo objeto.


//Constructor Functions
//Para isso existem as Constructor Functions, ou seja, funções construtoras que são
//responsáveis por construir novos objetos sempre que chamamos a mesma.
function Carro(){
  this.marca = 'Marca';
  this.preco = 0;
}

const ford = new Carro();
ford.marca = 'Ford';
ford.preco = 16.999;

const chevrolet = new Carro();
chevrolet.marca = 'Chevrolet';
chevrolet.preco = 35.899;
//Usa Pascal Case, ou seja, começa com a letra Maiúscula


//new Keyword
//A palavra chave "new" é responsável por criar um novo objeto baseado na função que
//passarmos a frente dela.
const toyota = new Carro();

//Fases do new
//1 Cria um novo objeto
//toyota = {};

//2 Define o protótipo
toyota.prototype = Carro.prototype;

//3 Aponta a variável 'this' para o objeto
this.toyota;

//4 Executa a função, substituindo 'this' pelo objeto
toyota.marca = 'Toyota';
toyota.preco = 78.999;

//5 Retorna o novo objeto
// return toyota = {
//   marca = 'Marca',
//   preco = 0,
// }



//Parâmetros e Argumentos
//Podemos passar argumentos que serão utilizados no momento da criação do objeto
function Cars(nome, preco, cor){
  this.nome = nome;
  this.preco = preco;
  this.cor = cor;
}

const myCar = new Cars('Fiesta', 11.899, 'Preto');
console.log(myCar);

const myWifeCar = new Cars('New Bettle', 33.799, 'Pink');
console.log(myWifeCar);


//this keyword
//O "this" faz referência ao próprio objeto construído com a Constructor Function
function Moto(marca, precoInicial){
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
  console.log(this);
}

const suzuki = new Moto('Suzuki', 56.899);
const yamaha = new Moto('Yamaha', 26.799);
//variáveis dentro da Constructor estão "protegidas".



//Exemplo Real
//Quando mudamos a propriedade seletor, o objeto DOM irá passar a selecionar o novo seletor
//em seus métodos.
// const Dom = {
//   seletor: 'li',
//   element(){
//     return document.querySelector(this.seletor);
//   },
//   ativo(){
//     this.element().classList.add('ativo');
//   },
// }

//Dom.ativo(); //adiciona ativo ao 'li'
//Dom.seletor = 'ul';
//Dom.ativo(); //adiciona ativo ao 'ul'


//Constructor Function Real
//Um objeto criado com uma 'Constructor', não irá influenciar em outro objeto criado com
//a mesma 'Constructor'.
//Função Contrutora (Modo Correto)
// function Dom(seletor) {
//   this.element = function(){
//     return document.querySelector(seletor);
//   }
//   this.ativo = function(){
//     this.element().classList.add('ativo');
//   }
// }

//Como usar a função construtora agora?
const li = new Dom('li');
//li.ativo();
const ul = new Dom('ul');
const liLastChild = new Dom('li:last-child');
//liLastChild.ativo();
//Lembre-se de usar parâmetros



//Exercicios
//Transforme o objeto abaixo em uma "Constructor Function"
const pessoa = {
  nome: 'Nome Pessoa',
  idade: 0,
  andar(){
    console.log(this.nome + ' andou');
  }
}

function Pessoa(nome, idade){
  this.nome = nome,
  this.idade = idade,
  this.andar = function(){
    console.log(this.nome + ' andou');
  }
}


//Crie 3 pessoas, João - 20 anos | Maria - 25 anos | Bruno - 15 anos
const joao = new Pessoa('João', 20)
console.log(joao);
joao.andar();
const maria = new Pessoa('Maria', 25);
console.log(maria);
maria.andar();
const bruno = new Pessoa('Bruno', 15)
console.log(bruno);
bruno.andar();


//Crie uma "Constructor Function" (DOM) para manipulação de istas de elementos do DOM
//deve conter as seguintes propriedades e métodos:
/**
 * elements, retorna NodeList com os elementos selecionados
 * addClass(classe), adiciona a classe a todos os elementos
 * removeClass(classe), remove a classe a todos os elementos
 */

function Dom(seletor){
  const elementList = document.querySelectorAll(seletor);
  this.element = elementList;
  this.addClass = function(classe){
    elementList.forEach((element) => {
      element.classList.add(classe);
    })
  }
  this.removeClass = function(classe){
    elementList.forEach((element) => {
    element.classList.remove(classe);
    })
  }
}
const listaItens = new Dom('li');

const ol = new Dom('ol');
ol.addClass('ativo');

listaItens.removeClass('li-ativo');
