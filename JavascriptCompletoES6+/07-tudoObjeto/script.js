//Veremos mais sobre Objetos


//Tudo é objeto
//Strings, números, boolean, objetos e mais, possuem propriedades e métodos. Por isso são objetos
var nome = 'Beatriz';
nome.length; //5
nome.charAt(1); //'e'
nome.replace('triz', 'trice'); //'Beatrice'
nome; //'Beatriz'
//Uma string herda propriedades e métodos do construtor "String()"


//Números
var altura = 1.8;
altura.toString(); // '1.8'
altura.toFixed(); // '2'
//Por um breve momento o número é envolvido em um objeto (coerção), tendo acesso assim as suas
//propriedades e métodos
//Coerção é o processo de transformar um valor de um tipo de dado em outro tipo de dado.


//Função
function areaQuadrado(lado){
  return lado * lado;
}

console.log(areaQuadrado.toString()); 
areaQuadrado.length; //1


//Elementos do DOM
var btn = document.querySelector('.btn');

btn.classList.add('azul') //adiciona a classe azul
btn.innerText; //'Clique'
btn.addEventListener('click', function(){
  alert('Clicou')
})
//Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de 
//objetos do DOM



//Exercicios
//Nomeie 3 propriedades ou métodos de strings
var myName = 'Gael';
//fixed
//lenght
//slice

//nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn');
//addEventListener
//appendChild
//id
//innerHTML
//outerHTML
