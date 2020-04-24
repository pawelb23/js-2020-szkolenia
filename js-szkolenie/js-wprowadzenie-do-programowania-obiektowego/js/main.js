// "use strict";

console.log(`JS - wprowadzenie do programowania obiektowego`);

console.log(``);

//----------

// Klasa

// JavaScript jest językiem opartym na prototypie, w którym nie występuje pojęcie klasy, w przeciwieństwie do języków takich, jak C++ czy Java. Fakt ten bywa dezorientujący dla programistów przyzwyczajonych do języków z pojęciem klasy. Zamiast klas, JavaScript stosuje funkcje. Zdefiniowanie klasy ogranicza się do prostej czynności, jaką jest zdefiniowanie funkcji. W poniższym przykładzie definiujemy nową klasę Person.

function Person() {}

// albo

// var Person = function () {};

//---

// Obiekt (instancja klasy)

// Żeby utworzyć nową instancję obiektu obj, używamy wyrażenia new obj, przypisując jego wynik (który jest typu obj) do zmiennej, żeby później mieć do niego dostęp.

// W poniższym przykładzie definiujemy klasę Person i tworzymy dwie instancje (person1 i person2).

// function Person() {}
// var person1 = new Person();
// var person2 = new Person();

// Zobacz również Object.create, który jest nową metodą instancjalizacji.

//---

// Konstruktor

// Konstruktor jest wywoływany w momencie instancjalizacji (moment, w którym instancja obiektu zostaje utworzona). Konstruktor jest metodą klasy. W JavaScript, funkcja służy za konstruktor obiektu. Nie ma jednak wyraźnej potrzeby definiowania konstruktora. Każda akcja zadeklarowana w konstruktorze zostanie wykonana w momencie utworzenia obiektu.

// Konstruktor jest używany do ustawienia właściwości obiektu lub do wywołania metod przygotowujących obiekt do użytku.

// W poniższym przykładzie konstruktor klasy Person wyświetla ostrzeżenie w momencie kiedy Person zostaje utworzony.

function Person() {
  console.log("Person został utworzony");
}

var person1 = new Person();
var person2 = new Person();

//---

// Właściwość (atrybut obiektu)

// Właściwości są zmiennymi zawartymi wewnątrz klasy. Każda instancja obiektu posiada te właściwości. Właściwości powinny być ustawiane we właściwości prototype klasy (funkcji), dzięki czemu dziedziczenie zadziała prawidłowo.

// Dostęp do właściwości z wnętrza klasy odbywa się za pomocą słowa kluczowego this, które odnosi się do aktualnego obiektu. Dostęp (odczyt lub zapis) do właściwości poza klasą odbywa się za pomocą składni: NazwaInstancji.Wlasciwosc; jest to taka sama składnia, jak w językach C++, Java i szeregu innych języków.

// W poniższym przykładzie definiujemy właściwość firstName dla klasy Person i robimy to w momencie utworzenia obiektu.

function Person(firstName) {
  this.firstName = firstName;
  console.log("Person instantiated");
}

var person1 = new Person("Alice");
var person2 = new Person("Bob");

// Pokaż właściwości firstName obiektów
console.log("person1 nazywa się " + person1.firstName); // komunikat "person1 nazywa się Alice"
console.log("person2 nazywa się " + person2.firstName); // komunikat "person2 nazywa się Bob"

//---

// Metody

// Metody opierają się na tej samej logice, co właściwości; różnica polega na tym, że są one funkcjami i definiuje się je jak funkcje. Wywołanie metody wygląda podobnie do wywołania właściwości, z tym, że dodajemy ( ) na końcu nazwy metody, czasami z argumentami. Żeby zdefiniować metodę, przypisujemy funkcję do jakiejś właściwości obiektu prototype klasy; nazwa właściwości staje się nazwą metody, po jakiej wywołamy ją na obiekcie.

// W poniższym przykładzie definiujemy i używamy metodę sayHello() dla klasy Person.

function Person(firstName) {
  this.firstName = firstName;
}

Person.prototype.sayHello = function () {
  console.log("Hello, I'm " + this.firstName);
};

var person1 = new Person("Alice");
var person2 = new Person("Bob");

// wywołanie metody sayHello klasy Person
person1.sayHello(); // komunikat "Hello, I'm Alice"
person2.sayHello(); // komunikat "Hello, I'm Bob"

// W JavaScript metody to zwykłe funkcje, które są przypisane do obiektu jako jego właściwości, dzięki czemu mogą być wywoływane w jego kontekście. Przyjrzyj się natępującemu przykładowi kodu:

function Person(firstName) {
  this.firstName = firstName;
}

Person.prototype.sayHello = function () {
  console.log("Hello, I'm " + this.firstName);
};

var person1 = new Person("Alice");
var person2 = new Person("Bob");
var helloFunction = person1.sayHello;

person1.sayHello(); // komunikat "Hello, I'm Alice"
person2.sayHello(); // komunikat "Hello, I'm Bob"
// helloFunction(); // komunikat "Hello, I'm undefined" (lub niepowodzenie wyświetlające TypeError w trybie strict)
console.log(helloFunction === person1.sayHello); // komunikat true
console.log(helloFunction === Person.prototype.sayHello); // komunikat true
helloFunction.call(person1); // komunikat "Hello, I'm Alice"

// Jak pokazuje powyższy przykład, wszystkie odniesienia do funkcji sayHello — to w obiekcie person1, w Person.prototype, w helloFunctionvariable, itd. — dotyczą tej samej funkcji. W trakcie wywołania funkcji, wartość this zależy od tego, jak ją wywołamy. W typowym przypadku, gdzie wywołujemy funkcję jako metodę obiektu — person1.sayHello() — this odnosi się do obiektu, z którego funkcja pochodzi (person1), stąd person1.sayHello() używa nazwy "Alice", a person2.sayHello() używa nazwy "Bob". Natomiast wywołanie funkcji ze zmiennej — helloFunction() — ustawia this na obiekt globalny (window w przypadku przeglądarek). Ponieważ ten obiekt najprawdopodobniej nie posiada właściwości firstName, ostatecznie otrzymujemy komunikat "Hello, I'm undefined". (Tak będzie w trybie loose; byłoby inaczej [błąd] w trybie strict, ale nie będziemy go tutaj opisywać, żeby nie wprowadzać zamieszania). Możemy też ustawić this wedle uznania, używając funkcji call (lub apply), tak jak pokazuje ostatni przykład.

//---

// Dziedziczenie

// Dziedziczenie jest sposobem na stworzenie klasy jako specjalistycznej wersji jednej lub większej ilości klas (JavaScript wspiera tylko dziedziczenie pojedyncze). Taka wyspecjalizowana klasa jest często nazywana dzieckiem, natomiast ta druga — rodzicem. W JavaScript osiąga się to poprzez przypisanie klasy rodzica do klasy dziecka, a następnie wyspecjalizowaniu jej. W nowoczesnych przeglądarkach można również użyć Object.create do implementacji dziedziczenia.

//---
