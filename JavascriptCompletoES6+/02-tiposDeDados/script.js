//Veremos sobre tipos de dados

//7 tipos de dados
//Todos são primitivos exceto os objetos.
var nome = 'Wesley'; //String
var idade = 26; //Number
var isHuman = true; //Boolean
var time; //Undefined
var comida = null; //Null
var simbolo = Symbol(); //Symbol
var novoObjeto = {}; //Object
//Primitivos são dados imutáveis.


//Verificar tipo de dado
var meuNome = 'Gael';
console.log(typeof meuNome);
  //retorna string
var isAnimal = true;
console.log(typeof isAnimal);
  //retorna boolean
var valorNulo = null;
console.log(typeof valorNulo);  
//typeof null retorna object


//String
//Você pode somar uma string e assim concatenar as palavras
var myName = 'Beatriz';
var myLastName = 'Pereira';
var fullName = myName + ' ' + myLastName;
console.log(fullName);

//Você pode somar números com strings, o resultado final é sempre uma string.
var gols = 1000;
var frase = 'Pelé fez ' + gols + ' gols';
console.log(frase);
console.log(typeof frase);
  //sempre que concatenamos um number com string o typeof é string


//Aspas duplas, simples e template string
'Javascript é "super" fácil';
"Javascript é 'super' fácil";
"Javascript é \"super\" fácil";
`Javascript é "super" fácil`;
//"Javascript é "super" fácil"; //Inválido
//'Javascript é 'super' fácil'; //Inválido

//Não necessariamente precisamos atribuir valores a uma variável.


//Template string
var goals = 131;
var frase1 = 'Rogerio Ceni fez ' + goals + ' gols';
var frase2 = `Rogerio Ceni fez ${goals} gols`; //Ultilizando Template string
console.log(frase1);
console.log(frase2);
//Você deve passar expressões / variáveis dentro de ${}


//Exercicios
//Declare uma variável contendo uma string
var minhaFrase = 'sou um fullstack developer';
//Declare uma variável contendo um número dentro de uma string
var meuNumero = '96';
//Declare uma variável com sua idade
var minhaIdade = 26; 
//Declare duas variáveis, uma com seu nome e outra com seu sobrenome e some as mesmas
var firstName = 'Wesley',
    middleName = 'Martins',
    myFullName = `${firstName} ${middleName}`;
//Coloque a seguinte frase em uma variável: it's time
var fraseEx = "it's time"
//Verifique o tipo da variável que contem seu nome
console.log(typeof firstName);