//Veremos sobre o Objeto - Array



//Arrays
//Arrays armazenam uma coleção de elementos. Estes podem ser 'strings', 'arrays', 'boolean',
//'number', 'functions', 'objects' e mais.
const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), //dados[0]
['Carro', 'Portas', {cor: 'Azul', preco: 2000}],  //dados[1]
function andar(nome) {  //dados[2]
  console.log(nome);
}];

dados[2]('Ford');
dados[1][2].cor; //'Azul'


//Construção de Arrays
//Toda array herda os métodos e propriedades do protótipo do construtor 'Array'.
const cores = ['Vermelho', 'Branco', 'Preto'];
const carros = new Array('Corola', 'Mustang', 'Honda');

carros[1]; //'Mustang'
carros[2] = 'Ferrari';  //podemos atribuir valores no array que já tem um valor
console.log(carros[2]);
carros[10] = 'Parati';
console.log(carros.length); //11
//Os valores das array's não são estáticos.


//Array.from()
//"Array.from()" é um método utilizado para transformar 'array-like objects', em uma array.
let li = document.querySelectorAll('li'); //NodeList
li = Array.from(li); //Array

const cars = {
  0: 'Fiat',
  1: 'Honda',
  2: 'Ford',
  length: 3,
}

const carsArray = Array.from(cars);
console.log(carsArray);


//Array.isArray()
//Verifica se o valor passado é uma array e retorna um valor booleano.
let ol = document.querySelectorAll('ol');
Array.isArray(ol); //false 

ol = Array.from(ol); //Array
Array.isArray(ol); //true
console.log(Array.isArray(ol));


//--Varias formas de criar um Array--
//Array.of(), Array(), e new Array()
//Verifica se o valor passado é um "Array" e retorna um valor booleano. A palavra chave 'new'
//não é necessária para utilizar o construtor "Array".
Array.of(10); //[10]
Array.of(1, 2, 3, 4); //[1, 2, 3, 4]
new Array(5); //[,,,,]  empty x 5
Array(5); //[,,,,] empty x 5
Array(1, 2, 3, 4); //[1, 2, 3, 4]
//Array.of(22) ==> cria um array com valor 22,
//Array(22) ==> cria um array de 22 elementos vazios [empty x 22]


//Propriedades e Métodos do "Prototype"
//'[].length' retorna o tamanho do array.
const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
frutas.length; //3

//Tamanho do array 
frutas[0].length; //6
frutas[1].length; //4
frutas[2].length; //2


//Métodos Modificadores [].sort()
//Os próximos métodos que vamos falar sobre, são métodos modificadores (mutator methods).
//Além de retornar um valor, eles modificam a array original. "[].sort()" organiza a pelo
//unicode.
const nomes = ['Wesley', 'Beatriz', 'Gael'];
nomes.sort(); //strings retornam em ordem alfabetica
console.log(nomes); //['Beatriz', 'Gael', 'Wesley']

const idades = [32, 21, 33, 43, 1, 12,8];
idades.sort(); //number não organiza igual a string
console.log(idades); //[1, 12, 21, 32, 33, 43, 8]


//"[].unshift()" e "[].push()"
//'[].unshift()' adiciona elementos ao início da array e retorna o 'length' da mesma.
//'[].push()' adiciona elementos ao final da array e retorna o 'length' da mesma.
const meusCarros = ['Ford', 'Fiat', 'VW'];
meusCarros.unshift('Honda', 'Kia'); //length 5
console.log(meusCarros); //['Honda', 'Kia', 'Ford', 'Fiat', 'VW']

meusCarros.push('Ferrari', 'Golf'); //length 7
console.log(meusCarros); //['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari', 'Golf']


//"[].shift()" e "[].pop()"
//'[].shift()' remove o primeiro elemento da array e retorna o mesmo.
//'[].pop()' remove o último elemento da array e retorna o mesmo.
const myWifeCars = ['Ford', 'Fiat', 'VW', 'Honda'];
const firstCar = myWifeCars.shift(); //'Ford'
console.log(firstCar);
console.log(myWifeCars); //['Fiat', 'VW', 'Honda']

const lastCar = myWifeCars.pop(); //'Honda'
console.log(lastCar);
console.log(myWifeCars); //['Fiat', 'VW']


//"[].reverse()"
//'[].reverse' inverte os itens da array e retorna uma nova array
const myDogCars = ['Ford', 'Fiat', 'VW', 'Honda'];
myDogCars.reverse(); //['Honda', 'VW', 'Fiat', 'Ford']
console.log(myDogCars); 

