//string, boolean, number ...
const x: number = 10;  //annotation

console.log(x)

//inferencia x annotation

const y = 12;  //inferência

// tipos básicos

let firstName: string = 'Matheus';
let age: number = 30;
const isAdmin: boolean = true;

//String != string

console.log(typeof firstName);

firstName = 'João';

console.log(firstName);

// object 
const myNumber: number[] = [1, 2, 3];
console.log(myNumber);
console.log(myNumber.length);
console.log(firstName.toUpperCase());

myNumber.push(5);
console.log(myNumber)

//tuplas

let myTuple: [number, string, string[]];

myTuple = [5, 'bom dia', ['a', 'b']];

//object literals -> {prop: value}

const user: { name: string, age: number } = {
     name: 'Pedro',
     age: 12,
}
console.log(user);

//any 
let a: any = 0;
a = 'bom dia';
a = true;
a = [];
// não é uma boa ideia, muito menos uma boa prática.


//SOLUÇÃO PARA O ANY
//union type

let id: string | number = '10';
id = 10;
//consigo usar mais de um tipo de dado sendo retornado

//type alias

type myIdType = number | string
const userId: myIdType = 10;
const userName: myIdType = 'Daniele';

//enum
//tamanho de roupas (size: médio, size: pequeno)
enum Size {
     P = "pequeno",
     M = "médio",
     G = "grande"
}

const camisa = {
     name: "camisa gola V",
     size: Size.G,
}
console.log(camisa);

//consigo usar enum para diminuir código.

// literal types

let teste: "autenticado" | null;

// teste = "outro valor "   da erro
teste = 'autenticado';
teste = null;

//funções

function sum(a: number, b: number) {
     return a + b;
}
console.log(sum(24, 42));
//só vou conseguir usar number

function sayHelloTo(name: string): string {
     return 'Bom dia' + ' ' + name;
}
console.log(sayHelloTo('Dani'));

// void é uma função que não retorna nada.

function logger(msg: string): void {
     console.log(msg);
}
logger('testei');


function greeting(name: string, greet?: string) {
     greet ? console.log(`Olá ${greet} ${name}`) : console.log(`Olá queridx ${name}`);
}
greeting('João');
greeting('Maria', 'querida');

//interface
//elas padronizam algo para utilizarmos como tipos

interface MathFunctionParameters {
     n1: number,
     n2: number
}

function sumNumbers(nums: MathFunctionParameters) {
     return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));

function multiplyNumbers(nums: MathFunctionParameters) {
     return nums.n1 * nums.n2;
}
const someNumbers: MathFunctionParameters = {
     n1: 20,
     n2: 45

}

console.log(multiplyNumbers(someNumbers));


//narrowing
//checagem de tipos


function doSomething(info: number | boolean) {
     typeof info === 'number' ? console.log(`O número é ${info}!`) : console.log('Não foi passado o número');
}
doSomething(45);
doSomething(false);

//generics

function showArrayItens<T>(arr: T[]) {
     arr.forEach((item) => {
          console.log(`ITEM: ${item}`);
     });
};
const a1 = [1, 2, 3, 4];
const a2 = ['a', 'b', 'c'];

showArrayItens(a1);
showArrayItens(a2);


//classes

class User {
     nome
     role
     isApproved

     constructor(nome: string, role: string, isApproved: boolean) {
          this.nome = nome;
          this.role = role;
          this.isApproved = isApproved

     }

     showUserName() {
          console.log(`O nome do usuário é ${this.nome}`)
     }
}
const zeca = new User('Zeca', 'Admin', true)
console.log(zeca);
zeca.showUserName();

// interface en classes

interface IVehicle {
     brand: string
     showBrand(): void
}
class Car implements IVehicle {
     brand
     wheels

     constructor(brand: string, wheels: number) {
          this.brand = brand;
          this.wheels = wheels;
     }
     showBrand(): void {
          console.log(`A marca do carro é ${this.brand} e ele tem ${this.wheels} rodas`)
     }
}
const fusca = new Car("VW", 4);
fusca.showBrand();

// herança (e não é o terreno do seu avô)

class SuperCar extends Car {
     engine

     constructor(brand: string, wheels: number, engine: number) {
          super(brand, wheels);
          this.engine = engine;
     }
}
const a4 = new SuperCar("Audi", 4, 2.0);

a4.showBrand()

//decorators

//constructor decorator
function BaseParameters() {
     return function <T extends { new(...args: any[]): {} }>(constructor: T) {
          return class extends constructor {
               id = Math.random();
               createdAt = new Date();
          };
     };
};
@BaseParameters()
class Person {
     name

     constructor(name: string) {
          this.name = name;
     };

};
const sam = new Person('Sam');

console.log(sam)