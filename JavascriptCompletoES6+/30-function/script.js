//Veremos sobre o Objeto - Function



//Function
//Toda função é criada com o construtor "Function" e por isso herda as suas 
//propriedades e métodos
function areaQuadrado(lado){
  return lado * lado;
}
console.log(areaQuadrado(4));

const perimetroQuadrado = new Function('lado', 'return lado * 4');
console.log(perimetroQuadrado(5));



//PROPRIEDADES
//"Function.length" retorna o total de argumentos da função.
//"Function.name" retorna uma string com o nome da função.
function somar(n1, n2){
  return n1 + n2;
}
somar.length; //2
somar.name; // 'somar'


//function.call()
//'function.call(this, arg1, arg2, ...)' executa uma função, sendo possível passarmos uma nova
//referência ao 'this' da mesma.
const carro = {
  marca: 'Ford',
  ano: 2018
}

function descricaoCarro(){
  console.log(this.marca + ' ' + this.ano);
}

descricaoCarro(); //undefined undefined
descricaoCarro.call() //undefined undefined
descricaoCarro.call(carro); //Ford 2018


//This
//O valor de "this" faz referência ao objeto criado durante a construção do objeto
//(Constructor Function). Podemos trocar a referência do método ao 'this', utilizando
//o "call()"
const carros = ['Ford', 'Fiat', 'VW'];

carros.forEach((item) => {
  console.log(item);
}); //Log de cada Carro

carros.forEach.call(carros, (item) => {
  console.log(item);
}); //Log de cada Carro

const frutas = ['Banana', 'Pêra', 'Uva'];

carros.forEach.call(frutas, (item) => {
  console.log(item);
}); //Log de cada Fruta



//Exemplo Real
//O objeto atibuído a 'lista' será o substituído pelo primeiro argumento de 'call()'
function Dom(seletor){
  this.element = document.querySelector(seletor);
};

Dom.prototype.ativo = function(classe){
  console.log(this);
  this.element.classList.add(classe);
};

const ul = new Dom('ul');
ul.ativo('ativar');
console.log(ul);

console.log(ul.element);


//O OBJETO DEVE SER PARECIDO
//O novo valor de "this" deve ser semelhante a estrutura do valor 'this' original do 
//método. Caso contrário o método não conseguirá interagir de forma correta o novo 'this'.
const novoSeletor = {
  element: document.querySelector('li')
};

Dom.prototype.ativo.call(novoSeletor, 'ativar');



//Array's e Call
//É comum utilizarmos o "call()" nas funções do protótipo do construtor "Array". Assim podemos
//estender todos os métodos de Array à objetos que se parecem com uma Array(array-like).
Array.prototype.mostreThis = function(){
  console.log(this);
}

const fruits = ['Uva', 'Maçã', 'Banana'];
fruits.mostreThis(); //['Uva', 'Maçã', 'Banana']

Array.prototype.pop.call(fruits); //Remove Banana
//seria o mesmo que usar fruits.pop();

fruits.mostreThis(); //['Uva', 'Maçã']


//ARRAY-LIKE
//'HTMLCollection', 'NodeList' e demais objetos do Dom, são parecidos com uma 'array'. Por isso
//conseguimos utilizar os mesmos na substituição do 'this' em 'call'.
const liEx = document.querySelectorAll('li');

const filtro = Array.prototype.filter.call(liEx, function(item) {
  return item.classList.contains('ativar');
});
filtro; //retorna os itens que possuem a classe 'ativar'
console.log(filtro);


