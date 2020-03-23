"use strict"; //UWAGA!!! Może trochę zmienić kod

console.log(`JS - metody: apply, bind, call`);

console.log(``);

// Można przypisać inny obiekt this podczas wywoływania istniejącej funkcji. this odnosi się do bieżącego obiektu, obiektu wywołującego. Z apply można napisać metodę raz, a następnie dziedziczyć ją w innym obiekcie, bez konieczności przepisywania metody dla nowego obiektu.

// apply jest bardzo podobne do call(), z wyjątkiem typu danych argumentów, które wspiera. Można używać tablicy argumentów zamiast zestawu argumentów (parametrów). Z metodą apply, możesz używać tablic w sensie dosłownym, na przykład func.apply(this, ['eat', 'bananas']), lub obiektów typu Array, na przykład, func.apply(this, new Array('eat', 'bananas')).

//apply()

const firstArray = ["a", "b", "c"];

const secondArray = ["one", "two", "three"];

const thirdArray = ["red", "blue", "green"];

// const pushApplyArray = firstArray.push.apply(firstArray, secondArray);

// console.log(pushApplyArray);

firstArray.push.apply(firstArray, secondArray); //dziwne jest to co zobaczymy w konsoli w dwóch poniższych przypadkach...

console.log(firstArray); //... tutaj w konsoli zobaczymy nową tablicę z sześcioma elementami, a poniżej...

console.log(``);

console.log(firstArray.push.apply(firstArray, secondArray)); //...tutaj otrzymamy tylko cyfrę 9 [suma dodawania tablicy firstArray (powiększonej po powyższym push i apply) i secondArray]

console.log(``);

//----------

var takeMin = Math.min(2, 3, null, 8); //przy takim zestawieniu w konsoli zobaczymy 0

console.log(takeMin); //będzie zero

console.log(``);

let numberArray = [5, 7, 4, 5, 6];

var submin = Math.min.apply(null, numberArray); //przy takim ustawieniu w konsoli zobaczymy 4

console.log(submin);

console.log(``);

console.log(Math.max.apply(numberArray, null)); //przy takim ustawieniu zobaczymy w konsoli -Infinity

console.log(``);

//---------

//call()

function Product(name, price) {
  this.name = name;
  this.price = price;
  //   console.log(this.name);
}

function Food(name, price) {
  Product.call(this, name, price);
  console.log(Product.call(this, name, price)); //bez tych trzech parametrów w konsoli otrzymamy undefined
  this.category = "food";
  //   return this.price;
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = "toy";
}

const cheeseFeta = new Food("feta", 5); //wywołuje funkcje

// console.log(Food("feta", 5)); //UWAGA!!! Z 'use strict' na górze, wysypie się w konsoli
//bez słowa new przed Food i bez 'use strict' zwróci cenę, jeżeli zaś napiszemy to co poniżej
console.log(new Food("feta", 5)); //otrzymamy tak naprawdę obiekt
// lub to co poniżej
console.log(cheeseFeta); //również jest to obiekt
//bo to to samo, w konsoli otrzymamy poniższy kod
// Food {name: "feta", price: 5, category: "food"}

console.log(``);

console.log(cheeseFeta.name); //ponieważ to obiekt //otrzymamy feta w konsoli

console.log(``);

// const fun = new Toy("robot", 40);//jeżeli odkomentujemy również funkcja zostanie wywołana

// console.log(Product("Ala", 10)); //wywołujemy funkcję Product

//----------------

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = "food";
}

console.log(new Food("cheese", 5).name);
//otrzymamy w konsoli --- "cheese"

console.log(``);

//------------------

function ProductTwo(name, price) {
  this.name = name;
  this.price = price;
}

function FoodTwo(name, price) {
  Product.call(this, "pasta", price);
  this.category = "food";
}

console.log(new FoodTwo("cheese", 5).name);
//otrzymamy w konsoli --- "pasta"

console.log(``);

function weWillReceiveObject(symbolOne, symbolTwo, symbolThree) {
  this.symbolOne = symbolOne;
  this.symbolTwo = symbolTwo;
  this.symbolThree = symbolThree;
}

function onlyCallFunctionObject(symbolOne, symbolTwo, symbolThree) {
  //Funkcja ma tylko trzy parametry, w środku jest właściwie pusta
  weWillReceiveObject.call(this, symbolOne, symbolTwo, symbolThree); //dzięki temu, że pobieramy informacje odnośnie symbolOne, symbolTwo, symbolThree z funkcji weWillReceiveObject (dzięki metodzie call i this) możemy zobaczyć, że onlyCallFunction stało się obiektem z właściwościami i ich wartościami
  console.log("Funkcja działa");
}

var newSymbolsObject = new onlyCallFunctionObject("alpha", "beta", "gamma");

console.log(``);

console.log(`Pierwszy symbol to: "${newSymbolsObject.symbolOne}"`); //tak sprawdzimy wartość w obiekcie

console.log(``);

console.log(newSymbolsObject); //a tak obejrzymy cały obiekt

//---------------

console.log(``);

const module = {
  x: 42,
  //   y: 43,
  getX: function() {
    return this.x;
  }
};

const unboundGetX = module.getX;
// console.log(unboundGetX()); //Otrzymamy undefined, ale tylko bez 'use strict'

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// otrzymamy: 42

//-----------------

console.log(``);

const moduleOne = {
  x: 42,
  y: 43,
  getXY: function() {
    return this.x + this.y;
  }
};

const boundGetXY = moduleOne.getXY.bind(moduleOne);
console.log(boundGetXY());
// otrzymamy: 85
