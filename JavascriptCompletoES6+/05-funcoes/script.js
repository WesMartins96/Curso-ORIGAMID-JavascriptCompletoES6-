//Veremos sobre funções


//Funções
//Bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma
//função e a mesma retornar outro valor
function areaQuadrado(lado) { 
  return lado * lado; 
}

console.log(areaQuadrado(10));
areaQuadrado(4) //16
areaQuadrado(5) //25
areaQuadrado(2) //4
//chamada de function declaration


//Funções
function pi(){
  return 3.14;
}

var total = 5 * pi(); //15.7
//Parênteses "()" executa uma função


//Parâmetros e argumentos
//Ao criar uma função, você pode definir "parâmetros".
//Ao executar uma função, você pode passar "argumentos".

//peso e altura são parâmetros
function imc(peso, altura){
  const imc = peso / (altura ** 2);
  return imc;
}

imc(80, 1.80); //80 e 1.80 são argumentos
imc(60, 1.70); //60 e 1.70 são argumentos
//Separar por vírgula cada parâmetro. Você pode definir mais de um parâmetro ou nenhum tambêm


//Parênteses executa a função
function corFavorita(cor){
  if (cor === 'Azul') {
    return 'Cor azul';
  }else if (cor === 'Verde') {
    return 'Cor verde';
  }else{
    return 'Você não gosta de nenhuma cor';
  }
}
console.log(corFavorita('Azul')); // retorna 'Cor azul'
corFavorita(); //retorna 'Você não gosta de nenhuma cor'
//Se apenas definirmos a função com a function e não executarmos a mesma, nada que estiver
//dentro dela irá acontecer


//Argumentos podem ser funções
//Chamadas de "callback", geralmente são funções que ocorrem após algum evento
addEventListener('click', function() {
  console.log('Clicou');
});
//A função possui dois argumentos, primeiro é a string 'click', segundo é uma função anônima.
  //Funções anônimas são aquelas em que o nome da função não é definido, escritas como
  //"function() {}" ou "() => {}"


//Pode ou não retornar um valor
//Quando naõ definimos o 'return', ele irá retornar "undefined". O código interno da função
//é executado normalmente, independente de existir valor 'return' ou não.
function imcEx(pesoEx, alturaEx){
  const imcEx = pesoEx / (alturaEx ** 2);
  console.log(imcEx);
}  

imcEx(80, 1.80); //retorna o imc
console.log(imcEx(80, 1.80)); //retorna o imc e undefined


//Valores retornados
//Uma função pode retornar qualquer tipo de dado e até outras funções.
function terceiraIdade(idade){
  if (typeof idade !== 'number') {
    return 'Informe a sua idade!';
  } else if (idade >= 60) {
    return true;
  }else {
    return false;
  }
}
console.log(terceiraIdade(26)); //retorna false
console.log(terceiraIdade(85)); //retorna true
console.log(terceiraIdade('wesley')); //retorna 'Informe a sua idade'
//Cuidado, retornar diferentes tipos de dados na mesma função não é uma boa ideia


//Escopo
//Variáveis e funções dentro de um bloco "{}", não são visíveis fora dele.
function precisoVisitar(paisesVisitados){
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`;
}
console.log(precisoVisitar(20)); //retorna o valor de paises que ainda faltam visitar
//console.log(totalPaises); //erro, "totalPaises" não definido, está fora do escopo da sua função


//Escopo léxico
//Funções conseguem acessar variáveis que foram criadas no contexto 'pai'
var profissao = 'Web Developer';

function dados(){
  var nome = 'Wesley';
  var idade = 26;
  function outrosDados(){
    var endereco = 'São Paulo';
    var telefone = '9 9999 9999';
    return `${nome}, ${idade}, ${endereco}, ${telefone}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados());
dados(); //retorna 'Wesley', 26, 'São Paulo', '9 9999 9999', 'Web Developer'
//outrosDados(); //retorna um erro



//Exercicios
//Crie uma função para verificar se um valor é Truthy.
function isTruthy(valor){
  return !!valor;
}
console.log(isTruthy(0)); // retorna false
console.log(isTruthy(' ')); // retorna true

//Crie uma função matemática que retorne o perímetro de um quadrado, lembrando: perímetro é a
//soma dos quatro lados do quadrado.
function perimetroQuadrado(lado){
  return lado * 4;
}
console.log(perimetroQuadrado(10)); //retorna 40
console.log(perimetroQuadrado(20)); //retorna 80

//Crie uma função que retorne o seu nome completo, ela deve possuir os parâmetros: nome e sobrenome.
function fullName(name, lastName){
  return `${name} ${lastName}`;
}
console.log(fullName('Wesley', 'Martins'));

//Crie uma função que verifica se um número é par.
function par(numero){
  if (numero % 2 == 0) {
    console.log('Este número é par'); 
  }else{
    console.log('Este número é impar'); 
  }
}
par(2); //retorna 'Este número é par'
par(1); //retorna 'Este número é impar'

//Crie uma função que retorne o tipo de dado do argumento passado nela (typeof).
function tipoDeDado(dado){
  return typeof dado;
}
console.log(tipoDeDado(10)); //retorna number
console.log(tipoDeDado('10')); // retorna string
console.log(tipoDeDado(true)); //retorna boolean

//addEventListener é uma função nativa do javascript, o primeiro parâmetro é o evento que ocorre
//e o segundo o callback, ultilize essa função para mostrar no console o seu nome completo, quando
//o evento 'scroll' correr.
addEventListener('scroll', function(){
  console.log('Wesley Martins');
});