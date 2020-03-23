"use strict";

console.log(`JS - słowo kluczowe - 'this'`);

console.log(``);

//Pierwszy opis - this

// Kontekst funkcji - słowo kluczowe this.
// Każda funkcja podczas wywołania otrzymuje odwołanie do jej bieżącego kontekstu reprezentowanego przez słowo kluczowe > this <

// Jak określany jest kontekst funkcji?
// Kontekst funkcji nie zależy od tego, w którym miejscu została ona wywołana, lecz od tego w jaki sposób zostało to zrobione.

// Czym kontekst nie jest (na co nie wskazuje)?
// * Słowo kluczowe this nie wskazuje na funkcję, wewnątrz której zostało użyte.
// * Nie wskazuje również na zakres (scope) funkcji.

// Jak określany jest kontekst?
//* Zdefiniowany jest przez nas poprzez wykorzystanie metod call, apply lub bind.
//* W przypadku wywołania funkcji z wykorzystaniem słowa kluczowego new, kontekstem jest nowo stworzony obiekt.
//* Wskazuje na obiekt jako właściwość, którego (to obiektu) funkcja została wywołana.

class Article {
  constructor(title) {
    this.title = title;
  }

  getTitle() {
    console.log(this);
  }
}

let book = new Article("The Witcher");

book.getTitle();

new Article("The Thing").getTitle();

console.log(``);

//Drugi opis - this

// 'this' zawsze wskazuje nam aktualny kontekst w naszym kodzie.

console.log(this);

console.log(``);

function testThis() {
  var a = 0;

  return this;
}

console.log(testThis());

console.log(``);

//--------------------

function weWillReceiveObject(symbolOne, symbolTwo, symbolThree, symbolFour) {
  this.symbolOne = symbolOne;
  this.symbolTwo = symbolTwo;
  this.symbolThree = symbolThree;
  this.symbolFour = symbolFour;
}

function onlyCallFunctionObject(symbolOne, symbolTwo, symbolThree, symbolFour) {
  //Funkcja ma tylko trzy parametry, w środku jest właściwie pusta
  weWillReceiveObject.call(this, symbolOne, symbolTwo, symbolThree, symbolFour); //dzięki temu, że pobieramy informacje odnośnie symbolOne, symbolTwo, symbolThree z funkcji weWillReceiveObject (dzięki metodzie call i this) możemy zobaczyć, że onlyCallFunction stało się obiektem z właściwościami i ich wartościami
  console.log("Wszystko działa");
}

var newSymbolsObject = new onlyCallFunctionObject(
  "alpha",
  "beta",
  "gamma",
  "delta"
);

console.log(``);

console.log(`Pierwszy symbol to: "${newSymbolsObject.symbolOne}"`); //tak sprawdzimy wartość w obiekcie

console.log(``);

console.log(newSymbolsObject); //a tak obejrzymy cały obiekt

console.log(``);

console.log(this);

this.numberWithThisWindow = 25; //słówko this powoduje, że numberWithThisWindow stanie się właściwością obiekut, a 25 wartością tej właściwości --- będzie to właściwość i wartość, którą odczytamy (poniżej) na obiekcie window

console.log(``);

console.log(window.numberWithThisWindow); //tutaj mamy obiekt window i odczytujemy jego właściwość czyli numberWithThisWindow

console.log(``);

//Jeżeli nie połączymy window z numberWithThisWindow to obiekt window w console.log dalej wskazuje podstawowe informacje o obiekcie window

console.log(this.numberWithThisWindow); //również otrzymamy 25

console.log(``);

//-----------

let sayNameMixin = function(obj) {
  //pod object podstawiamy dalej obiekt
  obj.sayName = function() {
    //na tym poziomie podstawiony obiekt otrzymuje nową właściwość, a wartość tej właściwości będzie równa funkcji
    // console.log(sayName);
    console.log(this.name);
  };
};

var me = {
  name: "Tyler",
  age: 25
};

var you = {
  name: "Joey",
  age: 21
};

sayNameMixin(me); //podstawiamy obiekt
sayNameMixin(you); //podstawiamy obiekt

me.sayName(); //docieramy do właściwości obetu sayName i wartości tej właściwości czyli funkcji, w której to w console.log odczytujemy name brane z obiektu me
you.sayName(); //docieramy do właściwości obetu sayName i wartości tej właściwości czyli funkcji, w której to w console.log odczytujemy name brane z obiektu you

console.log(``);

console.log(me); //obiekt 'me' powiększony o właściwość sayName

me.height = "180 cm"; //dodajemy do obiektu >>> me <<< właściwość i jej wartość czyli --- height: 180 cm

console.log(me); //obiekt 'me' powiększony o właściwości sayName i height

console.log(``);

//-----------

let Person = function(name, age) {
  return {
    name: name,
    age: age,
    sayName: function() {
      console.log(this.name);
    },
    mother: {
      name: "Stacey",
      sayName: function() {
        console.log(this.name);
      }
    }
  };
};

