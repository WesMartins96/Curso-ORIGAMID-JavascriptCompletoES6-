//Veremos forEach e Arrow Function


//forEach
//Constantemente vamos selecionar uma lista de itens do DOM. A melhor forma para interagirmos
//com os mesmos é utilizando o método "forEach"
const imgs = document.querySelectorAll('img');

imgs.forEach(function(item){
  console.log(item)
});


//Parâmetros do "forEach"
//O primeiro parâmetro é o 'callback', ou seja, a função que será ativada a cada item. Essa
//função pode receber três parâmetros: 'valorAtual', 'index' e 'array';
const imgs2 = document.querySelectorAll('img');

imgs2.forEach(function(valorAtual, index, array){
  console.log(valorAtual) //O item atual no loop
  console.log(index) //O número do index
  console.log(array) //A array completa
});


//"forEach" e "Array"
//"forEach" é um método de Array, alguns objetos 'array-like' possuem este método. Caso não possua
//o ideal é transformá-los em uma array.
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item, index, array){
  console.log(item, index, array)
})


//Arrow Function
//Sintaxe curta em relação a "function expression". Basta remover a palavra chave "function" e
//adicionar a fat arrow "=>" após os argumentos.
const img3 = document.querySelectorAll('img');

img3.forEach((item) => {
  console.log(item)
})


//Argumentos e Parênteses
const imgEx = document.querySelectorAll('img');

//Argumento único não precisa de parênteses
imgEx.forEach(item => {
  console.log(item)
});

//Multiplos argumentos precisam dos parênteses.
imgEx.forEach((item, index) => {
  console.log(item, index)
});

//Sem argumentos precisa dos parênteses, mesmo vazio
let i = 0;
imgEx.forEach(() => {
  console.log(i++)
});
//É melhor utilizar os parênteses


//Return
//É possível omitir as chaves "{}" para uma função que retorna uma linha.
const imgsEx = document.querySelectorAll('img');

imgsEx.forEach((item) => {
  console.log(item) //Não é permitido fechar a linha com ";"
});

imgEx.forEach((item) => console.log(item));
//Não é permitido fechar a linha com ";"



//Exercicios
//Mostre no console cada parágrafo do site
const paragrafos = document.getElementsByTagName('p');
const paragradoArray = Array.from(paragrafos);
paragradoArray.forEach((item, index) => {
  console.log(item, index)
})

//Mostre o texto dos parágrafos no console
const mostrarText = document.querySelectorAll('p');
mostrarText.forEach((item) => {
  console.log(item.innerText);
})

//Como corrigir os erros abaixo:
const imgX = document.querySelectorAll('img');

imgX.forEach((item, index) => {
  console.log(item, index)
});

let y = 0;
imgX.forEach(() => {
  console.log(y++)
})

imgX.forEach(() => console.log(y++));