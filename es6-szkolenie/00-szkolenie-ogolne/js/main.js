console.log(`ES6 - szkolenie ogólne`);

console.log(``);

// Dwa zapisy poniżej oznaczają dokładnie to samo

// Przykład a
var addA = function (a, b) {
  return a + b;
};

console.log(
  `Dodawania z użyciem tradycyjnego zapisu funkcji 'function', wynik wynosi ---> ${addA(
    2,
    3
  )}`
);

console.log(``);

// Przykład b
var addB = (a, b) => a + b;

console.log(
  `Dodawanie z użyciem funkcji strzałkowej '=>' wynik wynosi ---> ${addB(2, 3)}`
);

console.log(``);

//------------

// ECMAScript 6: Ciekawostki
// Zamiana wartości zmiennych
let foo = 1;
let bar = 2;
[bar, foo] = [foo, bar];
// wypisuje 'foo = 2, bar = 1” do konsoli
console.log("foo = %d, bar = %d", foo, bar);

console.log(``);

// Konwersja arguments na tablicę
function show() {
  let args = Array.from(arguments); //aby zadziałało należy użyć Array i arguments (koniecznie tych zapisów) ---> ponieważ tworzymy tablicę, szyk (Array) z (from) argumentów (arguments)
  return args;
}
// wypisuje [1, 'foo', null] do konsoli
console.log(show(1, "foo", null)); //dowolne argumenty

console.log(show(2, 3, 45, 1, 658)); //dowolne argumenty

console.log(``);

//-------------

