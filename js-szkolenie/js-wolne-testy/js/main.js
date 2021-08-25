console.log(`JS - wolne testy (ćwiczenia)`);

console.log(``);

// Zmiana danych bez mutacji z użyciem metody assign()

var player = { score: 1, name: "Jeff" };

var newPlayer = Object.assign({}, player, { score: 2 });

// Zmienna "player" nie uległa zmianie, a "newPlayer" jest nowym obiektem o wartościach {score: 2, name: 'Jeff'}

// Jeśli używasz składni "operatora rozszczepienia" (ang. spread operator), możesz napisać:
// var newPlayer = {...player, score: 2};

console.log(player);

console.log(newPlayer);

console.log("");

//--------------

let arrayOne = [`one`, `two`, `three`];

let arrayTwo = [`four`, `five`, `six`];

let arrayThree = [null];

let newConcatArray = arrayThree.concat(arrayOne, arrayTwo);

console.log(newConcatArray);

console.log(``);

//----------

let arrayFour = [1, 2, 3];

const ghostArrayFour = arrayFour.slice(0);

console.log(ghostArrayFour);

console.log(``);

var arrayFive = arrayFour.join("");

console.log(arrayFive);

console.log(``);

//-----------

const tab = new Array(10);

tab[1] = 1; //dodamy na drugim miejscu w tablicy
tab[0] = 2; //dodamy na pierwszym miejscu w tablicy
tab.push(4); //dodamy na koniec tablicy (ponieważ tablica była stworzona z 10 pustymi miejscami, 4 wskoczy na 1 miejsce po wszystkich elementach)
tab[tab.length - 2] = 5;

console.log(tab);

console.log(``);

tabOne = new Array(10, "Ala", "Bala", "Cala");
console.log(tabOne);

//------------

const totalyNewArray = new Array(); //tworzymy pustą tablicę tak

const tatalyNewArrayTwo = []; //albo tak tworzymy pustą tablicę

console.log(totalyNewArray);

console.log(tatalyNewArrayTwo);

//------------

console.log(``);

const randomIndeks = Math.floor(Math.random() * tabOne.length);

// console.log(randomIndeks);

const randomValue = tabOne[randomIndeks];

console.log(
  `Losowy indeks wynosi: '${randomIndeks}', a jego wartość w tablicy to: '${randomValue}'.`
);

console.log(``);

//------------

function functionWithAnotherFunction(firstNumberFunction) {
  console.log(
    `Parametr zewnętrznej funkcji wynosi ---> ${firstNumberFunction}`
  );

  var timeVariableNumber = 0;

  return function (secondNumberInInsideFunction) {
    console.log(
      `Zmienna we wnętrzu wewnętrznej funkcji wynosi ---> ${timeVariableNumber}`
    ); //dlaczego 'tak'? Ponieważ kiedy wywołujemy tylko funkcję zewnętrzną, lub zewnętrzną i wewnętrzną to zmienna pobiera początkową wartość z zewnętrznej funkcji. Jeżeli przestaniemy odwoływać się do zewnętrznej funkcji (a właściwie do funkcji zewnętrznej i jej parametru) i zajmiemy się tylko funkcją wewnętrzną, to argument z funkcji zewnętrznej, będzie jakby tylko w pamięci, i nie będziemy się już odwoływać do wnętrzna zewnętrznej funkcji, w której ciele jest także wartość początkowa naszej zmiennej. Zmienna w funkcji wewnętrznej zacznie się więc zmieniać z każdym kolejnym wywołaniem funkcji, gdyż będzie teraz za każdym razem pobierała wartość z ostatniego wywołania wewnętrznej funkcji (tak naprawdę będziemy już tylko zmieniać funkcje wewnętrzną).
    timeVariableNumber += secondNumberInInsideFunction; //Dodajemy jedną stronę do drugiej
    return timeVariableNumber;
  };
}

const timeVariable = functionWithAnotherFunction(0); //odwołujemy się tylko do pierwszej funkcji

functionWithAnotherFunction(0)(2); //odwołujemy się do funkcji zewnętrznej i wewnętrznej
// functionWithAnotherFunction()(2); //tak nie zadziała, aby stale (przy wywoływaniu funkcji) zmieniać wartość zmiennej timeVariableNumber, trzeba wywołać funkcję ze zmienną jak poniżej
timeVariable(2); //odwołujemy się tylko do drugiej funkcji za pomocą wcześniej stworzonej zmiennej

timeVariable(2);

timeVariable(2);

timeVariable(2);

console.log(``);

//------------

// Funkcja poniżej działa podobnie jak ta powyżej

function licznik(start) {
  let liczbaWywolan = start;

  return function () {
    return console.log(++liczbaWywolan);
  };
}

const zmiennaDoFunkcjiLicznik = licznik(0);

zmiennaDoFunkcjiLicznik(); //należy pamiętać, że każde kolejne wywołanie zmienia na stałe liczbę wywołań czyli zmienną ---> liczbaWywolan

zmiennaDoFunkcjiLicznik();

zmiennaDoFunkcjiLicznik();

console.log(``);

//----------

let objectInformation = {
  noImportant: 12,
  ourThis: `'NASZE THIS z użyciem call()'`,
};

objectInformation.ourThis = `'NASZE THIS z użyciem apply()'`;

function weUseApplyInThisFunction(one, two, three) {
  console.log(
    `To są trzy argumenty przekazane do parametrów funkcji ---> ${one}, ${two}, ${three}, a tu mamy odniesienie do konteksu, który chcemy wywołać ---> ${this.ourThis}.`
  );
}

let argumentsArray = [`'Arg. Apply 1'`, `'Arg. Apply 2'`, `'Arg. Apply 3'`]; //jako drugi argument przekażemy w metodzie apply całą tablicę

