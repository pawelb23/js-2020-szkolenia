console.log(`ES6(JS6) - const, let, var - szkolenie`);

console.log(``);

// let i const
// Słowo kluczowe let pozwala deklarować zmienne. W odróżnieniu od wysłużonego var (var jest ograniczany tylko przez funkcje i przez to są problemy z zasięgiem),
// let przestrzega zakresu (kontekstu), w którym tworzymy zmienną; const jest bardzo
// podobne z tym, że raz przypisanej wartości nie można zmienić (czyli const to stała wartość, której nie można zmienić).
// let i const mają zasięg blokowy czyli są widoczne tylko wewnątrz swojego bloku.
// Bloki oznaczamy klamrami {} czyli np. function () {}  czy  if () {}  lub  for () {}

console.log(`Przykład 1`);

if (true) {
    var zmiennaTypuVar = 10;

    let zmiennaTypuLet = 30;

    const zmiennaTypuConst = 50;
}

console.log(
    `Zmienna typu "var" po za blokiem jest widoczna i jej wartość wynosi --- ` +
    zmiennaTypuVar
); //w konsoli bedzie widoczny wynik

// console.log(zmiennaTypuLet); //w konsoli nie zobaczymy wyniku, gdyż po za blokiem (ograniczonym klamrami) zmienna typu let czy const jest niewidoczna

// console.log(zmiennaTypuConst); //w konsoli nie zobaczymy wyniku, gdyż po za blokiem (ograniczonym klamrami) zmienna typu let czy const jest niewidoczna

console.log(``);

//==================

console.log(`Przykład 2`);

if (true) {
    let zmiennaTypuLet = 100;

    console.log(`Zmienna typu "let" w bloku ma wartość --- ` + zmiennaTypuLet);

    zmiennaTypuLet = 150;

    console.log(
        `Nadpisana wartość dla zmiennej typu "let" w bloku, teraz wynosi --- ` +
        zmiennaTypuLet
    );
}

console.log(``);

//==================

console.log(`Przykład 3`);

if (true) {
    const zmiennaTypuConst = 70;

    console.log(
        `Zmienna typu "const" w bloku ma wartość --- ` + zmiennaTypuConst
    );

    // zmiennaTypuConst = 75;
    //Jeżeli będziemy chcieli zmienić wartość zmiennej typu const, czyli odkomentujemy powyższą zmienną i przypiszemy jej nową wartość w konsoli zobaczymy automatycznie błąd, gdyż zmienna typu const ma jedną stałą wartość, której później już nie można zmieniać.
}

console.log(``);

//===================
// WARTO ZAPAMIĘTAĆ!!!

// Przykład (a).

// W przypadku pętli 'for', nie należy używać słowa kluczowego 'const', gdyż przy const zmienna może przyjąć tylko jedną wartość, więc interacja nie zadziała ('i' będzie tu miało tylko pierwszą wartość).

const arrayWithLetters = ["a", "b", "c", "d", "e"];

for (let i = 0; i < arrayWithLetters.length; i++) {
    console.log(
        `Dla indeksu - ${i}, wartość w tablicy to ---> '${arrayWithLetters[i]}'!!!`
    );
}

console.log(``);

// Przykład (b).

// const przy tablicach i obiektach!!!

// const i tablice

const numberArray = [1, 2, 3, 4, 5];

console.log(`Tablica przed zmianami [${numberArray}]`);

// numberArray = [5, 6, 7];//To nie zadziała, gdyż nie możemy przypisać numberArray nowej tablicy jeżeli użyliśmy słowa const. Można za to zmieniać poszczególne wartości w tablicy jak poniżej

numberArray[0] = 0; //To zadziala

numberArray[2] = 2.5; // To także zadziała

console.log(`Tablica po zmianach [${numberArray}]`);

console.log(``);

// const i obiekty

const obiektPies = {
    plec: "brak danych",
    imie: "Burek",
    wiek: "5 lat",
    waga: "15 kg",
    rasa: "kundelek",
    pieseksunia: function(imie) {
        if (this.imie.match(/a$/)) {
            return (this.plec = "Nasza sunia");
        } else {
            return (this.plec = "Nasz piesek");
        }
    },
};

// obiekPies = {};   // Nie zadziała, gdyż obiektPies już istnieje i nie możemy go nadpisać ---> nie nadpiszemy gdyż został stworzony z const. Możemy za to zmienić pojedyńcze wartości właściwości w obiekcie, co zapisane jest poniżej

obiektPies.imie = "Frydzia"; //Tak zadziała, zastępujemy pojedyńczą wartość
obiektPies.wiek = "12 lat"; //Tak zadziała, zastępujemy pojedyńczą wartość
obiektPies.waga = "16.5 kg"; //Tak zadziała, zastępujemy pojedyńczą wartość

obiektPies.pieseksunia();

console.log(
    `${obiektPies.plec}, wabi się ${obiektPies.imie}, rasa to ${obiektPies.rasa}, ma ${obiektPies.wiek} i waży ${obiektPies.waga}.`
);

console.log(``);

// Takie ciekawostki

function functionForConst() {
    const constOne = "one";
    const constTwo = "two";

    return [constOne, constTwo]; //zwracamy dwie zmienne w postaci tablicy
}

let letOne = functionForConst()[0]; //oczywiście to może być const albo var
let letTwo = functionForConst()[1]; //oczywiście to może być const albo var

console.log(
    `Zmienna letOne ma wartość - '${letOne}', zaś zmienna letTwo ma wartość - '${letTwo}'`
);

console.log(``);

//------

function funkcjaLicznikaWywolan(start) {
    //pierwsz funkcja, w której mamy drugą funkcję

    let licznikWywolanFunkcji = start;

    return function() {
        //druga funkcja - wewnątrz ciała pierwszej

        return ++licznikWywolanFunkcji;
    };
}

let zmiennaDoLicznika = funkcjaLicznikaWywolan(0); //wywyołujemy pierwszą funkcję

zmiennaDoLicznika(); // tutaj i poniżej wywołujemy już tylko drugą funkcję

zmiennaDoLicznika();

zmiennaDoLicznika();

console.log(`Licznik wywołań funkcji wynosi: ${zmiennaDoLicznika()}`);

//--------

console.log(``);

let age = 100;

// let name = `Stevo`; //po odkomentowaniu tej zmiennej wywali błąd w konsoli, przez var name wewnątrz funkcji

if (true) {
    var name = `John`; //jeżeli var zamienimy na const lub let to po odkomentowaniu 'let name = 'Stewo'` nie będzie żadnych konfliktów
    let age = 42;

    console.log(age);
}

console.log(name);

console.log(age);

console.log(``);

//----------