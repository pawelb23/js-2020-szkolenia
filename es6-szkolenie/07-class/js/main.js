console.log(`ES6(JS6) - Class - szkolenie`);

console.log(``);

//------------

// Czym jest klasa?

// Klasa stanowi definicję obiektu, opisuje jego możliwy stan oraz zachowanie.

// Klasy w JS

// Język JS został stworzony w oparciu o tzw. dziedziczenie prototypów (ang. prototypal inheritance). Model ten domyślnie nie implementuje klas, lecz to umożliwia.

//------------

// Klasy
// Klasy w JavaScript to w gruncie rzeczy 'opakowanie” na funkcje-konstruktory obiektów. Podobnie jak w innych językach programowania, klasy mogą dziedziczyć po sobie. Wspierane są również pola statyczne.

// Klasy / Przykłady
class Cat {
  constructor(name) {
    this.name = name;
  }
  meow() {
    console.log(`${this.name} says: meow!`);
  }
}

const felix = new Cat("Felix");
// Wypisuje 'Felix' says: meow!” do konsoli
felix.meow();

console.log(``);

//---------------

// Klasy / Dziedziczenie
// Najważniejszą cechą klas jest ich zdolność do dziedziczenia po innych klasach. Podstawowym założeniem programowania zorientowanego obiektowo jest budowanie hierarchii klas o co raz to bardziej wyspecjalizowanych zastosowaniach. W JavaScript, słowo kluczowe 'extends' pozwala wskazać po jakiej klasie ma nastąpić dziedziczenie, natomiast słowo kluczowe 'super' to referencja do dziedziczonej klasy.

// Jeśli w podklasie znajduje się konstruktor, musimy użyć słowa super().

// Klasy / Przykłady
class RussianCat extends Cat {
  constructor(name) {
    super(name); //bez super wywali nam błąd w konsoli, ponieważ użyliśmy słowa constructor w podklasie
  }
  meow() {
    console.log(`${this.name} says: myau!`);
  }
}

const simba = new RussianCat("Simba");
// Wypisuje “Simba says: myau!” do konsoli
simba.meow();

console.log(``);

//------------

// Klasy są w zasadzie "szczególnymi funkcjami". Pododnie jak w funkcji można definiować wyrażenie function i deklaracje funkcji, tak składnia klasy posiada dwa komponenty: wyrażenie class i deklaracje klasy.

// Hoisting
// Ważną różnicą pomiędzy deklaracją funkcji, a deklaracją klasy jest to, że deklaracje funkcji są przenoszone na początek (hoisted) a klas nie. Najpierw musisz zadeklarować swoją klasę by mieć do niej dostęp, w przeciwnym razie kod, jak ten poniżej, wygeneruje wyjątek ReferenceError:

// Przykład:

// var p = new Prostokat(); // ReferenceError

// class Prostokat {}

//--------------------

// Jak definiujemy klasy ?
// Możemy to zrobić na dwa sposoby:
// 1) poprzez deklarację klas
// 2) poprzez wyrażenie klas - i tu mamy dwa sposoby wyrażenia klas
// a) nienazwane
// b) nazwane

// 1) Deklarowanie Klas (class declaration)
class ProstokatDeklar {
  //Prostokąt - ang. Rectangle
  constructor(wysokosc, szerokosc) {
    this.wysokosc = wysokosc;
    this.szerokosc = szerokosc;
  }
}

// 2) Wyrażenie Klas (class expression)

// a) nienazwane

// var ProstokatNienazw = class {
//   constructor(wysokosc, szerokosc) {
//     this.wysokosc = wysokosc;
//     this.szerokosc = szerokosc;
//   }
// };

// b) nazwane

// var ProstokatNazw = class ProstokatNazw {
//   constructor(wysokosc, szerokosc) {
//     this.wysokosc = wysokosc;
//     this.szerokosc = szerokosc;
//   }
// };

// Ciało klasy i definicje metod

// Ciało klasy jest umieszczane w nawiasach klamrowych {}. To tam definuje się metody, czy konstruktory.

