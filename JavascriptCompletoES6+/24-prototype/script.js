//Veremos sobre Objetos - Prototype


//Prototype
//A propriedade "prototype" é um objeto adicionado a uma função quando a mesma é criada
function Pessoa(nome, idade){
  this.nome = nome;
  this.idade = idade;
}
const wesley = new Pessoa('Wesley', 26);

console.log(Pessoa.prototype); //Retorna o objeto
console.log(wesley.prototype); //undefined


//funcao.prototype
//É possível adicionar novas propriedades e métodos ao objeto 'prototype'
Pessoa.prototype.andar = function(){
  return this.nome + ' andou';
}
Pessoa.prototype.nadar = function(){
  return this.nome + ' nadou';
}
console.log(Pessoa.prototype); //Retorna o objeto


//Acesso ao protótipo
//O objeto criado utilizando o construtor, possui acesso aos métodos e propriedades do
//protótipo deste construtor. Lembrando, prototype é uma propriedade e funções apenas.
const gael = new Pessoa('Gael', 3);

gael.nome;
gael.idade;
gael.andar();
gael.nadar();


//proto
//O novo objeto acessa os métodos e propriedades do protótipo através da propriedade
//"__proto__". É papel da engine fazer essa busca, não devemos falar com "__proto__"
//diretamente.

//Acessam o mesmo método mas "__proto__" não terá acesso ao 'this.nome'
gael.andar();
gael.__proto__.andar();


//Herança de protótipo
//O objeto possui acesso aos métodos e propriedades do protótipo do construtor responsável por
//criar este objeto. O objeto abaixo possui acesso a métodos que nunca definimos, mas são
//herdados do protótipo de "Object".
Object.prototype;
gael.toString();
gael.isPrototypeOf();
gael.valueOf();


//Construtores Nativos
//Objetos, Funções, Números, Strings e outros tipos de dados são criados utilizando construtores. 
//Esses construtores possuem um protótipo com propriedades e métodos, que poderão ser acessadas pelo 
//tipo de dado.
const pais = 'Brasil';
const cidade = new String('Rio');

pais.charAt(0); //B
cidade.charAt(0); //R

String.prototype;


//É possível acessar a função do protótipo
//É comum, principalmente em códigos mais antigos, o uso direto de funções do protótipo do 
//construtor 'Array'.
const lista = document.querySelectorAll('li');

//Transforma em uma array
const listaArray = Array.prototype.slice.call(lista);
//Existe o método Array.from()


//Método do Objeto vs Protótipo
//Nos objetos nativos existem métodos linkados diretamente ao Objeto e outros linkados
//ao protótipo.
Array.prototype.slice.call(lista);
Array.from(lista);

//Retorna uma lista com os métodos / propriedades
Object.getOwnPropertyNames(Array);
Object.getOwnPropertyNames(Array.prototype);
//"dado.constructor.name", retorna o nome do construtor;


//Apenas os métodos do protótipo são herdados
[1, 2, 3].slice(); //existe
//[1, 2, 3].from(); //não existe



//Entenda o que está sendo retornado
//Os métodos e propriedades acessados com o '.' são referentes ao tipo de dados que é
//retornado antes desse '.'
const Carro = {
  marca: 'Ford',
  preco: 11.899,
  acelerar(){
    return true;
  }
}

Carro; //Object
Carro.marca; //String
Carro.preco; //Number
Carro.acelerar; //Function
Carro.acelerar(); // Boolean
Carro.marca.charAt; //Function
Carro.marca.charAt(0); //String
//Verifique o nome do construtor com ".constructor.name"



//Exercicios
//Crie uma função construtora de Pessoas, Deve conter nome, sobrenome e idade, crie um
//método no protótipo que retorne o nome completo da pessoa
function Pessoas(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoas.prototype.nomeCompleto = function(){
  return `nome: ${this.nome} ${this.sobrenome}, idade: ${this.idade}`
}

const wesleyMartins = new Pessoas('Wesley', 'Martins', 26);
console.log(wesleyMartins.nomeCompleto());


//Liste os métodos acessados por dados criados com NodeList, HTMLCollection, Document
Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);


//Liste os construtores dos dados abaixo
const li = document.querySelector('li');
li; //HTMLLIElement
li.click; //Function
li.innerText; //String
li.value; //Number
li.hidden; //Boolean
li.offsetLeft; //Number
//li.click(); //Undefined


//Qual o construtor do dado abaixo?
//li.hidden.constructor.name;
//Resposta é "Boolean" ou seja, uma string pois boolean está entre "";






