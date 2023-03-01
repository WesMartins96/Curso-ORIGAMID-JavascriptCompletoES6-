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

