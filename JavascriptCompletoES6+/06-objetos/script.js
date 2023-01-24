//Veremos sobre objetos


//Objetos
//Conjunto de váriaveis e funções, que são chamadas de propriedades e métodos
var pessoa = {
  nome: 'Wesley',
  idade: 26,
  profissao: 'Fullstack Developer',
  possuiFaculdade: true,
}
console.table(pessoa); //retorna todo o objeto em uma tabela no console
console.log(pessoa); //retorna todo o objeto
pessoa.nome; //'Wesley'
pessoa.possuiFaculdade; //true
//Propriedades e métodos consistem em nome (chave) e valor


//Métodos
//É uma propriedade que possui uma função no local do seu valor.
var quadrado = {
  lados: 4,
  area: function(lado){
    return lado * lado;
  },
  perimetro: function(lado){
    return this.lados * lado;
  },
}
quadrado.lados; //4
quadrado.area(5); //25
quadrado.perimetro(5); //20 


//Métodos
//Abreviação de "area: function() {}" para "area() {}", no ES6+
var quadradoEx = {
  ladosEx: 4,
  areaEx(ladoEx){
    return ladoEx * ladoEx;
  },
  perimetroEx(ladoEx){
    return this.ladosEx * ladoEx;
  },
}
console.log(quadradoEx.areaEx(5)); //25
console.log(quadradoEx.perimetroEx(5)); //20


//Organizar o código
//Objetos servem para organizar o código em pequenas partes reutilizáveis
Math.PI; //3.14
Math.random(); //número aleatório

var pi = Math.PI;
console.log(pi); //3.14
//"Math" é um objeto nativo do javascript. Já percebeu que "console" é um objeto e "log()" um método?


//Criar um objeto
//Um objeto é criado utilizando as chaves "{}"
var carro = {};
var animal = {};
console.log(typeof carro, typeof animal); //object


//Dot notation get
//Acesse propriedades de um objeto utilizando o ponto "."
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}
var bg = menu.backgroundColor; //'#84E'
console.log(menu);


//Dot notation get
//Substitua o valor de uma propriedade utilizando "." e o "=" após o nome da mesma
var carro = {
  marca: 'ford',
  modelo: 'fiesta',
  ano: 2005,
  cor: '#000',
}
//Podemos alterar valores
carro.cor = '#EE5'
console.log(carro.cor); //'#EE5'


//Adicionar propriedade e métodos
//Basta adicionar um novo nome e definir o valor.
var janela = {
  largura: 800,
}
//Podemos adicionar valores
janela.tamanho = 50;
janela.posicao = 'fixed';
console.log(janela);


//Palavra-chave "this"
//"this" irá fazer uma referência ao próprio objeto.
var peso = 120;
var person = {
  altura: 1.80,
  peso: 50,
  metadePeso(){
    return this.peso / 2;
  }
}
console.log(person.metadePeso()); //25
//sem o "this", seria 60
  //"this" irá retornar o próprio objeto


//Protótipo e herança
//O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.
var navbar = {
  width: 800,
}
navbar.hasOwnProperty('width'); //true
navbar.hasOwnProperty('height'); //false
//"hasOwnProperty" é um método de Object, que verifica se tem a propriedade no objeto



//Exercicios
//Crie um objeto com os seus dados pessoais, deve possuir pelo menos duas propriedades nome e sobrenome
var dadosPessoais = {
  nome: 'Wesley',
  sobrenome: 'Martins',
  endereco: 'São Paulo',
  telefone: '9 9999 9999',
  mostrarNomeCompleto(){
    return `meu chamo ${this.nome} ${this.sobrenome}`
  }
}
//Crie um método no objeto anterior, que mostre o seu nome completo
console.log(dadosPessoais.mostrarNomeCompleto());

//Modifique o valor da propriedade preco para 3000.
var car = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
car.preco = 3000;
console.log(car.preco);

//Crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  latir(verHomem){
    if (verHomem === 'Viu Homem') {
      console.log('Latir');
    }else{
      console.log('Não latir');
    }
  }
}
console.log(cachorro);
cachorro.latir('Viu Homem'); //retorna 'Latir'
cachorro.latir(); //retorna 'Não Latir'
