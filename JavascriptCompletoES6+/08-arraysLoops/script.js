//Veremos sobre arrays e loops


//Array
//É um grupo de valores geralmente relacionados. Servem oara guardarmos diferentes valores em uma
//única variável.
var videoGames = ['switch', 'playstation 4', 'xbox'];
videoGames[0]; //'switch'
videoGames[2]; //'xbox'
//Acesse um elemento do array utilizando "[numero]"


//Métodos e propriedades de uma array
var consoles = ['nintendo 64', 'mega drive', 'playstation 1'];
consoles.pop(); //Remove o último item e retorna ele
consoles.push('atari'); //Adiciona ao final do array
consoles.length; //3
//Existem diversos outros métodos, como "map", "reduce", "forEach" e mais que veremos mais à frente
/*"map": o método map cria um novo array com os resultados de uma função aplicada a cada elemento do 
array original.*/
/*"reduce": o método reduce aplica uma função a cada elemento de um array, acumulando o resultado 
em uma única variável (conhecida como "acumulador").*/
/*"forEach": o método forEach percorre cada elemento de um array e aplica uma função a cada elemento. 
Ele não retorna nenhum valor, mas pode ser usado para realizar uma determinada ação para cada elemento 
do array.*/


//For loop
//Fazem algo repetidamente até que uma condição seja atingida.
for(var num = 0; num < 10; num++){
  console.log(num);
}
//retorna de 0 a 9 no console
  //O for loop possui 3 partes, "início", "condição" e "incremento"


//While loop
var i = 0;
while(i < 10){
  console.log(i);
  i++;
}  
//retorna de 0 a 9 no console
  //O for loop é mais comum


//Arrays e loops
var times = ['São Paulo', 'Palmeiras', 'Flamengo'];
for(var i = 0; i < times.length; i++){
  console.log(times[i]);
}  
//O for loop é mais comum


//Break
//O loop irá parar caso encontre a palavra "break"
var animais = ['cachorro', 'gato', 'coelho'];
for(var a = 0; a < animais.length; a++){
  console.log(animais[a]);
  if (animais[a] === 'gato') {
    break;
  }
}


//forEach
//forEach é um método que executa uma função para cada item da array. É uma forma mais simples de 
//utilizarmos um loop com arrays (ou array-like)
var cores = ['vermelho', 'branco', 'preto'];
cores.forEach(function(item) {
  console.log(item);
});
//O argumento item será atribuido dinamicamente
var cores = ['vermelho', 'branco', 'preto'];
cores.forEach(function(item, index, array) {
  console.log(item, index, array);
});
//Podemos passar os seguintes parâmetros "item", "index" e "array"


//Não se confunda com a sintaxe
var numero = 0;
var max = 50;
for(;numero < max;){
  console.log(numero);
  numero++;
}
//Não aconselho escrever da forma acima, mas funciona normalmente.



//Exercicios
//Crie uma array com os anos que o Brasil ganhou a copa (1959, 1962, 1970, 1994, 2002)
var copas = ['1959', '1962', '1970', '1994', '2002'];

//Interaja com o array utilizando um loop, para mostrar no console a segunte mensagem,
//`O Brasil ganhou a copa de ${ano}`
for(var i = 0; i < copas.length; i++){
  console.log(`O Brasil ganhou a copa de ${copas[i]}`);
}

//Interaja com um loop nas frustas abaixo e pare ao chegar em 'Pera'
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];
for(var item = 0; item < frutas.length; item++){
  console.log(frutas[item]);
  if (frutas[item] === 'Pera') {
    break;
  }
}

//Coloque a última fruta do array acima em uma variável, sem remover a mesma do array
var frutaMelancia = frutas[4];
console.log(frutaMelancia); //retorna o valor do indice 4 = 'Melância'

console.log(frutas); //o array ainda contem a fruta 'Melância'