weUseApplyInThisFunction.apply(objectInformation, argumentsArray); //pierwszy argument to nasz obiekt, zaś drugim będzie tutaj tablica

console.log(``);

console.log(
  `Pierwszy typ to ---> ${typeof objectInformation}, zaś drugi to ---> ${typeof weUseApplyInThisFunction}`
); //sprawdzamy typy operandu (operand jest łańcuchem znaków, zmienną, słowem kluczowym lub obiektem, którego typ ma zostać zwrócony)

console.log(``);

console.log(argumentsArray.shift()); //metoda shift() usunie z tablicy pierwszy element. Tutaj w konsoli zobaczymy('Arg. Apply 1')

console.log(argumentsArray); //po usunięciu metodą shift() pierwszego elementu w  tablicy zostanie drugi i trzeci element

console.log(``);

//----------

var waitForEl = function (zmienna, callback) {
  if (zmienna == 5) {
    callback();
  } else {
    const time = setInterval(function () {
      if (zmienna == 5) {
        clearInterval(time);
        waitForEl(zmienna, callback);
        return;
      }
      console.log("Zmienna to: " + zmienna);
      zmienna++;
    }, 100);
  }
};

//--------

// function waitForEl(zmienna, callback) {
//   if (zmienna == 5) {
//     callback();
//   } else {
//     setTimeout(function() {
//       console.log("Zmienna to: " + zmienna);
//       zmienna++;
//       waitForEl(zmienna, callback);
//     }, 500);
//   }
// }

// funkcja wywołująca
waitForEl(0, function () {
  console.log("Zmienna osiągneła wartość 5");
  console.log(``);
});

//----------

// Rekurencja (inaczej Rekursja) ---> to odwoływanie się funkcji do samej siebie

// Ciąg Fibbonaciego ---> przykład na rekurencję

// dla przypomnienia ---> w ciągu fibbonaciego dwie kolejne cyfry(liczby) dają wynik ciągu
// np. 0 i 1 = 1 ---> 1 + 1 = 2, ---> 1 + 2 = 3 ---> 2 + 3 = 5 ---> 3 + 5 = 8, ---> 5 + 8 = 11, itd...

const fibboVariable = 19;

function fibbonaciValue(n) {
  if (n <= 1) {
    return (n = 1);
  } else {
    // console.log(variableN);
    return fibbonaciValue(n - 1) + fibbonaciValue(n - 2);
  }
}

console.log(
  `Wartość ciągu dla liczby '${fibboVariable}' wynosi ---> '${fibbonaciValue(
    fibboVariable
  )}'`
);

console.log(``);

//----------

function addNumber(a, b) {
  return (objectInFunctionReturn = {
    a: a + b,
    b: b - a,
    adding: function (a, b) {
      return this.a + this.b;
    },
  });
}

// console.log(addNumber(2, 5).a);

// console.log(addNumber(2, 5).adding());

console.log(
  `Wartości w obiekcie utworzonym w returnie funkcji wynoszą ---> 'a = ${
    addNumber(2, 5).a
  }' i 'b = ${
    addNumber(2, 5).b
  }', zaś wynik dodawania tych wartości (wewnątrz tego obiektu) to '${addNumber(
    2,
    5
  ).adding()}'`
);

console.log(``);

//----------

// Pojedynczy obiekt stworzony na podstawie klasy, to instancja klasy.

//----------

// Operator warunkowy (ternary)

var liczba = 100;

var wynik = liczba < 0 ? `mniejsza od zera` : `większa od zera`; //operator warunkowy, budowa ---> warunek ? wyrazenie1 : wyrazenie2

// czyli -> jeśli warunek jest prawdziwy,(?) podstaw za wartość całego
// wyrażenia wartość1,(:) a w przeciwnym razie za wartość wyrażenia podstaw
// wartość2.(;)

console.log(`Liczba ${liczba} jest ${wynik}!`);

console.log(``);

//----------

// CONTINUE

// Instrukcja continue powoduje przejście do jej kolejnej iteracji.

for (var i = 1; i <= 20; i++) {
  if (i % 2 != 0) {
    continue;
  }
  /* jeśli wartość zmiennej i nie jest podzielna przez dwa to przejdź do kolejnej iteracji
  jeśli jest podzielna przez dwa to wypisz tą iterację */
  console.log(`Cyfra/Liczba ${i} jest podzielna przez 2`);
}

// Jest to pętla for, która wyświetla liczby całkowite z zakresu 1 – 20 podzielne przez 2.

console.log(``);

//----------

// BREAK

// Działanie każdej z pętli może być przerwane w dowolnym momencie za pomocą instrukcji break.
// Jeśli zatem break pojawi się wewnątrz pętli, zakończy ona swoje działanie.
var i = 0;
while (true) {
  /* pętla while wykonywała by się w nieskończoność (ponieważ warunek tej pętli był by
zawsze prawdziwy), gdyby nie znajdująca się wewnątrz instrukcja break (dzięki czemu
pętla będzie wykonywana dopóki wartość zmiennej i nie osiągnie co najmniej wartości 9) */
  console.log("Do 9 i break zadziała [i = " + i + "] ");
  if (i++ >= 9) {
    break;
  }
}

console.log(``);

//---

let xVariable = 0;

while (xVariable >= 0) {
  console.log(xVariable);
  xVariable++;

  if (xVariable === 10) {
    console.log(xVariable);
    console.log(`
    break ---> czyli koniec!
    
    `);
    break;
  }
}

console.log("");

//---

for (let forVariable = 0; forVariable > -1; forVariable++) {
  console.log(forVariable);
  if (forVariable === 5) {
    console.log(`
    break ---> czyli koniec!
    
    `);
    break;
  }
}

