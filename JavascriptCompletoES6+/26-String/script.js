//Veremos sobre Objetos - String


//String
//É a construtora de "strings", toda string possui as propriedades e métodos do 
//prototype de string.
const comida = 'Pizza';
const liquido = new String('Água');
const ano = new String(2023);


//MÉTODOS e PROPRIEDADES

//str.length
//Propriedade com o total de caracteres da string
const carro = 'Ferrari';
const frase = 'Carro mais veloz de toda a roma';

carro.length; //7
frase.length; //31

carro[0]; //'F'
frase[0]; //'C'
frase[frase.length - 1]; //'a'


//str.charAt(n)
//Retorna o caractere de acordo com o index de '(n)'
const linguagem = 'Javascript';

linguagem.charAt(0); //'J'
linguagem.charAt(2); //'v'
linguagem.charAt(linguagem.length - 1); //'t'


//str.concat(str2, str3, ...)
//Concatena as strings e retorna o resultado
const fraseEx = 'A melhor linguagem é ';
const linguagemEx = 'Javascript';

const fraseCompleta = fraseEx.concat(linguagemEx, '!!!');
console.log(fraseCompleta);


//str.includes(search, position)
//Procura pela string exata dentro de outra string. A procura é case sensitive.
const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

listaFrutas.includes(fruta); //true
fruta.includes(listaFrutas); //false


//str.endsWith(search) e str.startWith(search)
//Procura pela string exata dentro de outra string. A procura é case sensitive.
const cor = 'Amarelo';

cor.endsWith('relo'); //true
cor.startsWith('Ama'); //true
cor.startsWith('elo'); //false


//str.slice(start, end)
//Corta a string de acordo com os valores de 'start' e 'end'
const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

transacao1.slice(0, 3); //'Dep'
transacao2.slice(0, 3); //'Dep'
transacao3.slice(0, 3); //'Tax'

transacao1.slice(12); //'cliente'
transacao1.slice(-4); //'ente'
transacao1.slice(3, 6); //'ósi'



//str.substring(strat, end)
//Corta a string de acordo com os valores de 'start' e 'end'. Não funciona com valores
//negativos como o "slice()"
const javascript = 'Javascript';
javascript.substring(3, 5); //'as'
javascript.substring(0, 4); //'Java'
javascript.substring(4); //'script'
javascript.substring(-3); //'Javascript' 
//Não funciona com valores negativos


//str.indexOf(search) e str.lastIndexOf(search)
//Retorna o index da string, assim que achar o primeiro resultado ele já retorna. No 
//caso do "lasIndexOf()" ele retorna o último resultado.
const instrumento = 'Guitarra';

instrumento.indexOf('r'); //5
instrumento.lastIndexOf('r') //6
instrumento.indexOf('ta'); //3


//str.padStart(n, str) e str.padEnd(n, str)
//Aumenta o tamanho da string para o valor de 'n'. Ou seja, uma string com 8 caracteres,
//se passarmos 'n = 10', ela passará a ter 10 caracteres. O preenchimento é feito com espaços
//caso não seja declarado o segundo argumento
const listaPreco = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPreco.forEach((preco) => {
  console.log(preco.padStart(10, '.'));
})


listaPreco.forEach((preco) => {
  console.log(preco.padEnd(10, '.'));
})

listaPreco[0].padStart(10, '.'); // .....R$ 99
listaPreco[0].padEnd(10, '.'); // R$ 99.....


