//veremos sobre DOM (Document Object Model)


//Document Object Model (DOM)
//É uma interface que representa documento HTML e XML através de objetos. Com ela é
//possível manipular a estrutura, estilo e conteúdo destes documentos.
console.log(window);
//"window" é o objeto global de browser
//Possui diferentes métodos e propriedades

window.innerHeight; //retorna a altura do browser
//Ao inspecionar elemento com o Chrome, você está vendo a representação artificial do DOM


//Window e document
//São os objetos principais do DOM, boa parte da manipulação é feita através dos seus 
//métodos e propriedades
//window.alert('Isso é um alerta');
//alert('Isso é um alerta'); //funciona

document.querySelector('h1'); //seleciona o primeiro "h1"
document.body; //retorna o "body"
//"window" é o objeto global, por isso não precisamos chamar ele na frente dos seus
//métodos e propriedades.


//Node
//Toda tag html é representada pelo objeto 'Element' e por isso herda os seus 
//métodos e propriedades. Element é um tipo de objeto Node.
const titulo =  document.querySelector('h1');

titulo.innerText; //retorna o texto;
titulo.classList; //retorna as classes;
titulo.id; //retorna o id;
titulo.offsetHeight; //retorna a altura do elemento;

titulo.addEventListener('click', function(){
  console.log('clicou');
});
//Ativa a função 'callback' a click no titulo



//Exercicios
//Retorne o url da página atual utilizando o objeto window
window.location.href; //retona a url da pagina
console.log(window.location.href);

//Selecione o primeiro elemento da página que possua a classe ativo
const exercicio = document.querySelector('.ativo');
console.log(exercicio);

//Retorne a liguagem do navegador
window.navigator.language; //retorna pt-BR
console.log(window.navigator.language); 

//Retorne a largura da janela
window.innerWidth; //retorna largura
console.log(window.innerWidth);