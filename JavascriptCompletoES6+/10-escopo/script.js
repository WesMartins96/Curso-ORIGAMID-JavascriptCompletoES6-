//Veremos sobre escopo

//Escopo de função
//Variáveis declaradas dentro de funções não são acessadas fora das mesmas
function mostrarCarro(){
  var carro = 'Fusca';
  console.log(carro);
}

mostrarCarro(); //'Fusca' no console
//console.log(carro); //Erro, carro is not defined
//Escopo evita o conflito entre nomes.


//Variável global (erro)
//Declarar variáveis sem a palavra chave "var", "let" ou "const", cria uma variável que pode ser 
//acessada em qualquer escopo (global). Isso é um erro
function mostrarTime(){ 
  time = 'São Paulo F.C';
  console.log(time);
}

mostrarTime(); //'São Paulo F.C'
console.log(time); //'São Paulo F.C'
//'use strict' impede isso


//Escopo de função (pai)
//Variáveis declaradas no escopo pai da função. conseguem ser acessadas pelas funções
var cor = 'vermelho';
function mostrarCor(){
  var frase = `minha cor favorita é o ${cor}`;
  console.log(frase);
}

mostrarCor(); //minha cor favorita é o vermelho
console.log(cor); //vermelho


//Escopo de bloco
//Variáveis criadas com "var", vazam o bloco. Por isso com a instrodução do ES6 a melhor forma
//de declararmos uma variável é utilizando "const" e "let", pois respeitam o escopo do bloco.
if (true) {
  var nome = 'gael';
  console.log(nome);
}
console.log(nome); //gael


//"var" vaza o bloco
//Mesmo com a condição falsa, a variável ainda será declarada utilizando hoisting e o valor
//ficará como undefined.
if (false) {
  var dog = 'Rosbife';
  console.log(dog);
}
console.log(dog); //undefined


//Const, let e var
//A partir de agora vamos utilizar apenas "const" e "let" para declararmos variáveis.
if (true) {
  const fruta = "banana";
  console.log(fruta);
}
//console.log(fruta); //Erro, fruta is not defined


//'{}' criando um bloco
//Chaves "{}" criam um escopo de bloco, não confundir com a criação de objetos "= {}"
{
  var age = 26;
  const myName = 'wes';
}
console.log(age); //26
// console.log(myName); //Erro, myName is not defined


//For loop
//Ao utilizar "var" dentro de um "for" loop, que é um bloco, o valor da variável utilizada
//irá 'vazar' e existir fora do loop.
for(var i = 0; i < 10; i++){
  console.log(`Número ${i}`);
}
console.log(i); //10


//For loop com let
//Com o "let" evitamos que o número vaze.
for(let j = 0; j < 10; j++){
  console.log(`Número ${j}`);
}
// console.log(j); //j is not defined


//Const
//Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável
//evitando bugs no código.
const mes = 'Dezembro';
//mes = 'Janeiro'; //erro, tentou modificar o valor de uma constante
//const semana; //erro, declarou sem valor 

const data = {
  dia: 28,
  mes: 'Dezembro',
  ano: 2018,
}

data.dia = 29; //funciona
//data = 'Janeiro'; //erro
  //Variáveis com valores constantes deve utilizar o "const".


//Let
//Mantém o escopo do bloco, impede a redeclaração, mas permite modificação do valor da variável
let year;
year = 2023;
year++;
console.log(year); //2024
//let year = 2021; //erro, redeclarou a variável
  //Geralmente vamos utilizar o "const".



//Exercicios
//Por qual motivo o código abaixo retorna com erros?
{
  var color = 'red';
  const car =  'ford';
  let doors = 4;
}
//console.log(color, car, doors);
//R. "var" vaza do escopo e isso é um problema, no caso da um erro pois "const" e "let" não deixam
//vazar os valores de dentro do escopo

//Como corrigir o código abaixo?
const dois = 2;
function somarDois(x){
  return x + dois;
}
function dividirDois(x){
  return x / dois;
}
somarDois(4); //6
dividirDois(6); //3

//O que fazer para total retornar 500?
const numero = 50;
for(let numero = 0; numero < 10; numero++) { 
  console.log(numero); 
} 
 
const total = 10 * numero; 
console.log(total);
//R. basta trocar dentro do for loop o "var" para "let", assim não vaza o valor.