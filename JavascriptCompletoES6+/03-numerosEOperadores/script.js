//Veremos sobre Números e Operadores

//Números
var idade = 26;
var gols = 1000;
const pi = 3.14; //ponto para usar decimal
var exp = 2e10; //20000000000
//precisão para até 15 digitos
console.log(`idade: ${idade} | gols: ${gols} | pi: ${pi} | exp: ${exp}`);
console.log(typeof idade, typeof gols, typeof pi, typeof exp);


//Operadores aritméticos
var soma = 100 + 50; //150
var subtracao = 100 - 50; //50
var multiplicacao = 100 * 2; //200
var divisao = 100 / 2; //50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4
//lembrando que soma "+" em string serve para concatenar
console.log(`Resultados - soma: ${soma} | subtração: ${subtracao} | multiplicação: ${multiplicacao} | divisão: ${divisao} | expoente: ${expoente} | modulo: ${modulo}`);


//Operadores aritméticos (strings)
var sum = '100' + 50; //10050
var sub = '100' - 50; //50
var mult = '100' * '2'; //200
var div = 'comprei 10' / 2; //NaN (Not a Number)
//é possivel verificar se uma variável é NaN ou não com o uso da função isNan()
console.log(`sum: ${sum} | sub: ${sub} | mult: ${mult} | div: ${div}`);
console.log(typeof sum, typeof sub, typeof mult, isNaN(div));


//NaN = Not a Number
var numero = 80;
var unidade = 'kg';
var peso = numero + unidade; //80kg
var pesoPorDois = peso / 2; //NaN (Not a Number)
console.log(peso);
console.log(isNaN(pesoPorDois));


//A ordem importa
//começa com multiplicação e divisão, depois por soma e subtração
var total1 = 20 + 5 * 2; //30
var total2 = (20 + 5) * 2; //50
var total3 = 20 / 2 * 5; //50
var total4 = 10 + 10 * 2 + 20 / 2; //40
//parênteses para priorizar uma expressão
console.log(`total1: ${total1} | total2: ${total2} | total3: ${total3} | total4: ${total4}`);


//Operadores aritméticos unários
var inclemento = 5;
console.log(inclemento++); //5
console.log(inclemento); //6

var inclemento2 = 5;
console.log(++inclemento2); //6
console.log(inclemento2); //6
//mesma coisa para o decremento (--valor)


//Operadores aritmétcos unários
//O "+" e "-" tenta transformar o valor seguinte em número
var frase = 'Isso é um teste';
+frase; //NaN
-frase; //NaN
console.log(isNaN(frase));

var age = '28';
+age; //28 (número)
-age; //-28 (número)
console.log(+age + 5); //33

var possuiFaculdade = true;
console.log(+possuiFaculdade); //1
//O "-" antes de um número torna ele negatico


//Exercicios
//Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; //35
//Crie duas expressões que retornem NaN
var nome = 'Wesley';
+nome; //NaN
-nome; //NaN
console.log(isNaN(nome));
//Somar a string '200' com o número 50 e retornar 250
var sumEx = '200';
console.log(+sumEx + 50);
//Inclemente o número 5 e retorne o seu valor incrementado
var five = 5;
console.log(++five);
//Como dividir o peso por 2?
var number = +'80' / 2;
var unid = 'kg';
var weight = number + unid; //80kg
console.log(weight);