// Tryb ścisły

// Ciało klasy jest wykonywane w trybie ścisłym (ang. strict mode). W celu poprawienia wydajności, kod wykorzystywany tutaj podlega scisłej składni; nie pozwala to na ukrycie niektórych wyjątków, a pewne słowa kluczowe są rezerwowane dla przyszłych wersji ECMAScript.

// Konstruktor

// Constructor jest szczególną metodą, która służy tworzeniu i inicjalizowaniu obiektu zdefiniowanego słowem kluczowym class. Dozwolony jest tylko jeden konstruktor w danej klasie. Jeśli klasa posiada więcej niż jedno wystąpienie metody constructor, wygenerowany zostanie wyjątek SyntaxError.

// Aby wywołać konstruktor klasy bazowej, należy użyć słowa kluczowego super.

class Prostokat {
  constructor(wysokosc, szerokosc) {
    this.wysokosc = wysokosc;
    this.szerokosc = szerokosc;
  }

  get pole() {
    return this.liczPole();
  }

  liczPole() {
    return this.wysokosc * this.szerokosc;
  }
}

const kwadrat = new Prostokat(10, 10);

console.log(kwadrat.pole); //będzie 100 - get pozwal nie pisać console.log tak ---> console.log(kwadrat.pole());

console.log(kwadrat.liczPole()); //da ten sam wynik co linijkę wyżej

console.log(``);

//------------

// Metody statyczne

// Jeżeli stworzymy metody danej klasy, trafią one do prototypu obiektów tworzonych na bazie tej klasy:

// class Human {
//     constructor(name) {
//         this.name = name;
//     }

//     say() {
//         console.log("Jestem człowiek");
//     }
// }

// // Human.say(); //błąd, bo say jest w prototypie
// Human.prototype.say(); //"Jestem człowiek"

// const ob = new Human("Marcin");
// ob.say(); //"Jestem człowiek"

// // Jak wiesz, dane metody możemy przypisywać nie tylko do prototypu obiektów, ale także bezpośrednio do instancji obiektu:

// const ob = new Human("Marcin");
// ob.say(); //Jestem człowiek
// ob.eat = function() {
//     console.log("Jem śniadanie");
// }
// // ob.prototype.eat(); //nie ma, bo tylko powyższa instancja ma tą metodę

// // W JavaScript możemy też tworzyć metody statyczne, które są dostępne do danej klasy.

// // Metody takie nie są dostępne dla nowych instancji, a tylko dla samych klas:

// //w ES5
// function Human {
//     this.name = name;
// }

// //metoda statyczna
// Human.create = function() {
//    console.log("Tworzę");
// }

// Human.prototype.say = function() {
//     console.log("Jestem człowiek");
// }

// const ob = new Human("Marcin");
// // ob.create(); //błąd
// Human.create(); //"Tworzę"

//w ES6
class Human {
  constructor(name) {
    this.name = name;
    // console.log(name);
  }

  say() {
    console.log("Jestem człowiek");
    // console.log(this.name + " Jestem człowiek");
  }

  static create() {
    console.log("Tworzę");
  }
}

const ob = new Human("Marcin");
// ob.create(); //błąd ---> ze słowem static nie zadziała
Human.create(); //"Tworzę" ---> bez słowa static nie zadziała
ob.say(); //"Jestem człowiek" ---> bez słowa static zadziałą
// Human.say(); //bez słowa static nie zadziała ---> otrzymamy komunikat, że Human.say is not a function

console.log(``);

//------------

class HumanNew {
  constructor(name, job) {
    this.name = name;
    this.job = job;
    // console.log(name, job); //zobaczymy Paweł kombinator
  }

  say() {
    console.log("Jestem człowiek");
    // console.log(this.name + " Jestem człowiek");
  }

  static sayTwo(showObjectInfo, b) {
    console.log(showObjectInfo); //wyświetlimy wszystkie informacje o obiekcie
  }

  static create(name, job) {
    console.log(`${name} ${job} - 'kombinuję jak mogę!'`);
  }
}

