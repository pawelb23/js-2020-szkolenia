console.log(`JS - wolne testy (ćwiczenia)`);

console.log(``);

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

// console.log($("section div:empty").length);//tak np. możemy sprawdzić ilość pustych div'ów w section

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