let jim = Person("Jim", 45); //wywołujemy naszą funkcję wraz z argumentami

jim.sayName();
jim.mother.sayName();

console.log(``);

//---------

// Dokładnie to samo co w poprzednim przykładzie tylko inaczej zapisane

function personInSecondExample(name, age) {
  return {
    name: name,
    age: age,
    sayName: function() {
      console.log(this.name);
    },
    mother: {
      name: "Judy",
      sayName: function() {
        console.log(this.name);
      }
    }
  };
}

let variableInSecondExample = personInSecondExample("Todd", 30); //wywołujemy naszą funkcję wraz z argumentami

variableInSecondExample.sayName(); //wywołujemy funkcję w naszym obiekcie
variableInSecondExample.mother.sayName(); //wywołujemy funkcję w obiekcie wewnątrz innego obiektu

console.log(``);

//---------

// this z wykorzystaniem metody call()

let getNameFromObject = function() {
  console.log(`My name is ${this.name}`); //this odnie
};

let objectName = {
  name: "Tiffany",
  age: 35
};

getNameFromObject.call(objectName); //wykorzystujemy do funkcji getNameFromObject dane z obiektu objectName z użyciem metody call()

console.log(``);

//---------

// porównanie call() i apply()

// metody call() i apply() - w tych metodach pierwszy argument odnosi się do kontekstu, który chcemy wywołać (czyli nasze this), a potem przekazujemy pozostałe argumenty. Przykłady poniżej.

// call()

function weUseCallInThisFunction(one, two, three) {
  console.log(
    `To są trzy argumenty przekazane do parametrów funkcji ---> ${one}, ${two}, ${three}, a tu mamy odniesienie do konteksu, który chcemy wywołać ---> ${this.ourThis}.`
  );
}

let objectInformation = {
  noImportant: 12,
  ourThis: `'NASZE THIS z użyciem call()'`
};

weUseCallInThisFunction.call(
  objectInformation, //jako pierwszy argument podamy nazwę naszego obiektu
  `'Arg. Call 1'`,
  `'Arg. Call 2'`,
  `'Arg. Call 3'`
); //wykoszystujemy tu metodę call ---> jej pierwszy argument to nasze this, dalej zwykłe argumenty

console.log(``);

//---------

// apply()

// metody call() i apply() - w tych metodach pierwszy argument odnosi się do kontekstu, który chcemy wywołać (czyli nasze this), a potem przekazujemy pozostałe argumenty. Przykłady poniżej.

objectInformation.ourThis = `'NASZE THIS z użyciem apply()'`;

function weUseApplyInThisFunction(one, two, three) {
  console.log(
    `To są trzy argumenty przekazane do parametrów funkcji ---> ${one}, ${two}, ${three}, a tu mamy odniesienie do konteksu, który chcemy wywołać ---> ${this.ourThis}.`
  );
}

let argumentsArray = [`'Arg. Apply 1'`, `'Arg. Apply 2'`, `'Arg. Apply 3'`]; //jako drugi argument przekażemy w metodzie apply całą tablicę

weUseApplyInThisFunction.apply(objectInformation, argumentsArray); //pierwszy argument to nasz obiekt, zaś drugim będzie tutaj tablica

console.log(``);

//---------

// bind()

// metoda bind jest najbardziej podobna do metody call(), z tym, że zwróci nam ona wyrażenie jako nową funkcję, która wywoła starą funkcję.

objectInformation.ourThis = `NASZE THIS z użyciem bind()`;

function weUseBindInThisFunction(one, two, three) {
  console.log(
    `To są trzy argumenty przekazane do parametrów funkcji ---> ${one}, ${two}, ${three}, a tu mamy odniesienie do konteksu, który chcemy wywołać ---> ${this.ourThis}.`
  );
}

let variableForFunctionWhereWeUsedBind = weUseBindInThisFunction.bind(
  objectInformation, //jako pierwszy argument podamy nazwę naszego obiektu
  `'Arg. Bind 1'`,
  `'Arg. Bind 2'`,
  `'Arg. Bind 3'`
); //wykoszystujemy tu metodę bind ---> jej pierwszy argument to nasze this, dalej zwykłe argumenty

variableForFunctionWhereWeUsedBind(); //teraz dopiero wywołaliśmy starą funkcję za pomocą nowej funkcji

console.log(``);

//---------

var x = "window",
  obj1 = {
    x: `"xXx"`,
    test: function(metodaInfo) {
      console.log(`obj1.test ${metodaInfo} ---> ` + this.x);
    }
  },
  test;

// test = obj1.test; // przypisujemy referencję do funkcji `obj1.test'. Całkowicie prawidłowa składnia, ale poinżej nie zadziała (jeżeli odkomentujemy) po wywyołaniu funkcji