console.log(``);

//----------

// INSTRUKCJA SWITCH

// Instrukcja switch jest kolejnym sposobem testowania warunków działającym na zasadzie przyrównania wyniku do podanych przypadków.
// Pozwala w wygodny sposób sprawdzić ciąg warunków i wykonać różne instrukcje w zależności od wyników porównywania.

//----------

// Metoda reduce()

// Metoda reduce() wywołuje funkcję względem wartości przyrostowej z każdego wywołania i kolejnego elementu tablicy (od lewej do prawej) w celu sprowadzenia tej tablicy do pojedynczej wartości.

// Parametry

// callback
//     Funkcja wykonywana na każdej wartości w tablicy, przyjmuje cztery argumenty:

//     previousValue
//         Wartość zwróconą w ostatnim wywołaniu funkcji callback, lub initialValue, jeśli ta została dostarczona. (Patrz niżej.)
//     currentValue
//         Obecnie przetwarzany element w tablicy.
//     index
//         Indeks w tablicy obecnie przetwarzanego elementu.
//     array
//         Tablica, na której została wykonana funkcja reduce .

// initialValue
//     Opcjonalne. Obiekt który będzie użyty jako pierwszy argument pierwszego wywołania funkcji callback.

let arrayStart = [5, 10, 15, 20, 25];

let arrayForReduce = arrayStart.reduce(function (
  previousValue,
  currentValue,
  index, //
  array
) {
  console.log(index, currentValue); //odczyta index i jego wartość
  console.log(array); // pokaże całą tablicę
  // console.log(array, previousValue); // pokaże całą tablicę i wartości dodawane w kolejnych krokach ---> pierwsza wartość to 25 i do niej dodawane są wartości z tablicy
  return previousValue + currentValue;
}, 25);

console.log(
  `Całkowity wynik z użycia metody reduce na tablicy wynosi >>> ${arrayForReduce} <<<`
);

console.log(``);

//----------

// Negacja NOT (!) ---> np. if (!ourParamVariable) {}

// Przykład

let varNumberZero = 0;

let varNumberOne = 1;

let varEmptyString = "";

let varString = "Hej!";

let varArray = [0, 1, 2, 3, 4, 5];

let varObject = {
  animal: `piesek - a właściwie sunia`,
  breed: `kundelek`,
  name: `Fryga`,
  age: 12,
};

const checkIt = (ourParamVariable) => {
  if (!ourParamVariable) {
    //oznacza negację czyli jeżeli bez wykrzyknika wynik to 'true' to z wykrzyknikiem wynik to 'false'
    return "prawda";
  } else {
    return "nie prawda";
  }
};

console.log(`Wynik to ---> ${checkIt(varNumberZero)}`);

console.log(`Wynik to ---> ${checkIt(varNumberOne)}`);

console.log(`Wynik to ---> ${checkIt(varString)}`);

console.log(`Wynik to ---> ${checkIt(varEmptyString)}`);

console.log(`Wynik to ---> ${checkIt(true)}`);

console.log(`Wynik to ---> ${checkIt(false)}`);

console.log(`Wynik to ---> ${checkIt(varArray)}`);

console.log(`Wynik to ---> ${checkIt(varObject)}`);

console.log(`Wynik to ---> ${checkIt(varObject.name)}`);

console.log(``);

//----------

// Hoisting

// Przykład A

showITInConsole = 5; //definiujemy zmienną

console.log(showITInConsole);

var showITInConsole; //deklarujemy zmienną

// Przykład B

var showITInConsoleTwo; //deklarujemy zmienną

console.log(showITInConsoleTwo);

showITInConsoleTwo = 10; //definiujemy zmienną

// Przykład C

var showITInConsoleThree = 15; //definiujemy zmienną

console.log(showITInConsoleThree);

console.log(``);

//----------

const myStr = `Abc 123 null ${20 + 3}`; //zapis --- ${20+3} sprawi, że część tekstu zachowa się jak zwykły JS --- a więc obliczy nam działanie 20 + 3 czyli będzie 23

console.log(myStr);

console.log(``);

//----------

// Metoda hasOwnProperty() zwraca wartość true jeśli obiekt, na którym została wywołana posiada konkretną własność.

var objProp = {
  bar: 12,
};

Object.hasOwnProperty(objProp, "bar"); // --> undefined
if ("bar" in objProp) {
  console.log(`Szukana właściwość znajduje się w obiekcie!`);
} else {
  console.log("Nie ma takiej właściwości w obiekcie!");
}

Object.hasOwnProperty(objProp, "notBar"); // --> undefined
if ("notBar" in objProp) {
  console.log(`Szukana właściwość znajduje się w obiekcie!`);
} else {
  console.log("Nie ma takiej właściwości w obiekcie!");
}

console.log(``);

//----------

const newVariableReturnAsObject = () => {
  const a = 3;
  const b = 5;
  const c = 7;
  return { a, b, c };
};

console.log(`   Z Obiektu:
${newVariableReturnAsObject().a}
${newVariableReturnAsObject().b}
${newVariableReturnAsObject().c}

`);
//tak jak powyżej wyświetlimy (jako obiekt) wszyskto z wnętrza funkcji przy return - tutaj wyświetlamy wszystkie trzy zmienne

const newVariableReturnAsArray = () => {
  const a = 3;
  const b = 5;
  const c = 7;
  return [a, b, c];
};

console.log(`   Z Tablicy:
${newVariableReturnAsArray()[0]}
${newVariableReturnAsArray()[1]}
${newVariableReturnAsArray()[2]}

`);
//tak jak powyżej wyświetlimy (jako tablicę) wszyskto z wnętrza funkcji przy return - tutaj wyświetlamy wszystkie trzy zmienne

console.log(``);

