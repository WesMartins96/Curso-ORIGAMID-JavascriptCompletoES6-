//Veremos sobre Dimensões e Distancias



//"Height(Altura)" e "Width(Largura)"
//Estas são propriedades e métodos dos objetos "Element" e "HTMLElement", a maioria delas
//são "Read Only"
const section = document.querySelector('.animais');

section.clientHeight; //Height + padding;
//console.log(section.clientHeight);
section.offsetHeight; //Height + padding + border
//console.log(section.offsetHeight);
section.scrollHeight; //Height total, mesmo dentro de scroll
//console.log(section.scrollHeight);
  //Mesma coisa para o "Width"
  section.clientWidth;
  section.offsetWidth;
  section.scrollWidth;


//'offsetTop' e 'offsetLeft'
const animais = document.querySelector('.animais');

//Distância entre o topo do elemento e o topo da página
animais.offsetTop;
//Distância entre o canto esquerdo do elemento e o canto esquerdo da página
animais.offsetLeft;


//'getBoundingClientRect()'
//Método que retorna um objeto com valores do 'width', 'height', distâncias do elemento e mais.
const sectionEx = document.querySelector('.animais');

const rect = sectionEx.getBoundingClientRect();
rect.height; //height do elemento
rect.width; //width do elemento
rect.top; //distância entre o topo do elemento e o scroll


//Window
window.innerWidth; //width da janela
window.outerWidth; //soma dev tools também
window.innerHeight; //height da janela
window.outerHeight; //soma a barra do scroll vertical

window.pageYOffset; //distância total do scroll horizontal
window.pageXOffset; //distância total do scroll vertical

if (window.innerWidth < 600) 
  console.log('Tela menor que 600px');
else
  console.log('Tela maior que 600px');


//'matchMedia()'
//Utilize um 'media-querie' como no CSS para verificar a largura do browser
const small = window.matchMedia('(max-width: 600px)');

if (small.matches)
  console.log('Tela menor que 600px');
else
  console.log('Tela maior que 600px');


//DICA
//·Selecione o elemento no inspetor(DOM)

//·Abra o console e digite $0 para selecionar o mesmo

//·Os elementos selecionados anteriormente são $1, $2 ...



//Exercicios
// Verifique a distância da primeira imagem em relação ao topo da página 
const img = document.querySelector('img');

img.offsetTop;
console.log(img.offsetTop);

// Retorne a soma da largura de todas as imagens 
function somaImagens() {
  const imgs = document.querySelectorAll('[src^="img/"]')
  let soma = 0;
    imgs.forEach((i) => {
      soma = soma + i.offsetWidth;
  })
  console.log(soma);
}
window.onload = function(){
  somaImagens();
}

// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas 
//com o dedo. (48px/48px de acordo com o google) 
const links = document.querySelectorAll('a');
console.log(links);
links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(`${link}, possui boa acessibilidade`);
  }else{
    console.log(`${link}, não possui boa acessibilidade`);
  }
})

// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu 
const browserEx = window.matchMedia('(max-width: 720px)').matches;
if (browserEx) {
  const menu = document.querySelector('.menu')
  menu.classList.add('.menu-mobile')
  console.log(menu.classList);
}