// test(); //jeżeli tutaj i powyżej odkomentujemy to nie zadziała

test = obj1.test.bind(obj1, `wywołujemy przy użyciu metody bind()`); //dopiero tutaj (przy użyciu metody bind()) prawidłowo określamy zmienną, i dlatego poniżej wywołanie funkcji zadziała ---> jak w metodzie call() i tu możemy podstawić kilka argumentów do parametrów funkcji

test();

obj1.test.call(obj1, `wywołujemy przy użyciu metody call()`); //wywołujemy to samo (tutaj przykładowo przy pomocy metody call(), ale metoda apply działa tak samo)

console.log(``);

//---------

function PersonFunction(firstName) {
  this.firstName = firstName;
  console.log(`Persona ${this.firstName} została utworzona`);
}

var person1 = new PersonFunction(`'Pierwsza'`);
var person2 = new PersonFunction(`'Druga'`);

console.log(``);

//---------

function Constructor() {
  this.x = `Jestem wartością ---> 'Constructor'a.(właściwości) x'`;
  this.test = function() {
    console.log(this.x);
  };
}
new Constructor().test(); // w konsoli pokaże się `jestem wartością ---> 'Constructor.x'`

// W obu przypadkach zarówno pole `x’, jak i pole `test’ (będące referencją na funkcję) są publiczne. Można odwołać się:

new Constructor().x; // lub nawet nadpisać te wartości. JavaScript pozwala na to. Najczęściej jednak NIE należy tego robić.

// A co by się stało, gdybyśmy wywołali konstruktor `Constructor’ bez operatora `new’? Wtedy funkcja ta zostałaby potraktowana jako zwykła funkcja, która nic nie zwraca! To z kolei wywołaloby błąd podczas wywołania jakiegokolwiek pola. Zmienne, do których przypisano `undefined’ nie posiadają pól. Jest to jedna z olbrzymich wad korzystania z operatorów `this’ i `new’. Jeśli nie korzystamy z trybu ścisłego (a większość stworzonego do tej pory kodu JavaScript zdecydowanie nie korzysta z trybu ścisłego), to w żaden sposób nie zostaniemy o tym poinformowani. Błędnie działajacą aplikacja będzie jedynym źrodłem informacji o błędnym kodzie.

//---------

console.log(``);

console.log(
  `Pierwszy typ to ---> ${typeof objectInformation}, zaś drugi to ---> ${typeof weUseApplyInThisFunction}`
); //sprawdzamy typy operandu (operand jest łańcuchem znaków, zmienną, słowem kluczowym lub obiektem, którego typ ma zostać zwrócony)

//---------

// Poniższy przykład używa obiektu window, ale nie zadziała z 'use strict' włączonym

// function showAge() {
//   console.log(`Wiek wynosi ---> ${this.age} lat`);
// }

// window.age = 35;

// showAge();

console.log(``);

//---------

// Metoda w obiekcie albo klasie - this odnosi się do obiektu z kontekstu (z lewej strony przed kropką).

//Funkcja w zwykłej funkcji - this odnosi się do obiektu globalnego.

// Funkcja strzałkowa - this odnosi się tu do tego co jest level wyżej.

function ShowMeThisThis() {
  // var password = 0;
  this.password = 50;

  console.log(this);

  return this;
  // console.log(
  //   `This.password wynosi w tej funkcji ---> '${this.password}'.`
  // );
}

// console.log(ShowMeThisThis());

var showIt = new ShowMeThisThis(); //tworzymy nowy obiekt

// console.log(showIt); //wywołamy widok w obiekcie --> właściwość: wartość(tej właściwości)

console.log(showIt.password); //po kropce słowo password to właściwość obiektu, więce w konsoli zobaczymy tylko wartość właściwości password obiektu ShowMeThisThis

//---------

// this z funkcją strzałkową i new Object

function showNumberWithArrowFunctionInside() {
  this.number = 0;

  console.log(this);

  setInterval(() => {
    this.number++;
    // console.log(this);
    console.log(
      `Zaczeliśmy liczenie od '0', obecnie mamy już '${this.number}'!`
    );
  }, 2500);
}

let showMeThisNumberWithArrow = new showNumberWithArrowFunctionInside();

console.log(``);

//---------

// dla porównania poprzedni przypadek tylko z zapisem dwóch zwykłych funkcji (jednej w drugiej)

// Aby porównać należy odkomentować i zakomentować poprzednią funkcję
// function showNumberWithRegularFunctionInside() {
//   this.number = 0;

//   console.log(this);

//   setInterval(function() {
//     this.number++;
//     // console.log(this);
//     console.log(
//       `Zaczeliśmy liczenie od '0', obecnie mamy już '${this.number}'!`
//     );
//   }, 2500);
// }

// let showMeThisNumberWithoutArrow = new showNumberWithRegularFunctionInside();

//---------
