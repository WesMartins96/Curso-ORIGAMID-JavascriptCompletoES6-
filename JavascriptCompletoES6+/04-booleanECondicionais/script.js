//Veremos sobre boolean e condicionais


//Boolean
//Existem dois valores booleanos 'false' ou 'true'
var possuiGraduacao = true; //1
var possuiDoutorado = false; //0


//Condicionais if e else
//Verificar se um expressão é verdadeira com "if", caso contrario o "else" será ativado
var possuiIngles = true;

if (possuiIngles) {
  console.log('Sabe inglês');
} else {
  console.log('Não sabe inglês');
}
//retorna 'Sabe inglês' e não executa o else
  //O valor dentro dos parênteses sempre será avaliado em "false" ou "true"


//Condicionais else if
//Se o "if" não for verdadeiro, ele testa o "else if"
var possuiJavascript = true;
var possuiJava = false;

if (possuiJava) {
  console.log('Sabe a linguagem Java');
} else if (possuiJavascript) {
  console.log('Sabe a linguagem Javascript');
} else{
  console.log('Não sabe nenhuma linguagem');
}
//retorna 'Sabe a linguagem Javascript', mas não mostra possuiJava


//Truthy e falsy
//Existem valores que retornam "true" e outros que retornam "false" quando verificados em uma
//expressão booleana
//Falsy
if(false);
if(0); // ou -0
if(NaN);
if(null);
if(undefined);
if(''); // ou "" ou ``
//O resto é truthy

//Trurhy
if(true);
if(1);
if(' ');
if('wesley');
if(-5);
if({});


//Operador lógico de negação '!'
//O operador "!", nega uma operação booleana, ou seja, "!true" é igual a "false"
//Truthy
if(!true); //false
if(!1); //false
if(!''); //true
if(!undefined); //true
if(!!' '); //true
if(!!''); //false
//Dica, você pode utilizar o "!!" para verificar se uma expressão é "truthy" ou "falsy"


//Operadores de comparação
//Vão sempre retornar um valor booleano
10 > 5; //true
5 > 10; //false
20 < 10; //false
10 <= 10; //true
10 >= 11; //false

//Operadores de comparação 
//O "==" faz uma comparação não tão estrita e o "===" faz uma comparação estrita, ou seja,
//o tipo de dado deve ser o mesmo quando usamos "==="
10 == '10'; //true
10 == 10; //true
10 === '10'; //false
10 === 10; //true
10 != 15; //true
10 != '10'; //false
10 !== '10'; //true


//Operadores lógicos "&&"
//"&&" compara se uma expressão "e" a outra é verdadeira
true && true; //true
true && false; //false
false && true; //false
'Gato' && 'Cachorro'; //'Cachorro'
(5 - 5) && (5 + 5); //0
'Gato' && false; //false
(5 >= 5) && (3 < 6); //true
//Se ambos os valores forem "true" ele irá retornar o último valor verificado, se algum valor
//for "false" ele irá retornar o mesmo e não irá continuar a verificar os próximos


//Operadores lógicos "||"
//"||" compara se uma expressão "ou" outra é verdadeira
true || true; //true
true || false; //true
false || true; //true
'Cat' || 'Dog'; //'Cat'
(5 - 5) || (5 + 5); //10
'Cat' || false; //'Cat'
(5 >= 5) || (3 < 6); //true
//Retorna o primeiro valor "true" que encontrar


//Switch
//Com o "switch" você pode verificar se uma variáel é igual à diferentes valores usando "case".
//Caso ela seja igual, você pode fazer alguma coisa e utilizar a plavra chave "break;" para
//cancelar a continuação. O valor "default" ocorrerá caso nenhuma das anteriores seja verdadeira
var favColor = 'Vermelho';

switch (favColor) {
  case 'Vermelho':
    console.log('São Paulo F.C Campeão Paulista 2023');
    break;
  case 'Azul':
    console.log('Gremio Campeão Gaucho 2023');
    break;
  case 'Branco':
    console.log('Santos Campeão Copa do Brasil 2023');  
    break;
  default:
    console.log('Nenhum Campeão em 2023');
    break;
}



//Exercicios
//Verifique se a sua idade é maior que a de algum parente. Dependendo do resultado coloque
//no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 26,
    parenteIdade = 25;
if (minhaIdade > parenteIdade) {
  console.log('É maior');
}else if(minhaIdade == parenteIdade){
  console.log('É igual');
}else{
  console.log('É menor');
}    
//Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
//R. Valor retornado é o 3. pois todos os valores são verdadeiros, sendo assim retornamos o
//primeiro verdadeiro.

//Verifique se as seguintes variáveis são "Truthy" ou "Falsy"
var nome = 'Wesley'; //Truthy
var idade = 26; //Truthy
var isSenior = false; //Falsy
var empregoFuturo; //Falsy
var dinheiroNaConta = 0; //Falsy
console.log(!!nome, !!idade, !!isSenior, !!empregoFuturo, !!dinheiroNaConta);

//Compare o total de habitantes do brasil com china (valor em milhões/bilhões)
var brasil = 207;
var china = 1340;
if (brasil > china) {
  console.log('Brasil tem mais habitantes que a China com 207 milhões de pessoas');
} else {
  console.log('China tem mais habitantes que o Brasil com 1.340 bilhões de pessoas');
}

//O que irá aparecer no console?
if (('Tigre' === 'tigre') && (5 > 2)) {
  console.log('Verdadeiro');
}else{
  console.log('Falso');
}
//R. Aparecerá a primeira "false" no caso aparecerá o que está dentro do escopo do else
//'Falso'

// O que irá aparecer no console? 
if(('Gato' === 'gato') || (5 > 2)) { 
  console.log('Gato' && 'Cão'); 
} else { 
  console.log('Falso'); 
}
//R. Aparecerá a primeira "true" no caso não chegará no else.
//'Cão' 