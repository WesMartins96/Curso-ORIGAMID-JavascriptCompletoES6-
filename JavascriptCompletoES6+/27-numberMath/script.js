//Veremos sobre Objetos - Number e Math



//Number
//É a construtora de números, todo número possui as propriedades e métodos do prototype
// de "Number". Number também possui alguns métodos.
const ano = 2023;
const preco = new Number(99);


//MÉTODOS de NUMBER


//Number.isNaN() e Number.isInteger();
//"isNaN()" é um método de Number, ou seja, não faz parte do protótipo.
//"isInteger()" verifica se é um integral.
Number.isNaN(NaN); //true
Number.isNaN(4 * 5); //false

Number.isInteger(20); //true
Number.isInteger(20.3); //false


//Number.parseFloat() e Number.parseInt()
//"parseFloat()" serve para retornarmos um número a partir de uma string. A string deve 
//começar com um número.
//"parseInt()" recebe também um segundo parâmetro que é o 'Radix', 10 é para decimal
parseFloat('99.50'); //Mesma função sem o Number
Number.parseFloat('99.50'); //99.5
Number.parseFloat('100 reais'); //100
Number.parseFloat('R$ 100'); //NaN

//parseInt(x , radix)
//Radix ==> estamos falando de casas decimais.
parseInt('99.50', 10); //99
parseInt(5.43434355555, 10) //5
Number.parseInt('100 Reais', 10); //100
//"Float" possui decimal, "Integer" não.


//n.toFixed(decimais)
//Arredonda o número com base no total de casas decimais do argumento.
const valor = 2.99;
preco.toFixed(); //3

const carro = 1000.455;
+carro.toFixed(2); //1000.46

const preco2 = 14.99;
preco2.toFixed(); //15
//Retorna sempre uma 'string', para retornar um 'Number' use o (+) no inicio da variável.



//n.toString(radix)
//Transforma o 'número' em uma 'string' com base no "radix". Use o 10 para o sistema decimal
const banco = 2.99;
banco.toString(10); // '2.99'



//n.toLocateString(language, options);
//Formata o número de acordo com a língua e opções passadas.
const dinheiro = 59.49;
const dolar = dinheiro.toLocaleString('en-US', {style: 'currency', currency: 'USD'}); //'$59.49'
const real = dinheiro.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}); //'R$59,49'
//Retorno sempre "String"



//MÉTODOS de MATH

//Math
//É um Objeto nativo que possui propriedades e métodos de expressões matemáticas comuns.
Math.PI //3.14159
Math.E; //2.718
Math.LN10; //2.302



//Math.abs(), Math.ceil(), Math.floor() e Math.round()
//abs() retorna o valor absoluto, ou seja, transforma negativo em positivo
//ceil() arredonda para cima, retornando sempre a uma 'integral' e 'floor' para baixo.
//round() arredonda para o número integral mais próximo.
Math.abs(-5.5); //5.5
Math.ceil(4.8334); //5
Math.ceil(4.3); //5
Math.floor(4.8334); //4
Math.floor(4.3); //4
Math.round(4.8334); //5
Math.round(4.3); //4



//Math.max(), Math.min() e Math.random();
//max() retorna o maior número de uma lista de argumentos.
//min() retorna o menor número de uma lista de argumentos.
//random() retorna um número aleatório entre 0 e 1.
Math.max(5, 3, 10, 42, 2); //42
Math.min(5, 3, 10, 42, 2); //2

Math.random(); // 0.XXX
//floor ==> arredonda pra baixo
Math.floor(Math.random() * 100); //entre 0 e 100
Math.floor(Math.random() * 10); //entre 0 e 10
Math.floor(Math.random() * 500); //entre 0 e 500

//Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32;
//Use está formula, para pegar um range de x e x numeros.
//Math.floor(Math.random() * (max - min + 1)) + min;



//Exercícios
//Retorne um número aleatório entre 1050 e 2000
Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050;

//Retorne o maior número da lista abaixo
const numbers = '4, 5, 20, 8, 9';
const arrayNumbers = numbers.split(', ');
const maiorNum = Math.max(...arrayNumbers);


//Crie uma função para limpar os preços e retornar os números com contavos arredondados
//depois retorne a soma total
const listPrecos = ['R$ 59,99', 'R$ 100,222', 'R$ 230  ', 'r$ 200'];
function limparPreco(preco){
  preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
  preco = +preco.toFixed(2);
  return preco;
}

let soma = 0;
listPrecos.forEach((preco) => {
  soma += limparPreco(preco)
})
console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));

limparPreco(listPrecos[1])