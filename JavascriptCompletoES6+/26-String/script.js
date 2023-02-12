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


//str.repeat(n)
const silaba = 'Ta';
silaba.repeat(5); //'TaTaTaTaTa'


//str.replace(regexp|substr, newstr|function)
//Troca parte ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o 
//primeiro valor que encontrar
let listaTimes = 'SãoPaulo Corinthians Palmeiras Flamengo Atlético-MG';
listaTimes = listaTimes.replace(/[ ]+/g, ', ') //'Regular Expression' /[ ]+/g

let preco = 'R$ 1200,43';
preco = preco.replace(',', '.'); //'R$ 1200.43'
//Veremos mais sobre 'Regular Expression'


//str.split(padrao)
//Divide a string de acordo com o padrão passado e retorna uma 'array'
const listaAnimais = 'Cachorro Gato Rato Pombo Urubu';
const arrayAnimais = listaAnimais.split(' ');

const htmlText = '<div>O melhor animal</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');

const htmlNovo = htmlArray.join('section');
//"join" é um método de 'Array'


//str.toLowerCase() e str.toUpperCase()
//Retorna a string em letras maiúsculas ou minúsculas. Bom para verificarmos input dos
//usuários
const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

(sexo1.toLowerCase() === 'feminino'); //true
(sexo2.toLowerCase() === 'feminino'); //true
(sexo3.toLowerCase() === 'feminino'); //true


//str.trim(), str.trimStart(), str.trimEnd()
//Remove espaço em branco do início ou final de uma string.
const valor = '  R$ 23.00  ';
valor.trim(); //'R$ 23.00'
valor.trimStart(); //'R$ 23.00  '
valor.trimEnd(); //'  R$23.00'



//Exercicios
//Utilizando o 'forEach' na array abaixo, some os valores de taxa e os valores de recebimento
const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Taxa Cliente',
    valor: 'R$ 49',
  },
];

let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach((item) => {
  const numLimpo = +item.valor.replace('R$ ', '');
  //DICA ==> '+' na frente de uma variável 'string' se torna 'Number'
  if(item.descricao.slice(0, 4) === 'Taxa')
    taxaTotal += numLimpo;
  else if(item.descricao.slice(0, 4) === 'Rece')
    recebimentoTotal += numLimpo;  
})

console.log('Taxa Total: ' + taxaTotal);
console.log('Recebimento Total: ' + recebimentoTotal);


//Retone um array com a lista abaixo:
const transporte = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const transporteArray = transporte.replace(/[;]+/g, ' ');
console.log(transporteArray.split(' '));


//Retorne todos os 'spans' por 'as';
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contatos</span></li>
              </ul>`;
const htmlAs = html.split('span');
const htmlFinal = htmlAs.join('a');
console.log(htmlFinal);

              
//Retorne o último caractere da frase              
const frase1 = 'Melhor do ano!';
console.log(frase1[frase1.length - 1]);


//Retorne o total de 'taxas';
const transacao = ['Taxa de banco', '  TAXA DO PÃO', ' taxa do mercado', 
'depósito bancário', 'TARIFA especial']

let taxasTotal = 0;
transacao.forEach((item) => {
  item = item.toLowerCase().trim();
  item = item.slice(0, 4);
  if (item === 'taxa') {
    taxasTotal++
  }
})
console.log('Total de taxas: ' + taxasTotal);