//----------

// Math.sqrt() ---> //zwraca pierwiastek kwadratowy liczby

console.log(Math.sqrt(2));

console.log(Math.sqrt(25));

console.log(``);

//----------

// Metoda test() służy do sprawdzania, czy dane wyrażenie znajduje się w tekście:

const text = "cat dog cat cat dog cat";
const reg = /cat/;
console.log(reg.test(text) === true); //bo cat znajduje się w tekście

const reg2 = /^cat$/;
console.log(reg2.test(text)); //false - bo wzorzec zaczyna się z początkiem i kończy z końcem tekstu (znaki ^ i $) - jedyny pasujący tekst to "cat"

console.log(``);

//----------

// Flagi

// Poza wymienionymi meta znakami istnieją specjalne parametry (flagi), które oddziałują na wyszukiwanie wzorców.:

// const reg = /[a-z]*/mg
// const reg = new RegExp("[a-z]*","g")

// znak Flagi	znaczenie
// i	powoduje niebranie pod uwagę wielkości liter
// g	powoduje zwracanie wszystkich pasujących fragmentów, a nie tylko pierwszego
// m	powoduje wyszukiwanie w tekście kilku liniowym. W trybie tym znak początku i końca wzorca (^$) jest wstawiany przed i po znaku nowej linii (\n).

// Obiekt String posiada metodę match(), która spełnia tę samą funkcję co metoda exec() obiektu RexExp, jednak zwraca od razu wszystkie pasujące fragmenty.

// const text = "Numer1, Numer2, Numer3, NumerB, Numer5, NumerD";
// const reg = /Numer[1-4A-C]/g;
// console.log(text.match(reg)); //Numer1, Numer2, Numer3, NumerB

// const reg = /d(b+)(d)/ig;
// const result = "cdbBdbsbz".match(reg);

// if (result.length) {
//     console.log(result.join("-")); //dbBd
// }

//-----------

console.log(text.match(/cat/g)); //'g' pozwoli nam wyświetlić wszystkie wystąpienia słowa cat ---> bez tego otrzyammy tylko pierwsze trafienie słowa cat

console.log(text.match(/dog/g).length); //dzięki 'g' znajdziemy wszystkie wystąpienia słowa dog ---> a dalej dzięki length zliczymy ilość wystąpień ---> ilość wyniesie 2

console.log(``);

//----------
// .map()
const numbers = [1, 2, 3];
const doubled = numbers.map((x, y) => x * 2 + y); // [2, 4, 6] ---> x to po prostu kolejne elementy z tablicy numbers

// const doubledWithIndex = numbers.map((x, index) => x * 2 + index); // [2, 4, 6] ---> x to po prostu kolejne elementy z tablicy numbers dodajemy do każdej kolejnej wartości jej idnex (czyli y w tym przypadku, to po prostu index każdej kolejnej wartości w tabeli)

console.log(`Nowa tablica po użyciu metody map ---> [${doubled}]`); //ES6

// console.log(`Nowa tablica po użyciu metody map ---> [` + doubled + `]`); //Stary zapis

console.log(``);

//----------

// Tego samego typu zadanie zrobione dwoma sposobami

const arrayAge = [18, 12, 44, 34, 9];

function isAdult(age) {
  if (age >= 18) {
    console.log(`Przyznanao dostęp!`);
  } else {
    console.log(`Oooops!!!`);
  }
}

const giveMeAge = arrayAge.map(isAdult);

console.log(``);

//----------

for (let i = 0; arrayAge.length > i; i++) {
  // console.log([i]);
  isAdult(arrayAge[i]);
}

console.log(``);

//------------

const arrayOneToConcat = [18, 12, 44, 34];

const arrayTwoToConcat = [1, 2, 3];

const arrayOneAndTwo = arrayOneToConcat.concat(arrayTwoToConcat);

console.log(arrayOneAndTwo);

console.log(``);

//----------

const arrayToSliceExample = [1, 12, 17, 23, 34, 45];

const newArrayFunction = (arrayExample, nNumber) => {
  const giveMeNewArray = arrayExample.slice(nNumber);
  // return [giveMeNewArray, nNumber];
  return { giveMeNewArray, nNumber };
};

const newArrayFunctionInfo = newArrayFunction(arrayToSliceExample, 2);

// console.log(`
// Stara Tablica ---> [${arrayToSliceExample}]
// Nowa Tablica (liczymy ją od '${newArrayFunctionInfo[1]}' elementu starej tablicy)  ---> [${newArrayFunctionInfo[0]}]`);

const { giveMeNewArray, nNumber } = newArrayFunctionInfo; //wykorzystujemy destrukturyzację obiektu

console.log(`
Nowa Tablica ---> ${giveMeNewArray}, 
Nową Tablicę liczymy od indeksu nr '${nNumber}' starej Tablicy,
Stara Tablica ---> ${arrayToSliceExample}

`);

console.log(``);

//----------

var whileNumber = 0;
while (whileNumber <= 1) {
  console.log(whileNumber);
  whileNumber++;
}

console.log(``);

//----------

do {
  whileNumber;
  console.log(whileNumber);
  whileNumber++;
} while (whileNumber <= 0);

console.log(whileNumber);

console.log(``);

//----------

const allNumbersArray = [1, 4, 6, 3, 4, 6, 7];

const addResult = allNumbersArray.reduce((a, b) => a + b);

console.log(addResult);

console.log(``);

//----------

let objectZero = { one: 1, two: 2, three: 3 };

for (let key in objectZero) {
  console.log(`${key} : ${objectZero[key]}`); //taki zapis jako pierwsze da właściwość, a po znaku równa się jej wartość (zapis trochę jak w tablicy)
}

console.log(``);

//----------

// Tworzymy Tablicę Tablic

