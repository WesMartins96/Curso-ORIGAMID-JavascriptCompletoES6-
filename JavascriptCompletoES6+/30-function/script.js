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


//"function.apply()"
//O 'apply(this, [arg1, arg2, ...])' funciona como o call, a única diferença é que os 
//argumentos da função são passados através de uma array
const numeros = [3, 4, 6, 1, 34, 44, 32];
Math.max.apply(null, numeros); //44
Math.max.call(null, 3, 4, 5, 6, 7, 20); //20
//Podemos passar 'null' para o valor de 'this', caso a função não utilize o objeto
//principal para funcionar


//APPLY vs CALL
//A única diferença é a array como segundo argumento
const li2 = document.querySelectorAll('li');

function itemPossuiAtivar(item){
  return item.classList.contains('ativar');
}
//Exemplo 1 - usando 'call'
const filtro1 = Array.prototype.filter.call(li2, itemPossuiAtivar);

//Exemplo 2 - usando 'apply'
const filtro2 = Array.prototype.filter.apply(li2, [itemPossuiAtivar]);



//"function.bind()"
//Diferente de call e apply, 'bind(this, arg1, arg2, ...)' não irá executar a função
//mas sim retornar a mesma com o novo contexto de 'this'.
const li3 = document.querySelectorAll('li');

const filtrarLi = Array.prototype.filter.bind(li3, function(item) {
  return item.classList.contains('ativar');
});

filtrarLi(); //[li.ativar, li.ativar]


//ARGUMENTOS e BIND
//Não precisamos passar todos os argumentos do 'bind', podemos passar os mesmos na nova
//função no momento da execução da mesma.
const cars = {
  marca: 'Ford',
  ano: 2005,
  acelerar: function(aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo} segundos`;
  }
}
cars.acelerar(125, 20); //'Ford acelerou 125 em 20 segundos'


const honda = {
  marca: 'Honda',
};
const acelerarHonda = cars.acelerar.bind(honda);
acelerarHonda(200, 10); //'Honda acelerou 200 em 10 segundos'


//ARGUMENTOS COMUNS
//Podemos passar argumentos padrões para uma função e retornar uma nova função
function imc(altura, peso){
  return peso / (altura * altura);
}

const imc180 = imc.bind(null, 1.80);

imc(1.80, 70); //21.6
imc180(70); //21.6




//EXERCICIOS
//Retorne a soma total de caracteres dos parágrafos utilizando reduce
const p = document.querySelectorAll('p');
const totalCaracteres = Array.prototype.reduce.call(p, (acc, paragrafo) => {
  return acc + paragrafo.innerText.length;
}, 0)
console.log(totalCaracteres);


//Crie uma função que retorne novos elementos html, com os seguintes parâmetros
//tag, classe e conteudo
function criarElemento(tag, classe, conteudo){
  const elemento = document.createElement(tag);
  //verificar se classe existe para nao dar undefined
  classe ? elemento.classList.add(classe) : null;
  //verificar se conteudo existe para nao dar undefined
  conteudo ? elemento.innerHTML = conteudo : null;
  return elemento;
}
criarElemento('article', 'dark-mode', 'clique aqui para ativar o darkmode')
console.log(criarElemento('article', 'dark-mode', 'clique aqui para ativar o darkmode'));



//Crie uma função utilizando a anterior como base essa nova função deverá sempre criar
//'h1' com a classe 'titulo'. Porén o parâmetro conteudo continuará dinâmico
const h1Titulo = criarElemento.bind(null, 'h1', 'titulo');
console.log(h1Titulo('Cursos de Javascript'));
console.log(h1Titulo('Aprenda a programar em 365 dias'));