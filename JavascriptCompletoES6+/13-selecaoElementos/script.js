//Seleção de elementos
//ID
//"getElementById" seleciona e retorna elementos do DOM

//Seleciona pelo ID
const animaisSection = document.getElementById('animais');
const contatosSection = document.getElementById('contato');

//Retorna null caso não exista
const naoExiste = document.getElementById('teste');


//Classe e Tag
//"getElementsByClassName" e "getElementsByTagName" selecionam e retornam uma lista de elementos
//do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados, ela
//será automaticamente atualizada.

//Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName('grid-section');
const contato = document.getElementsByClassName('grid-section contato');

//Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul');

//Retorna o primeiro elemento
console.log(gridSection[0]);


//Seletor geral único
//"querySelector" retorna o primeiro elemento que combinar com o seu seletor CSS
const animais  = document.querySelector('.animais');
const contatoEx = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child');
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector('ul');

//Busca dentro do 'ul' apenas
//const navItem = primeiroUl.querySelector('li');


//Seletor geral lista
//"querySelectorAll" retorna todos os elementos compatíveis com o seletor CSS em uma 'NodeList'
const gridSections = document.querySelectorAll('.grid-section');
const listas = document.querySelectorAll('ul');
const titulos = document.querySelectorAll('.titulo');
const fotosAnimais = document.querySelectorAll('.animais-lista img');
console.log(fotosAnimais);

//Retorna o segundo elemento
console.log(gridSections[1]);
//Diferente do "getElementByClassName", a lista aqui é estática


//HTMLCollection vs NodeList
//A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada
//com "querySelectorAll" é estática.
const titulo = document.querySelector('.titulo');
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

//titulo.classList.add('grid-section');
console.log(gridSectionHTML); 
console.log(gridSectionNode); 


//Array-Like
//"HTMLColection" e "NodeList" são array-like, parecem uma array mas não são. O método de array
//'forEach()' por exemplo, existe apenas em NodeList.
const gridSectionX = document.querySelectorAll('.grid-section');

gridSectionX.forEach(function(gridItem, index, array) {
  gridItem.className.add('azul');
  console.log(index); //index do item no array
  console.log(array); //a array completa
})
//é possível transformar array-like em uma array real, utilizando o método 
//"Array.from(gridSectionX)"