const obOne = new HumanNew("Paweł", "kombinator");
// ob.create(); //błąd ---> ze słowem static nie zadziała
HumanNew.create(obOne.name, obOne.job); //Dobierzemy się do imienia ---> bez słowa static nie zadziała

HumanNew.sayTwo(obOne); //taki zapis pozwoli nam wyświetlić obiekt w sayTwo

console.log(``);

//-----

// Metody statyczne najczęściej wykorzystywane są do tworzenia użytecznych funkcji dla danej klasy. Można dzięki temu pogrupować funkcjonalności dotyczące danych klas w jednym miejscu:

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log(name);
  }

  static compareByName(a, b) {
    console.log(a);

    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  }

  static compareByAge(a, b) {
    return a.age - b.age;
  }
}

const users = [
  new User("Tomek", 10),
  new User("Ania", 35),
  new User("Beata", 20),
  new User("Monika", 20),
  new User("Karol", 22),
  new User("Bartek", 50)
]; //To jest instancja klasy

users.sort(User.compareByName);
console.log(users[0].name); // Ania

users.sort(User.compareByName);
console.log(users[1].name);

console.log(``);

users.sort(User.compareByAge);
console.log(users[0].name); // Tomek

//------------

console.log(``);

class Punkt {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    console.log(x);
  }

  static odleglosc(a, b) {
    console.log(a);

    const dx = a.x - b.x;
    const dy = a.y - b.y;

    console.log(dx);

    return Math.sqrt(dx * dx + dy * dy);
  }
}

const p1 = new Punkt(5, 5);
const p2 = new Punkt(10, 10);

console.log(Punkt.odleglosc(p1, p2));

console.log(``);

//------------

// Podklasy z extends

// Słowo kluczowe extends jest używane w deklaracjach klas lub wyrażeniach klas do tworzenia klasy jako elementu potomnego innej klasy.

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes a noise.");
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + " barks.");
  }
}

var d = new Dog("Mitzie");
d.speak();

console.log(``);

//------------

// Stare podejście do klas

//Tworzymy zwykłą funkcję i przypisujemy jej wartości poszczególnych parametrów do słowa this

function Media(type, name, author) {
  this.type = type;
  this.name = name;
  this.author = author;
  console.log(type);
}

//Wywołujemy powyższą funkcję z wykorzystaniem słowa kluczowego new, a następnie przekazujemy jej argumenty

const myBook = new Media("book", "Way of the Peaceful Warrior", "Dan Millman");

// powyżej otrzymujemy obiekt będący instancją klasy Media
console.log(myBook);

//Odwołując się do prototypu danej klasy (poniżej) możemy dodawać nowe metody, które będą dostępne dla każdej instancji tej klasy

Media.prototype.getFullName = function() {
  return `'${this.name}' - auth. ${this.author}`;
};

console.log(myBook.getFullName());

console.log(``);

// Dziedziczenie klas - stary JS

function Song(name, author) {
  Media.call(this, "song", name, author);
}

Song.prototype = Object.create(Media.prototype);

const mySong = new Song("Arrival to Earth", "Steve Jablonsky");

console.log(mySong.getFullName());

console.log(``);

//----

// Obecnie w ES6 - nowe podejście do klas

// Sprawa została uproszczona. Obecnie definiujemy nowe klasy z użyciem słowa kluczowego class

class MediaClass {
  constructor(type, name, author) {
    this.type = type;
    this.name = name;
    this.author = author;
  }
  getFullName() {
    return `'${this.name}' - auth. ${this.author}`;
  }
}

const myClassBook = new MediaClass("book", "War and Peace", "Lew Tołstoj");

console.log(myClassBook);

console.log(myClassBook.getFullName());

console.log(``);

//------------

//Dziedziczenie w ES6

class SongClass extends MediaClass {
  constructor(name, author) {
    super("song", name, author);
  }
}

const myClassSong = new SongClass("Land of Confusion", "Genesis");

console.log(myClassSong);

console.log(myClassSong.getFullName());

console.log(``);

//-------------