const newArrayPairs = [];

newArrayPairs.push(["a", 1]);

newArrayPairs.push(["b", 5]);

console.log(newArrayPairs);

console.log(``);

//----------

const arrayNumbersOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const reduceArrayNumbers = arrayNumbersOfNumbers
  .filter((oneNumber) => oneNumber % 2 === 0)
  .reduce((a, b) => b - a); // liczy tak --->
//  4 - 2 = 2;
//  6 - 2 = 4;
//  8 - 4 = 4;
// 10 - 4 = 6; ---> w konsoli otrzymamy 6
// Jeżeli w założeniu przyjmiemy a - b ---> otrzymamy -26;

console.log(reduceArrayNumbers);

console.log(``);

//----------

let arrayABC = ["d", "a", "e", "b", "c"];

const newArrayABCUpperCase = arrayABC
  .map((arrayABC) => arrayABC.toUpperCase())
  .sort();

console.log(newArrayABCUpperCase);

console.log(``);

//----------

function changeArray(exampleArray) {
  const newArrayUpperAndSort = [];
  for (let i = 0; i < exampleArray.length; i++) {
    // console.log(exampleArray[i]);
    newArrayUpperAndSort.push(exampleArray[i].toUpperCase());
  }
  return newArrayUpperAndSort.sort();
}

console.log(changeArray(arrayABC));

console.log(``);

//----------

const arrayExample = [1, 2, 3];

arrayExample.forEach((element, index, allArray) =>
  console.log(
    `Index: '${index}' ---> wartość wynosi:  '${element}', zaś cała tablica to '[${allArray}]'`
  )
);

console.log(``);

//----------

const arrayX = [-1, 1, 2, 3, 4, 5];

const arrayY = [6, 7, 8, 9, 10, 11, 12];

function Adding(x, y) {
  for (let i = 0; x.length > i || i < y.length; i++) {
    if (i >= x.length) {
      x[i] = 0;
    } else if (i >= y.length) {
      y[i] = 0;
    }
    const result = x[i] + y[i];
    console.log(result);
  }
}

Adding(arrayX, arrayY);

console.log("");

//------------

// console.log($("section div:empty").length); //tak np. możemy sprawdzić ilość pustych div'ów w section --- coś tu nie do końca działa

console.log("");

//----------

// Operator warunkowy jest jedynym operatorem w JavaScript, który pobiera trzy argumenty. Operator jest często stosowany jako skrócenie instrukcji if.
// // Składnia
// // warunek ? wynik1 : wynik2  jeżeli to prawda to wynik 1 jeżeli fałsz to wynik 2

//-----------

// new Image() --->  // możemy stworzyć obrazek za pomocą np. konstruktora Image(

// const newImage = new Image(200, 300); //przy tworzeniu Image możemy podać jego rozmiary
// newImage.src = "obrazek_on.jpg"; //podajemy jego src

// document.querySelector("body").appendChild(newImage);

//----------

// Obiekt (instancja klasy)

// Żeby utworzyć nową instancję obiektu obj, używamy wyrażenia new obj, przypisując jego wynik (który jest typu obj) do zmiennej, żeby później mieć do niego dostęp.

// W poniższym przykładzie definiujemy klasę Person i tworzymy dwie instancje (person1 i person2).

// function Person() { }
// var person1 = new Person();
// var person2 = new Person();

//----------

// ECMAScript 5 wprowadził nową metodę: Object.create(). Wywołanie tej metody tworzy nowy obiekt. Jego prototypem staje się pierwszy argument tej metody:

// var a = { a: 1 };
// // a ---> Object.prototype ---> null

// var b = Object.create(a);
// // b ---> a ---> Object.prototype ---> null
// console.log(b.a); // 1 (inherited)

// var c = Object.create(b);
// // c ---> b ---> a ---> Object.prototype ---> null

// var d = Object.create(null);
// // d ---> null
// console.log(d.hasOwnProperty);
// undefined, because d doesn't inherit from Object.prototype

//-----------

// Poniżej po odkomentowaniu kilka ciekawych sposobów na wyczyszczenie tablicy A ---> z pytań egzaminacyjnych

// var A = [1, 2, 3, 4];

// A = [];

// A.length = 0;

// A.splice(0, A.length);

// console.log(A);

// console.log(``);

//-----------

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

// // function testName(name) {
// //   return name;
// // }

// // // console.log(typeof testName.prototype); // zwraca 'object'
// // // console.log(typeof testName.prototype.constructor); // zwraca 'function'
// // // console.log(testName.prototype.constructor("abc")); // zwraca 'abc'
// // // console.log(testName("abc"));

// // console.log(typeof this.prototype); //undefined
// // console.log(this); //window

// // console.log("");

// // toLocaleTimeString();

// //------------------

// // Pracuję nad poniższym

// // function Person() {
// //   var that = this;
// //   that.age = 0;

// //   setInterval(
// //     function growUp() {
// //       // The callback refers to the `that` variable of which
// //       // the value is the expected object.
// //       that.age++;
// //     },
// //     1000,
// //     console.log(that.age++)
// //   );
// // }

// // console.log("");

// console.log(new Person());

// ===============

function Base(name) {
  this.name = name;
}

Base.prototype.getName = function () {
  return this.name + " 2.albo nie działa";
};

var test = new Base("1.działa");

console.log(test.getName());

// ciekawostka: właściwość name też jest dostępna
//document.getElementById('result').innerHTML = test.name;

// ============

console.log("");

function alfabet() {
  return this;
}

console.log(alfabet()); //zwróci obiekt window

console.log(typeof alfabet.prototype);

const newAlfabet = alfabet.bind(alfabet(), "abc");

console.log(newAlfabet());

//--------

