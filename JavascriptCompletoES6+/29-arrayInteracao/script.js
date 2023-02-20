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


//"[].reduceRight()"
//Existe também o método '[].reduceRight()', a diferença é que este começa a iterar
//da direita para a esquerda, enquanto o reduce itera da esquerda para a direita.
const frutas = ['Banana', 'Pêra', 'Uva'];

const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
console.log(frutasRight);

const frutasLeft = frutas.reduce((acc, frutas) => acc + ' ' + frutas);
console.log(frutasLeft);

frutasRight; // Uva Pêra Banana
frutasLeft; // Banana Pêra Uva


//"[].some()"
//'[].some()', se pelo menos um return da iteração for 'truthy', ele retorna true
const fruits = ['Abacaxi', 'Caju', 'Limão'];
const temLimao = fruits.some((fruits) => {
  return fruits === 'Limão'
}); //true
console.log(temLimao);

function maiorQue100(numero) {
  return numero > 100;
};

const n = [0, 43, 22, 88, 101, 2];
const temMaior = n.some(maiorQue100); //true;
console.log(temMaior);


//"[].every()"
//'[].every()', verifica se todos os returns das interações forem trurhy, o método irá 
//retornar true. S e pelo menos um for falsy, ele irá retornar false.
const food = ['Macarrão', 'Bife', 'Lassanha', ''];
//False pois pelo menos um elemento do array está vazia '', o que é um valor "falsy"

const arrayCheia = food.every((food) => {
  return food; //false
})
console.log(arrayCheia); //false

const num = [6, 43, 22, 88, 101, 29];
const maiorQue3 = num.every(x => x > 3); //true
console.log(maiorQue3); //true


//"[].find()" e "[].findInfex()"
//'[].find()', retorna o valor atual da primeira iteração que retorna um valor 'Truthy'
//Já o '[].findIndex()', ao invés de retornar o valor, retorna o index deste valor na array.
const paises = ['Brasil', 'Alemanha', 'Japão', 'Espanha'];
const buscaJapao = paises.findIndex((pais) => {
  return pais === 'Japão';
}); // 2
console.log(buscaJapao); // 2

const n2 = [6, 43, 22, 88, 101, 29];
const buscaMaior = n2.find(x => x > 45); // 88
console.log(buscaMaior); // 88


//"[].filter()"
//'[].filter()', retorna uma array com a lista de valores que durante a sua iteração
//retornam um valor 'Truthy'
const nomes = ['Wesley', undefined, null, '', 'Gael', 0, 'Beatriz'];
const arrayClear = nomes.filter((nome) => {
  return nome; //['Wesley', 'Gael', 'Beatriz']
});
console.log(arrayClear); //['Wesley', 'Gael', 'Beatriz']

const num2 = [6, 43, 22, 88, 101, 29];
const buscarMaior45 = num2.filter(x => x > 45); //[88, 101]
console.log(buscarMaior45); //[88, 101]




//Exercícios
//Selecione cada curso e retorne uma array com objetos contendo o titulo, descrição,
//aulas e horas de cada curso.
const cursos = document.querySelectorAll('.curso');
const arrayCursos = Array.from(cursos);

const objetosCurso = arrayCursos.map((curso) => {
  const titulo = curso.querySelector('h1').innerText;
  const descricao = curso.querySelector('p').innerText;
  const aulas = curso.querySelector('.aulas').innerText
  const horas = curso.querySelector('.horas').innerText;
  return {
    titulo: titulo,
    descricao: descricao,
    aulas: aulas,
    horas: horas
  }
});
console.log(objetosCurso);


//Retorne uma lista com os números maiores que 100.
const numerosEx = [3, 44, 333, 23, 122, 322, 33];
const maior100 = numerosEx.filter(n => n > 100);
console.log(maior100); //[333, 122, 322]


//Verifique se 'Baixo' faz parte da lista de instrumentos e retorne true.
const instrumentosEx = ['Guitarra', 'Baixo', 'Bateria', 'Teclado'];
const findBaixo = instrumentosEx.some((instrumento) => {
  return instrumento === 'Baixo'; //true
})
console.log(findBaixo); //true


//Retorne o valor total das compras
const comprasEx = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Queijo',
    preco: 'R$ 10,60'
  },
]

const valorTotal = comprasEx.reduce((acumulador, item) => {
  const precoLimpo = +item.preco.replace('R$ ', '').replace(',', '.');
  console.log(precoLimpo);
  return acumulador + precoLimpo; //49.42
}, 0);
console.log('Valor total: ' + valorTotal); //49.42
