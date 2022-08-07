"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//string, boolean, number ...
const x = 10; //annotation
console.log(x);
//inferencia x annotation
const y = 12; //inferência
// tipos básicos
let firstName = 'Matheus';
let age = 30;
const isAdmin = true;
//String != string
console.log(typeof firstName);
firstName = 'João';
console.log(firstName);
// object 
const myNumber = [1, 2, 3];
console.log(myNumber);
console.log(myNumber.length);
console.log(firstName.toUpperCase());
myNumber.push(5);
console.log(myNumber);
//tuplas
let myTuple;
myTuple = [5, 'bom dia', ['a', 'b']];
//object literals -> {prop: value}
const user = {
    name: 'Pedro',
    age: 12,
};
console.log(user);
//any 
let a = 0;
a = 'bom dia';
a = true;
a = [];
// não é uma boa ideia, muito menos uma boa prática.
//SOLUÇÃO PARA O ANY
//union type
let id = '10';
id = 10;
const userId = 10;
const userName = 'Daniele';
//enum
//tamanho de roupas (size: médio, size: pequeno)
var Size;
(function (Size) {
    Size["P"] = "pequeno";
    Size["M"] = "m\u00E9dio";
    Size["G"] = "grande";
})(Size || (Size = {}));
const camisa = {
    name: "camisa gola V",
    size: Size.G,
};
console.log(camisa);
//consigo usar enum para diminuir código.
// literal types
let teste;
// teste = "outro valor "   da erro
teste = 'autenticado';
teste = null;
//funções
function sum(a, b) {
    return a + b;
}
console.log(sum(24, 42));
//só vou conseguir usar number
function sayHelloTo(name) {
    return 'Bom dia' + ' ' + name;
}
console.log(sayHelloTo('Dani'));
// void é uma função que não retorna nada.
function logger(msg) {
    console.log(msg);
}
logger('testei');
function greeting(name, greet) {
    greet ? console.log(`Olá ${greet} ${name}`) : console.log(`Olá queridx ${name}`);
}
greeting('João');
greeting('Maria', 'querida');
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 20,
    n2: 45
};
console.log(multiplyNumbers(someNumbers));
//narrowing
//checagem de tipos
function doSomething(info) {
    typeof info === 'number' ? console.log(`O número é ${info}!`) : console.log('Não foi passado o número');
}
doSomething(45);
doSomething(false);
//generics
function showArrayItens(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
;
const a1 = [1, 2, 3, 4];
const a2 = ['a', 'b', 'c'];
showArrayItens(a1);
showArrayItens(a2);
//classes
class User {
    constructor(nome, role, isApproved) {
        this.nome = nome;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.nome}`);
    }
}
const zeca = new User('Zeca', 'Admin', true);
console.log(zeca);
zeca.showUserName();
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é ${this.brand} e ele tem ${this.wheels} rodas`);
    }
}
const fusca = new Car("VW", 4);
fusca.showBrand();
// herança (e não é o terreno do seu avô)
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
a4.showBrand();
//decorators
//constructor decorator
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
;
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
    ;
};
Person = __decorate([
    BaseParameters()
], Person);
;
const sam = new Person('Sam');
console.log(sam);
