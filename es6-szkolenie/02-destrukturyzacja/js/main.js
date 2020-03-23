console.log(`ES6(JS6) - destrukturyzacja - szkolenie`);

console.log(``);

// Destrukturyzacja pozwala przypisywać wybrane wartości tablicowe lub obiektowe do zmiennych (var, let) lub stałych (const). Ponadto, daje możliwość ich aliasowania.

// Destrukturyzacja / Przykłady

// Tablice

const numbers = [100, 200, 300, 400];
// destrukturyzacja tablicy

console.log(`Poniżej pełna tablica`);

console.log(numbers);

console.log(``);

const [first] = numbers;

const [, second] = numbers;

const [, , third] = numbers;

const [, , , last] = numbers;

console.log(`Poniżej wartości przypisane do zmiennych dzięki destrukturyzacji`);

// wypisuje 'first = 100, last = 400' do konsoli
console.log(
  `first = %d, second = %d, third = %d, last = %d`,
  first,
  second,
  third,
  last
); //console.log(`first = %f, last = %f`, first, last); //To ten sam zapis wypisze w konsoli first = 100, last = 400

// console.log(`first = %d, last = %d`, first, last); oznacza, że pod %d musimy podstawić cyfry/liczby z pod zmiennych 'first' i 'last' umieszczonych na końcu console.log ---> UWAGA!!! dane są brane po kolei, więc jeżeli damy więcej zmiennych odwołujących się do wartości (czy nawet samych wartości - np. cyfrę 5) w console.log ---> %d będą je łapały po kolei (first, 5, last)

//----------

console.log(``);

// Obiekty
const student = { name: "John", age: 24, friends: ["Bob", "Tom"] };
// destrukturyzacja obiektu
const { name, friends } = student;
// wypisuje 'John has 2 friends!' do konsoli
console.log("%s has %d friends!", name, friends.length); //%s odnosi się do stringów, %d odnosi się do wartości liczbowych

//-----------

console.log(``);

const studentAlias = { name: "Peter", age: 24, friends: ["John", "Ron"] };
// destrukturyzacja obiektu z aliasowaniem
const { name: firstName, friends: friendsAlias } = studentAlias; //aliasowanie czyli zmiana nazwy zmiennej >>> name >>> zamieniamy tutaj na ---> firstName
// Jeżeli w powyższym przykładzie nie zmienimy nazw właściwości obiektu name i friends to nie zadziała, bo takie właściwości wystąpiły już w przykładzie powyżej

// wypisuje “John has 2 friends!” do konsoli
console.log("%s has %d friends!", firstName, friendsAlias.length); //%s odnosi się do stringów, %d odnosi się do wartości liczbowych

// UWAGA!!! Poniższy kod nie zadziała ---> stąd pewnie też aliasowanie

// const studentError = { name: "Tom", age: 24, friends: ["Dan", "Adam"] };
// const { name: firstNameError, friends } = studentError; //będzie informacja w konsoli, że friends jest już zadeklarowane

// console.log("%s has %d friends!", firstNameError, friends.length);//nie zadziała

//----------
