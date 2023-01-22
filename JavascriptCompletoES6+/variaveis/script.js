//Vamos aprender a usar variaveis

//Responsáveis por guardar dados na memória. Inicia com a palavra var , let ou const
var nome = 'Wesley';
let idade = 26;
const possuiFaculdade = true;
console.log(nome, idade, possuiFaculdade);


//Evitem repetições
//DRY (Don't repeat yourself)
var preco = 20;
var totalComprado = 5;
var precoTotal = preco * totalComprado;
console.log(precoTotal);

//Sintaxe
//Palavra chave var seguida do nome, sinal de igual eo valor
var dogName = 'Gael';
var age = 3;
var isAnimal = true;
console.log(dogName, age, isAnimal);


//Virgula
//Utilizei a vírgula para criar mais de uma variável, sem repetir a palavra chave var.
var time = 'São Paulo F.C',
    estadio = 'Morumbi',
    campeaoMundial = true;
console.log(time, estadio, campeaoMundial);    


//Sem valor
//Pode declarar ela e não atribuir valor inicialmente
var precoAplicativo;
  //retorna undefined


//Declarar
//Erro ao tentar utilizar uma variável que não foi declarada.  
//console.log(color); <---
  //retorna color is not defined


//Hoisting
//São movidas para cima do código, porém o valor atribuído não é movido.
console.log(carro);
var carro = 'Ford Mustang'; 
  //retorna undefined

var profissao = 'Software Developer';
console.log(profissao);
  //retorna Software Developer  


//Mudar valor atribuído
//É possível mudar os valores atribuídos a variáveis declaradas com var e let. 
//Porém não é possível modificar valores das declarada como const
var numberOne = 1;
numberOne = 10; 
console.log(numberOne);

let numberTwo = 2;
numberTwo = 22;
console.log(numberTwo);

// const numberThree = 3;
// numberThree = 330;
  //retorna um erro, const não pode ter seu valor reatribuido
 

//Exericios
//Declarar uma variável com o seu nome
var myName = 'Wes Martins';
//Declarar uma variável com a sua idade
var myAge = 26;
//Declarar uma variável com a sua comida favorita e não atribuir valor
var myFavoriteFood;
//Atribuir valor a sua comida favorita
myFavoriteFood = 'Pudim';
//Declarar 5 variáveis diferentes sem valores
var myPhoneNumber,
    myAdress,
    myCar,
    myFavoriteColor,
    myCountry;