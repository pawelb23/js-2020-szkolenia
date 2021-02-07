console.log(`ES6(JS6) - Map i Set - szkolenie`);

console.log(``);

//kursjs.pl/kurs/es6/map-set.php

// Map

// Map i Set to dwie struktury danych, które są czymś pomiędzy tablicami i klasycznymi obiektami.

// Mapy służą do tworzenia zbiorów z parami [klucz - wartość]. Przypominają one klasyczne obiekty (czy np. mapy z SASS), natomiast główną różnicą odróżniającą je od klasycznych obiektów, jest to, że kluczami może być tutaj dowolny typ danych.

// Map to nowa wbudowana struktura danych znana z innych języków programowania. Porządek wstawiania par klucz-wartość w obrębie danej mapy jest zapamiętywany.

// http: Mapy są jak obiekty ale w ich przypadku kluczem może być wartość dowolnego typu. Dodatkowo Mapy posiadają następujące metody (i właściwości):

// Mapy w przeciwieństwie do obiektów mogą mieć klucze dowolnego typu, gdzie w przypadku obiektów (w tym tablic) są one konwertowane na tekst:

// Przykład:

const map = new Map();

map.set("1", "Kot");
map.set(1, "Pies");

console.log(map); //otrzymamy {"1" => "Kot", 1 => "Pies"}

const ob = {};

ob["1"] = "Kot";
ob[1] = "Pies"; //Kot zostanie zastąpione przez Pies, bo 1 będzie w obiekcie widziana jako string czyli "1"

console.log(ob); //otrzymamy {"1" : "Pies"}

// map.set(key, value) - dodaje element ze wskazanym kluczem i wartością. Kluczem może być tu także cały obiekt.

// map.get(key) - zwraca wartość elementu posiadającego podany klucz (lub undefined gdy podany klucz nie istnieje)

//map.delete(key) - usuwa element posiadający podany klucz

// map.has(key) - zwraca true/false w zależności od tego czy element o podanym kluczu istnieje czy nie

//map.clear() - usuwa wszystkie elementy z mapy

//map.size - liczba elementów mapy

console.log(``);

//----------------

const mapFirst = new Map();

// mapFirst.set(1, "One");
// mapFirst.set("1", "Two");
// mapFirst.set(true, "Three");

mapFirst.set(1, "One").set("1", "Two").set(true, "Three"); //To ten sam zapis co powyżej tylko na raz zamiast trzech kroków

console.log(`Ilość elementów w mapFirst ---> ${mapFirst.size}`); //sprawdzamy ilość elementów

console.log(``);

console.log(mapFirst.get(true)); //odczytujemy wartość klucza true

console.log(``);

// Map / Przykłady - tworzymy Map, w którym kluczem jest obiekt
const pat = { name: "Pat", age: 42 }; //obiekt
const mat = { name: "Mat", age: 42 }; //obiekt
const neighbors = new Map([
  [pat, "1dpb0fcms"], //tworzymy Map, w którym kluczem jest obiekt, ale do Map przekazujemy tablicę gdzie klucz to obiekt i druga część tablicy to wartość
  [mat, "1dpb0fnd6"], //tworzymy Map, w którym kluczem jest obiekt, ale do Map przekazujemy tablicę gdzie klucz to obiekt i druga część tablicy to wartość
]); //w powyższym przykładzie konwertujemy tablice na Mapę

console.log(neighbors.get(pat)); //Map

console.log(neighbors.delete(pat)); //dostajemy potwierdzenie - 'true' jeżeli dany element został usunięty

console.log(neighbors.get(pat)); //Map --> powyżej usunęliśmy więc brak będzie elementu

neighbors.set(pat, "1dpb0fcms"); //z powrotem dodajemy element -> klucz to obiekt pat i jego wartość, uzyskamy ten sam efekt co w wypadku konwertowania tablicy na Mapę)

// console.log(pat); //obiekt

// console.log(mat); //obiekt

console.log(neighbors.get(pat)); //Map --> znowu odczytamy wartość

console.log(``);

//--------------

// Iteracja po Mapie (metodą for of)

for (let neighbor of neighbors) {
  console.log(neighbor); //otrzymamy pełne Map ---> Wypisuje [{...}, '1dpb0fcms'] i [{...}, '1dpb0fnd6'] do konsoli
}

console.log(``);

// // Wypisuje klucze mapy neighbors do konsoli
for (let entryKey of neighbors.keys()) {
  console.log(entryKey); //pamiętajmy, że kluczem jest tu cały obiekt
}

console.log(``);
// // Wypisuje wartości mapy neighbors do konsoli
for (let entryValue of neighbors.values()) {
  console.log(entryValue); //otrzymamy wartości
}

console.log(``);

//Iteracja for of z destrukturyzacją Map

for (let [key, value] of neighbors) {
  //można też użyć for (let [key, value] of neighbors.entries()) ---> to to samo
  console.log(`${key} : ${value}`);
} //niestety nie dokońca wszystko się pokazuje bo wychodzi ---> [object Object] = 1dpb0fnd6      [object Object] = 1dpb0fcms

console.log(``);

const mapForEach = new Map([
  ["kolor1", "red"],
  ["kolor2", "blue"],
  ["kolor3", "yellow"],
]);

mapForEach.forEach(function (value, key, map) {
  console.log(`
      Wartość: ${value}
      Klucz: ${key}
      ${map}
  `); //map wyświetli [object Map]
});

//--------------

// Zamiana obiektu na Mapę

// Ponieważ nie możemy bezpośrednio zamienić obiektu na Mapę. Musimy najpierw zamienić obiekt na tablicę ---> najłatwiej zrobimy to z pomocą metody entries()

