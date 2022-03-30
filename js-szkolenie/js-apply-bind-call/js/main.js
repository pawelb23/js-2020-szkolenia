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

const cheeseFeta = new Food("feta", 6); //wywołuje funkcje

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

function WeWillReceiveObject(symbolOne, symbolTwo, symbolThree) {
  this.symbolOne = symbolOne;
  this.symbolTwo = symbolTwo;
  this.symbolThree = symbolThree;
}

function OnlyCallFunctionObject(symbolOne, symbolTwo, symbolThree) {
  //Funkcja ma tylko trzy parametry, w środku jest właściwie pusta
  WeWillReceiveObject.call(this, symbolOne, symbolTwo, symbolThree); //dzięki temu, że pobieramy informacje odnośnie symbolOne, symbolTwo, symbolThree z funkcji weWillReceiveObject (dzięki metodzie call i this) możemy zobaczyć, że onlyCallFunction stało się obiektem z właściwościami i ich wartościami
  console.log("Funkcja działa");
}

var newSymbolsObject = new OnlyCallFunctionObject("alpha", "beta", "gamma");

console.log(``);

console.log(`Pierwszy symbol to: "${newSymbolsObject.symbolOne}"`); //tak sprawdzimy wartość w obiekcie

console.log(``);

console.log(newSymbolsObject); //a tak obejrzymy cały obiekt

//---------------

console.log(``);

const module = {
  x: 42,
  //   y: 43,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = module.getX;
// console.log(unboundGetX()); //Otrzymamy undefined, ale tylko bez 'use strict'

console.log(unboundGetX);

// const boundGetX = unboundGetX.bind(module);

const boundGetX = unboundGetX.bind(module);
// const boundGetX = module.getX.bind(module); //To to samo co wyżej

console.log(boundGetX());
// otrzymamy: 42

//-----------------

console.log(``);

const moduleOne = {
  x: 42,
  y: 43,
  getXY: function () {
    return this.x + this.y;
  },
};

const boundGetXY = moduleOne.getXY.bind(moduleOne);
console.log(boundGetXY());
// otrzymamy: 85

//-----------------

// --------------

console.log("");

var o = {
  a: 4,
  method: function (arg1 = 0, arg2 = 0, arg3 = 0, arg4 = 0) {
    console.log(this.a + arg1 + arg2 + arg3 + arg4); // wypisuje this oraz przekazane do funkcji argumenty
  },
};

var xy = {
  a: 2,
};

o.method(1, 2); //7
o.method.call(xy, 1, 2, 3); //8
o.method.apply(xy, [1, 2, 3, 4]); //12

console.log("");

var o = {
  a: 4,
  method: function () {
    console.log(this.a, Array.from(arguments)); // wypisuje this oraz przekazane do funkcji argumenty
  },
};

console.log(o.a);

var xy = {
  a: 2,
};

o.method(1, 2); //  4 [1, 2]
o.method.call(xy, 1, 2, 3); // 2 [1, 2, 3]
o.method.apply(xy, [1, 2, 3, 4]); // 2 [1, 2, 3, 4]

//-------------------------
// WAŻNE!!! Zauważyłem, że metoda bind wymaga utworzenia i wykorzystania nowej zmiennej, co widać w poniższym przykładzie

// <<< const bindowanie = o.method.bind(doBindowania); >>>

// Bindowanie ---> ciężka sprawa trzeba uważać, należy przekazywać bardzo ostrożnie określając bardzo uważnie i dokładnie bindowany obiekt. Poniżej przykłady użycia bind.

let doBindowania = {
  a: 5,
};

const bindowanie = o.method.bind(doBindowania);

bindowanie(5, 6);

bindowanie(3, 4, 5);

console.log("");

const m = o.method.bind(o, 1, 2);
// const mk = o.method.bind(xy, 1, 2);//Ta wersja również zadziała prawidłowo

//-----------------

// Raz zbindowanej funkcji nie można już nadpisać obiektu kontekstowego w ten sam sposób. ---> przykłady poniżej

console.log(`Poniżej >>> m = o.method.bind(o, 1, 2) <<<`);

m();

console.log(`Poniżej >>> m jak wyżej, ale m powiększa się tu o m(3, 4)  <<<`);

m(3, 4); // 4 [1,2,3,4]

setTimeout(function () {
  console.log(
    `
    Poniżej >>> m ponownie podstawowe (wszystko wynika oczywiście z użycia metody bind wcześniej ---- Tu użycie z setTimeout <<<
      `
  );
});

setTimeout(m); // 4 [1,2]
// setTimeout(m, 5000); // 4 [1,2] //Zadziała po 5 sekundach (tylko jeden raz)
// setInterval(m, 5000); // 4 [1,2] //Zadziała co 5 sekund

console.log(
  `Poniżej >>> m2 powiększa się o m i o wynikające z bindowania 3,4 oraz dodajemy m2(5, 6)  <<<`
);

const m2 = m.bind(o, 3, 4);
m2(5, 6); // 4 [1,2,3,4,5,6]

console.log("");

// =============

// function Clazz(a, b) {
//   this.a = 1;
//   this.b = 2;

//   return this;
// }

// Clazz.prototype.method = function () {
//   l("Prototype", this);
// };

// const toBind = { c: 3 };

// const instance = new Clazz(); // this === nowy obiekt
// const secondInstance = new (Clazz.bind(toBind))(); // this === nowy obiekt

// // const thirdInstance = new Clazz();

// // console.log(secondInstance);

// // console.log(thirdInstance);

// console.log(secondInstance);

// console.log(typeof Clazz.prototype.constructor);
// console.log(typeof secondInstance);

// console.log("");

// // // =====================

// Poniżej przekazujemy do this wartość za pomocą bind, tworzymy także tablicę z argumentami

function bindFunctionWithArray() {
  console.log(this, Array.from(arguments));
}

bindFunctionWithArray();

const bindWithArray = bindFunctionWithArray.bind(5);

bindWithArray();

bindWithArray(6, 7);

console.log("");
//-------------------

function bindFunction(a, b) {
  console.log(this, a, b);
}

const giveMeThisData = bindFunction.bind(5);

giveMeThisData();

giveMeThisData(6, 7);

//------------------

// Wykorzystanie metody apply()

// Z metodą apply() funkcja działa dobrze nawet przy operatorach reszty i rozproszenia. Przykład poniżej.

let newArrayWithAplly = [3, 7, 10, 15, 25];

function avgFromArray(...args) {
  var sum = 0;
  console.log(this);
  for (let value of args) {
    sum += value;
  }
  return sum / args.length;
}

let newAverage = avgFromArray.apply(null, [1, 2, 3, 4, 5]);
let newAverageApplyArray = avgFromArray.apply(null, newArrayWithAplly);

console.log(newAverage);
console.log(newAverageApplyArray);

//===

// Wykorzystanie metody call()

let newAverage1 = avgFromArray.call(null, 2, 4, 6, 8, 10);

console.log(newAverage1);

//===

// Wykorzystanie metody bind()

let xxxxx = [1, 2];
let xxxxy = [15, 25];
let xxxxz = [11, 22];

let newNumberFromBind = avgFromArray.bind(3, 7, 8);
// let newNumberFromBind = avgFromArray.bind();

// console.log(newNumberFromBind(2, 3, 5, 10));
console.log(newNumberFromBind());

console.log("");

//============