const numbersOld = [5, 10, 25, 50, 125];

const oldWayArr = numbersOld.map(function (number, index, oldArray) {
  return console.log(number * 2, index, oldArray); //przy takim zestawieniu parametrów w console.log zobaczymy 1 -> wynik mnożenia, 2. -> index, 3. całą starą tablicę wartości
}); //tworzymy zmienną newArr i przypisujemy do niej funkcję

oldWayArr; //wywołujemy zmienną, w konsoli

console.log(``);

const a = "5abc7";

const b = 3;

const dodawanie = (c, d) => Number.parseInt(c) + d;

console.log(dodawanie(a, b));

console.log(isNaN("hello"));

var toFloat;

var floatValue = parseFloat(toFloat);

function findMeFloat(floatValue) {
  if (isNaN(floatValue)) {
    // notFloat();
    console.log("1");
  } else {
    // isFloat();
    console.log("0");
  }
}

toFloat = 5;

findMeFloat(toFloat);

toFloat = "abc";

findMeFloat(toFloat);

toFloat = "10x0abc";

findMeFloat(toFloat);

console.log("abc".length);

console.log("");

// ===================

const newSentence = "abc";

const firstSentence = newSentence.charAt(0).toUpperCase();

const secondSentence = newSentence.substring(1, 3);

console.log(firstSentence + secondSentence);

console.log("");

const numberBoard = [1, 2, 3, 4, 5]; //Array

const arrayRandomIndex = Math.floor(Math.random() * numberBoard.length);

const randomNumber = numberBoard[arrayRandomIndex];

console.log(`losowy index - ${arrayRandomIndex}
liczba w tablicy pod indexem - ${randomNumber}`);

console.log("");

// ===================

const car = { make: "Honda", model: "Accord", year: 1998 };

console.log("make" in car);
// expected output: true

delete car.make;

console.log(car);

if ("make" in car === false) {
  car.make = "Suzuki";
}

console.log(car.make);
// expected output: "Suzuki"

console.log("");

// =================

console.log(2 ** 4); //2 do potęgi 4

console.log(Math.pow(2, 4)); // również 2 do potęgi 4

console.log("");

// =================

// Left shift  (a << b)

// np.

// 5 << 2 ---> czyli 5 * (2 ** 2) = 5 * (4) = 20

// 9 << 3 ---> czyli 9 * (2 ** 3) = 9 * (8) = 72

// =================

// Right shift (a >> b)

// 5 >> 2 ---> czyli 5 / (2 ** 2) = 5 / (4) = 1

console.log(` ${5 >> 2}`);

// -5 >> 2 ---> czyli -5 / (2 ** 2) = -5 / (4) = -1.25 (chyba zaokrąglamy w górę, dlatego wynikiem będzie --->  -2)

console.log(-5 >> 2);

console.log("");

// ================

// Wbudowana funkcja isNaN():

console.log(isNaN(NaN));
console.log(isNaN(2));

console.log("");

// Infinity, -Infinity oraz NaN wykorzystane mogą być do testów za pomocą wbudowanej funkcji isFinite():

isFinite(1); // true
isFinite(1 / 0); // false
isFinite(-Infinity); // false
isFinite(Infinity); // false
isFinite(NaN); // false

// ===============

// parseInt, parseFloat

console.log(parseInt(`10.2abc`)); // 10
console.log(parseFloat(`10.2abc`)); // 10.2

console.log("");

// ===============

//Sprawdzamy czy coś jest tablicą, obiektem, zmienną typu null, itp.

let arrayToCheck = [null];

// console.log(arrayToCheck); //tablica, która ma tylko jedną wartość - null

let objectToCheck = {};

const valueNullToCheck = null;

console.log(Object.prototype.toString.call(arrayToCheck));
console.log(Object.prototype.toString.call(objectToCheck));
console.log(Object.prototype.toString.call(valueNullToCheck));

console.log("");

//================

// Operatory +=, -=, *=, /=

var randomNumberVariable;

function addVariable(randomNumberVariable) {
  randomNumberVariable += 5;

  return randomNumberVariable;
}

console.log(addVariable(20));

function splitVariable(randomNumberVariable) {
  randomNumberVariable /= 5;

  return randomNumberVariable;
}

console.log(splitVariable(25));

console.log(``);

//===============

let variableToString = 1;

// console.log(variableToString.length);

console.log(variableToString.toString() + 52); //wynik to 152 bo jeden zamieniamy na string wcześniej czyli "1" + 52 = 152

console.log("");

//===============

// Pętla >> while <<

let variableNumberInWhile = 0;

while (variableNumberInWhile <= 5) {
  console.log(variableNumberInWhile);

  variableNumberInWhile++;
}

console.log("");

// Pętla >> do while <<

let variableNumberInDoWhile = 1;

do {
  console.log(variableNumberInDoWhile); //zostanie wykonany

  variableNumberInDoWhile++;
} while (variableNumberInDoWhile < 1); //będzie wykonywany dopóki nie dojdzie do tego momentu

console.log("");

//=================

var ageNumber = 20;

var allowed =
  ageNumber > 18
    ? `${ageNumber} jest większe od 18`
    : `${ageNumber} jest mniejsze od 18`;

console.log(allowed);

console.log("");

//=================

// typeof - przykłady

var objectAutoExampleForTypeOf = {
  marka: "Ford",
  model: "Fiesta",
  detale: {
    kolor: "grafitowy",
    konieMechaniczne: 96,
  },
};

const ageExampleForTypeOf = 5;

const stringExampleForTypeOf = "String";

console.log(typeof objectAutoExampleForTypeOf);

console.log(typeof ageExampleForTypeOf);

console.log(typeof stringExampleForTypeOf);

console.log("");

//===============

// Obiekt - dostęp do obiektu

