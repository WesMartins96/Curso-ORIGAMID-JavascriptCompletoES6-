//Veremos sobre Atribuição e operador ternário


//Comentários
// Comentário em uma linha
/**
 * comentário
 * com diversas
 * linhas
 */
//var nome = 'wesley';
//Comentar uma linha de código desativa a mesma. Não deixe linhas de código comentadas no 
//arquivo final


//Operadores de atribuição
//Podem funcionar como formas abreviadas
var x = 5;
var y = 10;
x += y; //x = x + y (15)
x -= y; //x = x - y (-5)
x *= y; //x = x * y (50)
x /= y; //x = x / y (0.5)
x %= y; //x = x % y (0)
x **= y; //x = x ** y (9765625)


//Operador ternário
//Abreviação de condicionais com "if" e "else"
var idade = 26;
var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber); //'Pode beber'
//Condição ? true : false
  //Geralmente utilizado quando precisamos atribuir um valor para uma variável, dependendo de
  //uma condição.


//If abreviado
//Não é necessário abrir e frachar as chaves "{}" quando retornamos apenas uma linha de código
var possuiFaculdade = true;
if(possuiFaculdade) console.log('Possui faculdade');
else console.log('Não possui faculdade');  
//ou
if(possuiFaculdade)
  console.log('Possuo faculdade');
else
  console.log('Não possuo faculdade');  
//Eu particulamente prefiro a segunda opção aqui



//Exercicios
//Some 500 ao valor de scroll abaixo, atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;
console.log(scroll); //1500

//Atribua true para a variável darCredito, caso o cliente possua carro e casa.
//E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

if(possuiCasa && possuiCarro)
  darCredito = true;
else
  darCredito = false;  
//Essa expressão retorna 'true'

//Atribua true para a variável temAcesso, caso o cliente possua tiket e maiorIdade.
//E false caso o contrário. Usando operador ternário.
var tiket = true;
var maiorIdade = true;
var temAcesso;

temAcesso = (tiket && maiorIdade) ? 'Pode passar' : 'Não tem acesso';
console.log(temAcesso);