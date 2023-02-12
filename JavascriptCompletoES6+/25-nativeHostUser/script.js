//Veremos sobre Objetos - Native, Host e User


//Native  (OBJETOS NATIVOS)
//Os objetos nativos são aqueles definidos na especificação da linguagem e são
//implementados independentemente do host

//Construtores de objetos nativos
Object;
String;
Array;
Function;



//Host  (OBJETOS DO HOST)
//Objetos do host são aqueles implementados pelo próprio ambiente. Por exemplo no browser
//possuímos objetos do DOM, como 'DOMList', 'HTMLCollection' e outros. Em 'Node.js' os
//objetos do "Host" são diferentes, já que não estamos em um ambiente do browser.

//Objetos do browser
NodeList;
HTMLCollection;
Element;


//User  (OBJETOS DO USUÁRIO)
//Objetos do user, são os objetos definidos pelo seu aplicativo. Ou seja, qualquer objeto que
//você criar ou que importa de alguma biblioteca externa.
const Pessoa = {
  nome: 'Wesley'
}


/* ---> DIFERENTES VERSÕES <---*/

// ⋄ BROWSER DIFERENTES ⋄
//Apesar de tentarem ao máximo manter um padrão, browsers diferentes possuem objetos com
//propriedades e métodos diferentes.

// ⋄ VERSÕES DE BROWSER ⋄
//Sempre que o browser é atualizado, novos objetos, métodos e propriedades podem ser implementados

// ⋄ HOST E NATIVE OBJECTS ⋄
//Por exemplo, browsers que não implementaram o ECMAScript 2015 (ES6), não possuem o método
//'find' de Array


/* ---> VERSÕES DE JAVASCRIPT <---*/

// ⋄ ECMA ⋄
//Organização responsável por definir padrões para tecnologias. ECMAScript é o padrão Javascript

// ⋄ ECMASCRIPT 2015 ou ES6 ⋄
//ES é uma abreviação de ECMAScript, ES6 é a sexta versão do ECMAScript, que foi lançada em
//2015. Por isso ECMAScript 2015 é igual a ES6. A partir da ES6, existe uma tendência anual
//de atualizações. ECMAScript 2015, 2016, 2017, 2018 e Next.

// ⋄ ENGINE ⋄
//Existem diversas engines que implementam o ECMAScript como "V8", "SpiderMonkey", "Chackra",
//"JavaScriptCore" e mais.



//Bibliotecas
//Bibliotecas como 'JQuery' foram criadas para resolver o problema de inconsistências entre
//browsers e adicionar funcionalidades que não existiam nativamente. A padronização dos
//browsers e a implementação de soluções nativas, torna as mesmas obsoletas.
$('a').addClass('ativo');
$('a').hide();
$('a').show();



//Verificar se existe
//O "typeof" retorna o tipo de dado. Caso esse dado não exista ou não tenha sido definido,
//ele irá retornar 'undefined'. Ou seja, quando não for 'undefined' quer dizer que existe
if (typeof Array.from !== "undefined")
if (typeof NodeList !== "undefined");



// ⋄ API ⋄
//(Application Programming Interface)
//É uma interface de software criada para a interação com outros softwares. Ou seja, toda
//interação que fazemos com o browser utilizando objetos, métodos e propriedades, estamos 
//na verdade interagindo com a "API" do browser




//Exercicios
//Liste 5 objetos nativos
Number;
String;
Array;
Function;
Date;

//Liste 5 objetos do browser
Document;
innerHeight;
length;
location;
parent;