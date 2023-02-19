//Veremos sobre Objeto = Array e Interação



//Arrays e Interação
//São importantes pois são métodos que irão interagir com cada item da array, ou seja,
//são métodos que fazem loop por cada item da array.


//"[].forEach()"
//'[].forEach(callback(itemAtual, index, array))' a função callback é executada para cada item
//da array. Ela possui três argumentos, 'itemAtual(valor do item da array)', 
//'index(index do valor da array)' e 'array(array original)'.
const carros = ['Ford', 'Fiat', 'Honda'];
carros.forEach(function(item, index, array) {
  console.log(item, index, array);
});

// com "arrow function"
carros.forEach((item, index, array) => {
  console.log(item.toUpperCase());
});
//O método sempre retorna undefined


//'Arrow Function'
const li = document.querySelectorAll('li');
//Exemplo 1
li.forEach((item) => item.classList.add('ativa'));
console.log(li);
//Exemplo 2
li.forEach(function(item) {
  item.classList.add('ativa');
});
//Os dois exemplos fazem a mesma coisa
console.log(li);


//Modificar a Array Original
const cars = ['Ford', 'Fiat', 'Honda'];
cars.forEach((item, index, array) => {
  array[index] = 'Cars ' + item;
});
cars; //['cars Ford', 'cars Fiat', 'cars Honda']
//É melhor utilizarmos o "map" para isso.
console.log(cars);


//"[].map()"
//'[].map(callback(itemAtual, index, array))' funciona da mesma forma que o forEach(),
//porém ao invés de retornar undefined, retorna uma nova array com valores atualizados
//de acordo com o return de cada interação.
const times = ['Barcelona', 'Sporting', 'Arsenal'];
const newTimes = times.map((item) => {
  return 'Times ' + item;
});
console.log(times);
console.log(newTimes);


//Valor Retornado
//Se não retornarmos nenhum valor durante a interação utilizando 'map', o valor retornado
//como de qualquer função que não possui o return, será "undefined".
const cores = ['Azul', 'Vermelho', 'Branco'];
const newCores = cores.map(item => {
  const novoValor = 'Cores ' + item;
})
newCores; //[undefined, undefined, undefined]
console.log(newCores);


//"Arrow Function" e "[].map()"
//Uma 'Arrow Function' de linha única e sem chaves irá retornar o valor após a 
//fat arrow '=>'.
const numeros = [2, 4, 6, 8, 10, 12, 14];
const numerosX3 = numeros.map(numero => numero * 3);
console.log(numeros);
console.log(numerosX3);


//--DIFERENÇA ENTRE => "[].map()" vs "[].forEach".
//Se o objetivo for modificar os valores da array atual, sempre utilize o 'map', pois assim
//uma nova array com os valores modificadores é retornada e você pode imediatamente iterar
//novamente sobre estes valores.


//EXEMPLO REAL
//"[].map()" com Objetos
//'Map' pode ser muito útil para interagirmos com uma array de objetos, onde desejamos 
//isolar um valor único de cada objeto
const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]
//Exemplo 1
const tempoAulas = aulas.map(aula => aula.min)
tempoAulas; //[15, 10, 20, 25]
console.log(tempoAulas);

//Exemplo 2
function nomeAulas(aula) {
  return aula.nome;
}
const arrayAulas = aulas.map(nomeAulas);
arrayAulas; //['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']
console.log(arrayAulas);


//"[].reduce()"
//'[].reduce(callback(acumulador, valorAtual, index, array), valorInicial)'
//Executa a função de callback para cada item da Array. Um valor especial existe nessa
//função de callback, ele é chamado de "acumulador", mas é na verdade apenas o retorno
//da iteração anterior.
const aulasEx = [10, 25, 30];
const total1 = aulasEx.reduce((acumulador, atual) => {
  console.log(acumulador, atual);
  return acumulador + atual;
})
total1; //65
console.log(total1);

const total2 = aulasEx.reduce((acc, cur) => acc + cur, 100);
total2; //165
console.log(total2);


//Maior valor com "[].reduce()"
const numbers = [10, 25, 60, 5, 35, 10];

//EXEMPLO 1
const maiorValor = numbers.reduce((anterior, atual) => {
  return anterior < atual ? atual : anterior;
})
maiorValor; //60
console.log(maiorValor);

//EXEMPLO 2
const upNumbers = numbers.reduce((anterior, atual) => {
  if (anterior > atual) {
    return anterior;
  }else
    return atual;
})
console.log(upNumbers);


