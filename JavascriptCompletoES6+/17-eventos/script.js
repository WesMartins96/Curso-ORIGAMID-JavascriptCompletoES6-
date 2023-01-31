//Veremos sobre Eventos



//"addEventListener"
//Adiciona uma função ao elemento, esta chamada de 'callback', que será ativada assim que certo 
//'evento' ocorrer neste elemento
const img = document.querySelector('img');

//elemento.addEventListener(event, callback, options)
img.addEventListener('click', function(){
  console.log('clicou');
})
//O terceiro parâmetro é opcional.


//Callback
//É uma boa prática separar a função de callback do "addEventListener", ou seja, declarar uma
//função ao invés de passar diretamente uma função anônima

function callback(){
  console.log('clicouEx')
};

img.addEventListener('click', callback); //modo correto
img.addEventListener('click', callback()); //undefined
img.addEventListener('click', function(){
  console.log('ClicouEx');
})
img.addEventListener('click', () => {
  console.log('ClicouEX');
})


//Event
//O primeiro parâmetro do callback é referente ao evento que ocorreu
function callbackEvent(e){
  console.log(e);
}

img.addEventListener('click', callbackEvent);
//Geralmente utilizam 'e' como nome do parâmetro


//Propriedades do 'Event'
const animaisLista = document.querySelector('.animais-lista');

function executarCallback(event){
  const currentTarget = event.currentTarget; //this
  const target = event.target; //onde o clique ocorreu
  const type = event.type; //tipo de evento
  const path = event.path; 
  console.log(currentTarget, target, type, path);
}

animaisLista.addEventListener('click', executarCallback);


//event.preventDefault()
//Previne o comportamento padrão do evento no browser. No caso de um link externo, por exemplo,
//irá previnir que o link seja ativado
const linkExterno = document.querySelector('a[href^="http"]');

function clickNoLink(event){
  event.preventDefault();
  console.log(event.currentTarget.href);
}

linkExterno.addEventListener('click', clickNoLink);


//This
//A palavra "this" é uma palavra espeial de Javascript, que pode fazer referência a diferentes
//objetos dependendo do contexto. No caso de eventos, ele fará referência ao elemento em que
//"addEventListener" foi adicionado
const imgThis = document.querySelector('img');

function callbackThis(event){
  console.log(this); //retorna a imagem
  console.log(this.getAttribute('src'));
}
imgThis.addEventListener('click', callbackThis);
//Geralmente igual ao "event.currentTarget"


//Diferentes eventos
//Existem diversos eventos como 'click', 'scroll' , 'resize', 'keydown', 'keyup', 'mouseenter' e
//mais. Eventos podem ser adicionados a diferentes elementos, como o "window" e "doxument" também.
const h1 = document.querySelector('h1');

function callbackH1(event){
  console.log(event.type, event);
}

h1.addEventListener('click', callbackH1);
h1.addEventListener('mouseenter', callbackH1);

window.addEventListener('scroll', callbackH1);
window.addEventListener('resize', callbackH1);
window.addEventListener('keydown', callbackH1);


//Keyboard
//Você pode adicionar atalhos para facilitar a navegação no seu site, através de eventos 
//do "keyboard"
function handleKeyboard(event){
  if (event.key === 'a')
    document.body.classList.toggle('azul');
  else if(event.key === 'v')
    document.body.classList.toggle('vermelho');  
}

window.addEventListener('keydown', handleKeyboard);


//"forEach" e "Eventos"
//O método "addEventListener" é adicionado à um único elemento, então é necessário um loop entre
//elementos de uma lista, para adicionarmos à cada um deles
const imgs = document.querySelectorAll('img');

function imgSrc(event){
  const src = event.currentTarget.getAttribute('src');
  console.log(src);
}

imgs.forEach((img) => {
  img.addEventListener('click', imgSrc);
});




//Exercicios
//Quando o usuário clicar nos links internos so site adicione a classe ativo ao item 
//clicado e remova dos demais itens caso eles possuam a mesma. Previna o comportamento 
//padrão desses links. 
const linksInternos = document.querySelectorAll('a[href^="#"]');

function addClass(event){
  event.preventDefault();  
  console.log(event);
  linksInternos.forEach((event) => {
    event.classList.remove('ativo');
  });
  event.currentTarget.classList.add('ativo');
}

linksInternos.forEach((event) => {
  event.addEventListener('click', addClass);
});
 
// Selecione todos os elementos do site começando a partir do body, ao clique mostre 
//exatamente quais elementos estão sendo clicados.
const site = document.querySelectorAll('body *');

function addElement(event){
  const element = event.currentTarget; //Mostra onde o clique ocorreu
  console.log(element);
}

site.forEach((element) => {
  element.addEventListener('click', addElement)
})


// Utilizando o código anterior, ao invés de mostrar no console, remova o elemento que 
//está sendo clicado, o método remove() remove um elemento. 
function addElement(event){
  event.currentTarget.remove(); 
}
 
// Se o usuário clicar na tecla (t), aumente todo o texto do site.  
function mudarFont(event){
  if (event.key === 't')
    document.body.classList.toggle('aumentar-font')
}

window.addEventListener('keydown', mudarFont);