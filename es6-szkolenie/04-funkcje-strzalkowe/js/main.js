console.log(`ES6(JS6) - funkcje strzalkowe - szkolenie`);

console.log(``);

// Funkcje strzałkowe
// Funkcje strzałkowe to krótszy sposób zapisu funkcji dostępny w JavaScript. Jednak ich największym atutem jest automatyczne wiązanie this.

// Funkcje strzałkowe / Przykłady
const greet = () => {
  console.log("Hello there!");
};
// wypisuje 'Hello there!' do konsoli
greet();

console.log(``);

//-----------

// const add = (a, b) => {
//   return a + b;
// };
const add = (a, b) => a + b; //to samo co powyżej, najkrótszym zapisem
// wypisuje 100 do konsoli
console.log(add(75, 25));

console.log(``);

//-----------

// zwracanie tablicy
const returnArray = () => [100, 200, 300, 400];

console.log(returnArray());

// zwracanie obiektu
const returnObject = () => ({ foo: "bar" });

console.log(returnObject());

console.log(``);

//-----------

// Dwie funkcje (użyjemy starego a potem nowego zapisu). Ważne użyjemy tu także metody map.

// Stary zapis funkcji

const numbersOld = [5, 10, 25, 50, 125];

const oldWayArr = numbersOld.map(function(number, index, oldArray) {
  return console.log(number * 2, index, oldArray); //przy takim zestawieniu parametrów w console.log zobaczymy 1 -> wynik mnożenia, 2. -> index, 3. całą starą tablicę wartości
}); //tworzymy zmienną newArr i przypisujemy do niej funkcję

oldWayArr; //wywołujemy zmienną, w konsoli

console.log(``);

const oldWayArrTwo = numbersOld.map(function(number) {
  //wystarczy pierwszy parametr (index, i oldArray pomijamy bo nie są nam potrzebne w tej prezentacji)
  return number * 2; //przy takim zapisie w returnie otrzymamy po prostu nową tablicę
});

console.log(`Nowa tablica starym sposobem (oldWayArrTwo) poniżej.`);

console.log(oldWayArrTwo); //otrzymamy nową tablicę starym sposobem

console.log(``);

//-----------

// Nowy zapis funkcji (funkcja strzałkowa)

const numbersNew = [5, 10, 25, 50, 125];

console.log(
  `Poniżej, tablica z takimi samymi danymi jak wyżej, uzyskana nowym sposobem, z użyciem funkcji strzałkowej (newWayArr).`
);

const newWayArr = numbersNew.map(number => number * 2); //w nawiasie od metody map odrazu wstawiamy parametr dalej strzałka i to co chcemy zwrócić (ale nie potrzebujemy tutaj słowa return)

console.log(newWayArr);

console.log(``);

//-----------

function foo() {
  console.log(this);
}
//
const bar = () => console.log(this);

const student = { name: "John", fooFn: foo, barFn: bar };
student.fooFn(); // { name: "John", fooFn: ƒ, barFn: ƒ }
student.barFn(); // Window { parent: Window, opener: null, ... }

console.log(``);

//-------

// Funkcja strzałkowa wraz z operatorem reszty
// Operator reszty pozwala na zebranie pewnej liczby argumentów funkcji do tablicy. Znajduje zastosowanie przy pisaniu funkcji, które przyjmują różne ilości argumentów.

var arrowFunctionWithRest = (...args) => {
  //zapis operatora reszty jako argument, pomaga nam kiedy nie znamy ilości argumentów, jakie zostaną przekazane.
  var sum = 0;
  for (var i = 0; args.length > i; i++) {
    console.log(`${i} ---> ${args[i]}`);
    sum += args[i];
  }
  return sum;
};

console.log(arrowFunctionWithRest(5, 8, 31, 27, 40));

console.log(``);

// funkcje strzałkowe z this (w funkcji strzałkowej this sięga jakby zawsze o stopień wyżej - szuka ostatniego obiektu w poprzednim stopniu)

function showNumber() {
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

let showMeThisNumber = new showNumber();

console.log(``);

//-------

// UWAGA!!! Jeżeli mamy this użyte w addEventListener to this nie zadziała, dlatego raczej nie należy stosować funkcji strzałkowej bezpośrednio jako callback w addEventListener.

// Funkcji strzałkowych nie zaleca się stosować z metodami typu call, aply. Nie możemy używać funkcji strzałkowych jako konstruktorów (czyli ze słówkiem 'new') i nie mają one prototypów.

//--------
