//Veremos sobre Transversing e Manipulação



//"outerHTML", "innerHTML" e "innerText"
//Propriedades que retornam uma string contendo o html ou texto. É possível atribuir um novo valor
//para as mesmas "element.innerText = 'Novo Texto'"
const menu = document.querySelector('.menu');

menu.outerHTML; //todo o html do elemento
menu.innerHTML; //html interno
menu.innerText; //texto, sem tags

menu.innerText = '<p>Texto</p>'; //a tag vai como texto
menu.innerHTML = '<p>Texto</p>'; //a tag é renderizada


//Transversing
//Como navegar pelo DOM. utilizando suas propriedades e métodos.
const lista = document.querySelector('.animais-lista');

lista.parentElement; //pai
lista.parentElement.parentElement; //pai do pai
lista.previousElementSibling; //elemento acima
lista.nextElementSibling; //elemento abaixo

lista.children; //HTMLCollection com os filhos
lista.children[0]; //primeiro filho
lista.children[--lista.children.length]; //último filho

lista.querySelectorAll('li'); //todos os 'li'
lista.querySelector('li:last-child'); //último filho


//Element vs Node
//Element's representam um elemento html, ou seja, uma tag. Node representa um nó, e pode ser
//um elemento (Element), texto, comentário, quebra de linha e mais.
const listaEx = document.querySelector('.animais-lista');

listaEx.previousElementSibling; //elemento acima
listaEx.previousSibling; //node acima

listaEx.firstChild; //primeiro node child
listaEx.childNodes; //todos os node child
//Geralmente estamos atrás de um elemento e não de qualquer node em si.


//Manipulando elementos
//É possível mover elementos no DOM com métodos de Node.
const list = document.querySelector('.animais-lista');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

contato.appendChild(list); //move list para o final de contato
contato.insertBefore(list, titulo); //insere a lista antes de titulo
//contato.removeChild(titulo); //remove titulo de contato
contato.replaceChild(list, titulo); //substitui titulo por list


//Novos elementos
//Podemos criar novos elementos com o método "createElement()"
const animais = document.querySelector('.animais-lista');
const novoH1 = document.createElement('h1');
const mapa = document.querySelector('.mapa');

novoH1.innerText = 'Novo Texto'; 
novoH1.classList.add('titulo');

mapa.appendChild(novoH1);


//Clonar elementos
//Todo elemento selecionado é único. Para criarmos um novo elemento baseado no anterior, é
//necessário utilizar o método "cloneNode()"
const titulo1 = document.querySelector('h1');
const titulo2 = document.querySelector('h1');
const novoTitulo = titulo1;
//titulo1, titulo2 e novoTitulo são iguais

const cloneTitulo = titulo1.cloneNode(true);
const contatoEx = document.querySelector('.contato');
contato.appendChild(cloneTitulo);
//"true" sinaliza para incluir os filhos



//Exercicios
//Duplique o menu e adicione ele em copy
const menuC = document.querySelector('.menu');
const menuC2 = menuC.cloneNode(true);
menuC.appendChild(menuC2);
const copyC = document.querySelector('.copy');
copyC.appendChild(menuC2);

//Selecione o primeiro DT da dl de Faq
const dt = document.querySelector('.faq');
const primeiroDt = dt.querySelector('dt')

//Selecione o DD referente ao primeiro DT
const proxDd = primeiroDt.nextElementSibling;

//Substitua o conteúdo html de .faq pelo de .animais
const animal = document.querySelector('.animais');
const faq = document.querySelector('.faq');
faq.innerHTML = animal.innerHTML;