const data = {
  first: "just",
  second: "keep",
  third: "learning!",
};

const obiektTurnToMap = new Map(Object.entries(data)); //zamieniamy obiekt na tablicę, a ten na mapę

console.log(obiektTurnToMap); //mamy Mapę

console.log(``);

//---

// Jeżeli chcemy ponownie zamienić Mapę na obiekt możemy użyć metody fromEntries

const mapTurnToObject = Object.fromEntries(obiektTurnToMap);

console.log(mapTurnToObject);

console.log(``);

//--------------

// Set

// Set to nowa wbudowana struktura danych znana z innych języków programowania. Wszystkie wartości przechowywane w obrębie danego zbioru są unikalne.

// Obiekt Set jest kolekcją składającą się z unikalnych wartości, gdzie każda wartość może być zarówno typu prostego jak i złożonego. W przeciwieństwie do Mapy jest to zbiór pojedynczych wartości.

// Set / Przykłady

const names = new Set(["Pat", "Tom"]);
names.add("Pat"); //nie doda bo już było
names.add("Mat");
names.delete("Tom");
// Wypisuje 'Pat' i 'Mat' do konsoli
for (let name of names) {
  console.log(name);
}

console.log(``);

const myArray = [10, 20, 30, 35, 20, "20", "10"];

console.log(myArray);

const mySet = new Set(myArray); //przekazujemy tablicę

console.log(mySet); //w konsoli odczytamy [10, 20, 30, 35, "20", "10"] ---> czyli otrzymaliśmy tablicę od najmniejszej wartości do największej, a druga wartość 20 została pominięta (na końcu zostały stringi)

mySet.add(100); //dodajemy nową wartość, która co ciekawe ustawia się na samym końcu

console.log(mySet);

mySet.add({ a: 10, b: 25 }); //dodajemy obiekt na sam koniec

console.log(mySet);

mySet.delete(20); //usuwamy 20

console.log(mySet);

mySet.clear(); //usuniemy całą zawartość

console.log(mySet);

mySet.add(myArray); //co ciekawe nie doda nam wartości z tablicy na kolejnych miejscach, ale cała tablica będzie pod jednym adresem jako wartość

console.log(mySet);

mySet.delete(myArray); //usuwamy tablicę z pod indeksu 0 w mySet

console.log(mySet);

mySet.add(100); //dodajemy wartość

mySet.add(100); //ta wartość się nie doda bo już jest 100

console.log(mySet);

mySet.add(50); // dodajemy wartość

mySet.add({ a: 10, b: 25 }); //dodajemy obiekt

console.log(mySet);

console.log(`Ilość elementów wynosi -> ${mySet.size}`); //sprawdzamy ilość elementów

console.log(``);

// W przypadku Set() klucze i wartości są takie same, dlatego robiąc pętle nie ważne czy użyjemy powyższych values(), keys(), entries() czy po prostu zrobimy pętlę for of:

// Poniżej wyświetlimy wartości mySet
mySet.forEach(function (value) {
  //UWAGA!!! Będziemy mieli tylko jeden parametr, jeżeli wstawimy dwa parametry, wyświetli się nam po prostu ta sama wartość dwa razy
  console.log(value);
});

console.log(``);

for (let showValue of mySet) {
  console.log(showValue);
}

console.log(``);

// Tworzymy nowe Set
//const set = new Set(elementIterowalny);
const newSetTwo = new Set([1, 1, 2, 2, 3, 4]); //{1, 2, 3, 4} --->zdublowane numery zostaną pominięte

console.log(newSetTwo);

const newSetThree = new Set("kajak"); //wyświetli w konsoli {"k", "a", "j"} ---> zdublowane litery zostaną pominięte
console.log(newSetThree);

console.log(newSetThree.has("k"));

console.log(``);

//---------------

// Dzięki temu, że Set zawiera niepowtarzające się wartości, możemy to wykorzystać do odsiewania duplikatów w praktycznie dowolnym elemencie iteracyjnym - np. w tablicy.

// Przykład:

const arrayNumbers = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 5, 5];

const setArray = new Set(arrayNumbers);
console.log(setArray); //otrzymamy w konsoli {1, 2, 3, 4, 5}

const uniqueTab = [...setArray];
console.log(uniqueTab); //otrzymamy w konsoli unikalną tablicę [1, 2, 3, 4, 5]

console.log(``);

//--------------

const tabStrings = ["ala", "bala", "cala", "ala", "ala"];

const tabUnique = [...new Set(tabStrings)]; //na stronie jest trochę inaczej, ale wtedy nie działa poprawnie - teraz działa
console.log(tabUnique); //działa poprawnie ["ala", "bala", "cala"]

console.log(``);

//--------------

// WeakMap i WeakSet --->   http://kursjs.pl/kurs/es6/map-set.php#weak

// WeakMap
// WeakMap to odmiana Mapy, którą od Map rozróżniają trzy rzeczy:

//     Nie można po niej iterować (w przyszłości będzie można, bo już zapowiedziano odpowiednie zmiany)
//     Kluczami mogą być tylko obiekty
//     Jej elementy są automatycznie usuwane gdy do danego obiektu (klucza) nie będzie referencji

// WeakSet
// Podobnie jak dla Map istnieją WeakMap, tak dla Setów istnieją WeakSet. Są to kolekcje składające się z unikanych obiektów. Podobnie do WeakMap obiekty takie będą automatycznie usuwane z WeakSet, jeżeli do danego obiektu zostaną usunięte wszystkie referencje.

//--------------