var autoObject = {
  marka: "Ford",
  model: "Fiesta",
  detale: {
    kolor: "grafitowy",
    konieMechaniczne: 96,
  },
};

console.log(autoObject.detale.konieMechaniczne); //1 sposób - dostajemy się do obiektu ---> ten sposób jest bardziej popularny

console.log(autoObject[`detale`][`kolor`]); //2 sposób - dostajemy się do obiektu ---> sposób rzadko używany

console.log("");

// Poniższy przykład tworzy prototyp obiektu Person i jego instancję - newPerson.

function Person(imie, wiek) {
  this.imie = imie;
  this.wiek = wiek;
}

// Definiowanie obiektu
var newPerson = new Person("Marek", 24);
// Stworzyliśmy nową osobę o imieniu 'Marek' i wieku 24 lat.

// console.log(newPerson); //Obiekt

// console.log("");

// var personArray = [newPerson, "abc"];

// console.log(personArray);

function showRandomPerson() {
  const newRandomPersonHeniek = new Person("Heniek", 50);
  const newRandomPersonJola = new Person("Jolka", 32);
  const newRandomPersonZyzio = new Person("Zyzio", 10);
  const newRandomPersonMiecia = new Person("Miecia", 45);
  const newRandomPersonWiesiek = new Person("Wiesiek", 60);

  const randomPersonArray = [
    newRandomPersonHeniek,
    newRandomPersonJola,
    newRandomPersonZyzio,
    newRandomPersonMiecia,
    newRandomPersonWiesiek,
  ];

  let randomPersonIndeks = Math.floor(Math.random() * randomPersonArray.length);

  let randomlySelectedPerson = randomPersonArray[randomPersonIndeks];

  // return randomlySelectedPerson.imie; //zwracamy tylko imię z losowego obiektu
  return randomlySelectedPerson; //zwracamy pełny losowy obiekt
}

console.log(showRandomPerson());

console.log("");

// Do właściwości stworzonego obiektu można uzyskać dostep na dwa sposoby:

// notacja kropkowa ( dot notation )
// obj.name = 'Simon';
// var name = obj.name;

// oraz...

// Użycie poniższej metody zapobiega zastosowaniu niektórych mechanizmów JavaScript i procesów minifikacji. Może też być używany do ustawiania i pobierania własności z nazwami wykorzystującymi słowa zastrzeżone:

// obj.for = 'Simon'; // Syntax error, ponieważ 'for' jest zastrzeżone
// obj['for'] = 'Simon'; // kod działa

//===============

// Metoda toString w Tablicy

const fruitsArray = ["Banana", "Orange", "Apple", "Mango"];

const toStringFruitsArray = fruitsArray.toString();
// const toStringFruitsArray = fruitsArray.toLocaleString(); // Działanie jak wyżej

console.log(fruitsArray); //orginalna tablica

console.log(toStringFruitsArray); //nowa tablica stworzona z użyciem Metody toString

console.log("");

var newTodayDate = new Date();

console.log(newTodayDate + "<br />");
console.log(newTodayDate.toString() + "<br />");
console.log(newTodayDate.toLocaleString());

console.log("");
//===============

// Funkcje

function addArrayArguments() {
  // Zostaną tu dodane wszystkie argumenty czyli (1, 2, 3, 4, 5)
  let sum = 0;

  // console.log(arguments);

  for (var i = 0, j = arguments.length; i < j; i++) {
    sum += arguments[i];

    // console.log(arguments[i]);
  }

  console.log(sum / j); // wyliczamy średnią z sumy Tablicy

  return (newAddedArray = [i, i + j, sum, i + sum, i + j + sum]);

  // console.log(newAddedArray);
}

console.log(addArrayArguments(1, 2, 3, 4, 5)); // 15

console.log("");

//===============

// Sprawdzimy sobie Medianę

const arrayToCheckMedian = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function medianFunction(medianArguments) {
  if (medianArguments.length % 2 == 0) {
    return (
      (medianArguments[medianArguments.length / 2 - 1] +
        medianArguments[medianArguments.length / 2]) /
      2
    );
  } else {
    return medianArguments[Math.floor(medianArguments.length / 2)];
  }
}

console.log(medianFunction(arrayToCheckMedian));

console.log("");

//==============

// forEach

["dog", "cat", "hen"].forEach(function (currentValue, index, array) {
  document.querySelector(".box div").classList.add("my-style");

  document.querySelector(".my-style").style.textAlign = "center";

  document.querySelector(".my-style").style.fontWeight = "bold";

  document.querySelector(
    ".my-style"
  ).innerHTML += `${index}: ${currentValue} || `;
});

//=============

// for/of

const carsArray = ["BMW", "Volvo", "Mini"];
let oneCar;

for (oneCar of carsArray) {
  document.querySelector(".my-style").innerHTML += `${oneCar} || `;
}

//=============

// for/in

function forInFunction() {
  var person = { fname: "John", lname: "Doe", age: 25 };

  var textInformation = "";
  var xPerson;
  for (xPerson in person) {
    textInformation += person[xPerson] + " ";
  }
  document.querySelector(".person-info").innerHTML = textInformation;
}

forInFunction();

//============

const numbersReduce = [1, 2, 3, 4, 5];

const sumReduce = numbersReduce.reduce(
  (total, currentValue) => total + currentValue
);

console.log(sumReduce);

const sumSecondReduce = numbersReduce.reduce((total, currentValue) => {
  console.log("total", total);
  console.log("currentValue", currentValue);
  return total + currentValue;
}, 0);

console.log(sumSecondReduce);

console.log("");

//============

