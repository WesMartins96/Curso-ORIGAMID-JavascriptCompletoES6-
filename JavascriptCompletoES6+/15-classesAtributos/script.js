//Veremos sobre Classes e Atributos


//"classList"
//Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém
const menu = document.querySelector('.menu');
console.log(menu);

menu.className; //string
menu.classList; //lista de classes
menu.classList.add('ativo');
menu.classList.add('ativo', 'mobile'); //duas classes
menu.classList.remove('ativo');
menu.classList.toggle('ativo'); //adiciona/remove a classe
menu.classList.contains('ativo'); //true ou false
menu.classList.replace('ativo', 'inativo');


//Attributes
//Retorna uma 'array-like' com os atributos do elemento.
const animais = document.querySelector('.animais');
console.log(animais.attributes);

animais.attributes; //retorna todos os atributos
animais.attributes[0]; //retorna o primeiro atributo
console.log(animais.attributes[1]);

//pegar o atributo "data-texto"
console.log(animais.attributes['data-texto']);


//"getAttribute" e "setAttribute"
//Métodos que retornam ou definem de acordo com o atributo selecionado
const img = document.querySelector('img');

img.getAttribute('src'); //valor do src
img.setAttribute('alt', 'Texto Alternativo'); //muda o alt
img.hasAttribute('id'); //true ou false
img.removeAttribute('alt'); //remove o alt

img.hasAttributes(); //true ou false se tem algum atributo
//É muito comum métodos de "get" e "set";


//'Read Only' vs 'Writable'
//Existem propriedades que não permitem a mudança de seus valores, essas são considerados
//"Read Only", ou seja, apenas leitura.
const animaisEx = document.querySelector('.animais');

animaisEx.className; //string com o nome das classes
animaisEx.className = 'azul'; //substitui completamente a string
animaisEx.className += ' vermelho'; //adiciona 'vermelho' à string (usar espaço no inicio ' vermelho')

animaisEx.attributes = 'class = "ativo"'; //não funciona, "read-only"
//Lembre-se que podemos modificar o valor de uma propriedade (objeto.propriedade = '')



//Exercicios
//Adicione a classe ativo a todos os itens do menu
const ativos = document.querySelectorAll('.menu a');
ativos.forEach((item) => {
  item.classList.add('ativo')
  console.log(item);
})

//Remova a classe ativo de todos os itens do menu e mantenha apenas no primeiro
const desativar = document.querySelectorAll('.menu a');
desativar.forEach((item) => {
  item.classList.remove('ativo')
  console.log(item)
});
desativar[0].classList.add('ativo');

//Verifique se as imagens possuem o atributo alt
const verificarALT = document.querySelectorAll('img');

verificarALT.forEach((img) => {
  const possuiALT = img.hasAttribute('alt');
  console.log(img, possuiALT)
});

//Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'http://www.google.com/')
console.log(link);
