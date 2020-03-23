console.log(`ES6(JS6) - operator reszty i operator rozproszenia - szkolenie`);

// Operator reszty

// Operator reszty pozwala na zebranie pewnej liczby argumentów funkcji do tablicy. Znajduje zastosowanie przy pisaniu funkcji, które przyjmują różne ilości argumentów.

console.log(``);

function add(...numbers) {
  return numbers.reduce((a, b) => a + b, 5);
}
console.log(add()); //Początkowa wartość to 5 wzięta jako drugi argument z metody reduce
console.log(add(24)); // będzie 29 bo do 5 dodajemy 24
console.log(add(50, 100)); // będzie 155 ---> bo do 5 dodajemy 150
console.log(add(100, 200, 300)); //wynik wyniesie 605

console.log(``);

//----------

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

//----------

const restFunctionAdd = (...addingNumbers) => [addingNumbers];

console.log(restFunctionAdd());
console.log(restFunctionAdd(1, 2, 2));
console.log(restFunctionAdd(2, 3, 4, 6));
console.log(restFunctionAdd(4, 5, 6, 8, 12, 15));

console.log(``);

//----------

function title(name, ...dances) {
  return name + " - master of " + dances.join(", ");
}
// wypisuje 'Joe, master of foxtrot, samba, waltz” do konsoli
const allInform = title("Joe", "foxtrot", "samba", "waltz");

console.log(allInform);

console.log(``);

//----------

// Operator rozproszenia

// Operator rozproszenia pozwala na dopisanie nowych, albo nadpisanie istniejących, wartości tablicowych i obiektowych. Znacząco upraszcza manipulowanie danymi.

// Operator rozproszenia / Przykłady
let family = ["Ann", "Joe"];
let friends = ["Bob", "Tom"];
friends = [...friends, "Pam"];
// tworzy tablicę ['Ann', 'Joe', 'Bob', 'Tom', 'Pam']
const everyone = [...family, ...friends];

console.log(everyone);

console.log(``);

//----------

let sorting = { key: "name", dir: "ASC" };
sorting = { ...sorting, dir: "DESC" }; //zmieniamy wartość dir
// tworzy obiekt: { url: 'example.com', key: 'name', dir: 'DESC' }
const options = { url: "example.com", ...sorting }; //dodajemy url: 'example.com'

console.log(options); //wyświetlamy całość w konsoli

console.log(``);

//----------

// tworzy obiekt daty 1 stycznia 2020
let dateParams = [2020, 0, 1];
let date = new Date(...dateParams);

console.log(date);

console.log(``);

// zwraca największą liczbę z tablicy
let numbers = [100, 200, 300, 400];
let maxNumber = Math.max(...numbers);

console.log(`Największa wartość z tablicy to ---> ${maxNumber}`);

console.log(``);

//-------------

// Szablony ciągów znaków

// Szablony pozwalają na efektywniejsze łączenie ciągów znaków i zmiennych. Ponadto, pozwalają na wygodniejszy zapis wielowierszowy.

// Szablony ciągów znaków / Przykłady

const name = "John";
const friendsComent = ["Bob", "Tom"];
// wypisuje: John has 2 friends.
console.log(`${name} has ${friendsComent.length} friends.`);
// wypisuje: Jane says 'I’m leaving town'. She didn’t think it through.
console.log(`Jane says 'I’m leaving town'.
She didn’t think it through.`);

console.log(``);

const myStr = `Abc 123 null ${20 + 3}`; //zapis --- ${20+3} sprawi, że część tekstu zachowa się jak zwykły JS --- a więc obliczy nam działanie 20 + 3 czyli będzie 23

console.log(myStr);

console.log(``);

//---------------