function addingArrayAndIndeksValues(addArray) {
  var newArrayIndeksAndNumbers = [];

  var sumAll = 0;

  for (let i = 0; addArray.length > i; i++) {
    sumAll += i + addArray[i];

    newArrayIndeksAndNumbers.push(i + addArray[i]);
  }
  console.log(newArrayIndeksAndNumbers);
  console.log(sumAll);
}

addingArrayAndIndeksValues(numbersReduce);

console.log("");

//===============

// Wykorzystanie metody apply()

// Z metodą apply() funkcja działa dobrze nawet przy operatorach reszty i rozproszenia. Przykład poniżej.

let newArrayBind = [3, 7, 15];

function avgFromArray(...args) {
  var sum = 0;
  for (let value of args) {
    sum += value;
  }
  return sum / args.length;
}

let newAverage = avgFromArray.apply(null, [1, 2, 3, 4, 5]);

console.log(newAverage);

//===

// Metoda call()

let newAverage1 = avgFromArray.call(null, 2, 4, 6, 8, 10);

console.log(newAverage1);

//===

// Metoda bind()

let newNumberFromBind = avgFromArray.bind();

console.log(newNumberFromBind(2, 3, 5, 10));

console.log("");

//=============

var aaNumber = 1;
var bbNumber = 2;

(function () {
  //---> samowywołująca się funkcja (od razu się wywołuje), uniemożliwia tworzenie się zmiennych w zasięgu globalnym. Taka funkcja może mieć także nazwę, ale jej nazwa nie będzie widziana po za ciałem funkcji. Tzn. nie da się jej wywołać później w dowolnym miejscu.
  var bbNumber = 3;
  aaNumber += bbNumber;
  console.log("Samowywołująca się funkcja!");
  console.log("");
})();

// function abNumbers() { //działa jak powyższa funkcja, po prostu tradycyjny (stary) sposób utworzenia i wywołania funkcji
//   var bbNumber = 3;
//   aaNumber += bbNumber;
// }

// abNumbers();//wywołujemy powyższą funkcję

console.log(aaNumber); // 4
console.log(bbNumber); // 2

console.log("");

//=============

var p = document.createElement("p");
p.textContent = "Once upon a time…";

console.log(p.nodeType);

console.log(document.querySelector(".person-info").nodeType);

console.log("");

//=============

document.querySelector(".person-info").appendChild(p);

//=============

// Słowo kluczowe new jest silnie związane z this

function Person(first, last) {
  this.first = first;
  this.last = last;
  this.fullName = function () {
    return this.first + " " + this.last;
  };
  this.fullNameReversed = function () {
    return this.last + ", " + this.first;
  };
}
var sPerson = new Person("Simon", "Willison"); // tworzymy zupełnie nowy obiekt, a następnie wywołuje określoną funkcję z this ustawionym na ten nowy obiekt
// Funkcje zaprojektowane do wywoływania przez new nazywane są funkcjami konstruktora.
// Powszechną praktyką jest nazywanie takich funkcji z dużej litery jako przypomnienie o użyciu ich new.

console.log(sPerson);

console.log(sPerson.fullName());

console.log(sPerson.fullNameReversed());

console.log("");

function FunctionWithPrototype(first, last) {
  this.first = first;
  this.last = last;
}
FunctionWithPrototype.prototype.fullNameWithPrototype = function () {
  return this.first + " " + this.last;
};
FunctionWithPrototype.prototype.fullNameReversedWithProt = function () {
  return this.last + ", " + this.first;
};

var sPrototypePerson = new FunctionWithPrototype("Rob", "Modd");

console.log(sPrototypePerson);

console.log(sPrototypePerson.fullNameWithPrototype());
console.log(sPrototypePerson.fullNameReversedWithProt());

console.log(new FunctionWithPrototype("Mark", "Hoose").fullNameWithPrototype());

console.log("");

//=============

function trivialNew(constructor, ...args) {
  var o = {}; // Create an object
  constructor.apply(o, args);
  return o;
}

var bill = trivialNew(Person, "William", "Orange"); // To właściwie to samo co poniżej:
// var bill = new Person('William', 'Orange'); //

console.log(bill);

bill = trivialNew(FunctionWithPrototype, "William", "Orange");

console.log(bill);

console.log("");

//============

// Inner functions (funkcje wewnętrzne) ---> callback

// Takie funkcje pozwalają używać zmiennych lokalnych widocznych wewnątrz funkcji co jest zazwyczaj lepsze niż używanie zmiennych o zasięgu globalnym.

function parentFunc() {
  var a = 1;

  function nestedFunc() {
    var b = 4; // parentFunc can't use this
    return a + b;
  }
  return nestedFunc(); // 5
}

console.log(parentFunc());

console.log("");

//============

// Domknięcia

function makeAdder(aClousers) {
  console.log(aClousers);
  return function (bClousers) {
    console.log(aClousers);
    console.log(bClousers);
    return console.log(aClousers + bClousers);
  };
}
var xClousers = makeAdder(5);
var yClousers = makeAdder(20);
xClousers(6); // 11
yClousers(7); // 27

// var zClousers = makeAdder(7);
// var zClousers;

// zClousers(5).makeAdder(5);

console.log("");

//============

var n = 10;

function counDown() {
  setInterval(function () {
    if (n == 10) {
      console.log(`${n}`);
      document.querySelector(".person-info").innerHTML = `${n}`;

      n -= 1;
    } else if (n >= 0) {
      console.log(` ${n}`);
      document.querySelector(".person-info").innerText = `\xa0 ${n}`; // \xa0 dodaje wolną przestrzeń przed tekstem. Jeżeli chcemy np. wstawić 5 razy wolną przestrzeń musimy zrobić coś takiego ---> `\xa0\xa0\xa0\xa0\xa0`

      n -= 1;
    }
  }, 1000);
}

counDown();

//=============
