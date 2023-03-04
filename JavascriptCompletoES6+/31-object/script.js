//Veremos sobre Objetos - Object


//CONTRUTORES DE OBJETOS

//Object
//Todo objeto é criado com o construtor "Object" e por isso herda as propriedades e
//métodos do seu 'prototype'
const carro = {
  marca: 'ford',
  ano: 2005
}

const pessoa = new Object({
  nome: 'Wesley',
  idade: 26
})


//Métodos de Object
//"Object.create(obj, defineProperties)" retorna um novo objeto que terá como protótipo
//o objeto do primeiro argumento.
const cars = {
  rodas: 4,
  init(marca) {
    this.marca = marca;
    return this;
  },
  acelerar(){
    return `${this.marca} acelerou as ${this.rodas} rodas`
  },
  buzinar(){
    return this.marca + ' buzinou';
  }
}
//podemos criar outro objeto a partir de um objeto que criamos anteriormente, que usará
//as mesmas propriedades e métodos que este objeto já tem.
const honda = Object.create(cars);
honda.init('Honda').acelerar();


//Object.assign()
//"Object.assign(alvo, obj1, obj2)" adiciona ao alvo as propriedades e métodos enumeráveis
//dos demais objetos. O assign irá modificar o objeto alvo.
const funcaoAutomovel = {
  acelerar(){
    return 'acelerou';
  },
  buzinar(){
    return 'buzinou';
  },
}

const moto = {
  rodas: 2,
  capacete: true,
}

const car = {
  rodas: 4,
  mala: true,
}

Object.assign(moto, funcaoAutomovel);
Object.assign(car, funcaoAutomovel);



//Object.defineProperties()
//"Object.defineProperties(alvo, propriedades)" adiciona ao alvo novas propriedades.
//A diferença aqui é a possibilidade de serem definidas as características dessas propriedades.
const minhaMoto = {}
Object.defineProperties(minhaMoto, {
  rodas: {
    value: 2,
    configurable: false, //impede deletar e mudança de valor
    enumerable: true, //torna enumerável
  },
  capacete: {
    value: true,
    configurable: true,
    writable: false, //impede mudança de valor
  },
})


//'GET' e 'SET'
//É possível definirmos diferentes comportamentos para "get" e "set" de uma propriedade.
//Lembrando que ao acionarmos uma propriedade "obj.propriedade", a função get é ativada
//e ao setarmos "obj.propriedade = 'valor'" a função set é ativada.
const suzukiMotors = {}
Object.defineProperties(suzukiMotors, {
  velocidade: {
    get(){
      return this._velocidade;
    },
    set(valor){
      this._velocidade = 'Velocidade ' + valor;
    }
  },
})
suzukiMotors.velocidade = 220;


//"Object.getOwnPropertyDescriptors(obj)"
//Lista todos os métodos e propriedades de um objeto, com as suas devidas configurações.
Object.getOwnPropertyDescriptors(Array);
//Lista com métodos e propriedades e Array

Object.getOwnPropertyDescriptors(Array.prototype);
//Lista com métodos e propriedades do protótipo de Array

Object.getOwnPropertyDescriptor(window, 'innerHeight');
//Puxa de uma única propriedade


//'Object.keys(obj)', 'Object.values(obj)' e 'Object.entries(obj)'
//"Object.heys(obj)" retorna uma array com as chaves de todas as propriedades diretas e 
//enumeráveis do objeto.
//"Object.values(obj)" retorna uma array com os valores do objeto.
//"Object.entries(obj)" retorna uma array com array's contendo a chave e o valor.
Object.keys(Array);
// [] vazia, pois não possui propriedades enumeráveis

const cachorro = {
  raca: 'Shitzhu',
  idade: 3,
}
Object.keys(cachorro);
// ['raca', 'idade']

Object.values(cachorro);
// ['Shitzhu', 3]

Object.entries(cachorro);
/*
(2) [Array(2), Array(2)]
0: (2) ['raca', 'Shitzhu']
1: (2) ['idade', 3]
length: 2
[[Prototype]]: Array(0)
*/


//'Object.getOwnPropertyNames(obj)'
//Retorna uma array com todas as propriedades diretas do objeto
//(não retorna as do protótipo).
Object.getOwnPropertyNames(Array);
// ['length', 'name', 'prototype', 'isArray', 'from', 'of']

Object.getOwnPropertyNames(Array.prototype);
// ['length', 'constructor', 'at', 'concat', 'copyWithin', 'fill', 'find', 'findIndex', 
//'lastIndexOf', 'pop', 'push', 'reverse', 'shift', 'unshift', 'slice', 'sort', 'splice', 
//'includes', 'indexOf', 'join', 'keys', 'entries', 'values', 'forEach', 'filter', 'flat', 
//'flatMap', 'map', 'every', 'some', 'reduce', 'reduceRight', 'toLocaleString', 'toString', 
//'findLast', 'findLastIndex', 'toReversed', 'toSorted', 'toSpliced', 'with']

const cor = {
  nome: 'Azul',
  preco: 4.99,
} 
Object.getOwnPropertyNames(cor);
// ['nome', 'preco']


//"Object.getPrototypeOf()" e "Object.is()"
//'Object.getPrototypeOf()', retorna o protótipo do objeto.
//'Object.is(obj1, obj2)' verifica se os objetos são iguais e retorna true ou false
const frutas = ['Banana', 'Pêra'];
Object.getPrototypeOf(frutas); //Protótipo do tipo (neste caso 'Array')
Object.getPrototypeOf(''); //String

const frutas1 = ['Banana', 'Pêra'];
const frutas2 = ['Banana', 'Pêra'];
Object.is(frutas1, frutas2); //False, pois são objetos diferentes.



//"Object.freeze()", "Object.seal()" e "Object.preventExtensions()"
//'Object.freeze()' impede qualquer mudança nas propriedades.
//'Object.seal()' previne a adição de novas propriedades e impede que as atuais sejam deletadas.
//'Object.preventExtensions()' previne a adição de novas propriedades.
const veiculo = {
  tipo: 'Carro',
  ano: 1998,
}
Object.freeze(veiculo); 
Object.seal(veiculo);
Object.preventExtensions(veiculo);

Object.isFrozen(veiculo); //true
Object.isSealed(veiculo); //true
Object.isExtensible(veiculo); //false


//PROPRIEDADES E MÉTODOS DO PROTÓTIPO

//Já que tudo em 'Javascript' é objeto, as propriedades abaixo estão disponíveis em todos
//os objetos criados a partir de funções construtoras. "{}.constructor" retorna a função
//construtora do objeto.
const fruits = ['Banana', 'Caju'];
fruits.constructor; // Array

const frase = 'Abril serei Junior!';
frase.constructor; // String


//"{}.hasOwnProperty('prop')" e "{}.propertyIsEnumerable('prop')"
//Verifica se possui a propriedade e retorna true. A propriedade deve ser direta do objeto
//e não do protótipo. 
//O '{}.propertyIsEnumerable()' verifica se a propriedade é enumerável
const locais = ['São Paulo', 'Paris', 'Roma'];

locais.hasOwnProperty('map'); // false
Array.hasOwnProperty('map'); // false
Array.prototype.hasOwnProperty('map'); // true

Array.prototype.propertyIsEnumerable('map'); // false
window.propertyIsEnumerable('innerHeight'); // true


//"{}.isPropertyOf(valor)"
//Verifica se é o protótipo do valor passado.
const nomes = ['Wesley', 'Gael'];
Array.prototype.isPrototypeOf(nomes); // true



