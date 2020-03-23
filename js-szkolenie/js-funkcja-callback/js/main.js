// import { yellow } from "color-name";

console.log(`JS Funkcja 'callback'`);

console.log(``);

// first-class object - czyli funkcja jako pełnoprawny obiekt. Oznacza to, że może być używana jak każdy inny obiekt. Funkcje mogą być przekazywane do innej funkcji jako argument, czy zwracane z funkcji tak jak inne wartości.

// Czym jest callback (funkcja wywołania zwrotnego)?
// Najprościej mówiąc jest to funkcja, która zostanie wykonana, gdy jakaś inna funkcja zakończy działanie.

// W JavaScripcie istnieją funkcje wyższego rzędu. Ponieważ są one obiektami, mogą przyjmować inne funkcje jako parametr oraz mogą być zwracane przez inne funkcje.

// Najczęściej funkcji wywołania zwrotnego używamy definiując je bezpośrednio przy wywołaniu funkcji nadrzędnej, np.

// Przykład 1. callback z funkcją wbudowaną

setTimeout(function() {
  //setTimeout (funkcja wbudowana) - jest tu przykładem funkcji wyższego rzędu, zaś w niej jako pierwszy parametr mamy inną funkcję, która to w tym przypadku jest funkcją typu callback
  console.log("Callback --- przykład 1");
}, 2000);

// setTimeout(myCallback, 1000);

//-----------------

// Jednakże nic nie stoi na przeszkodzie, by callbacka zdefiniować wcześniej i przekazać jako parametr do różnych funkcji, np.

// Przykład 2. callback z funkcją wbudowaną

function myCallbackTwo() {
  // Funkcja myCallbackTwo, którą poniżej przekazujemy do innej funkcji jako parametr (w naszym przypadku przekazujemy do funkcji wbudowanej - setInterval - jest to funkcja nadrzędna)
  console.log("Callback --- przykład 2");
}

setInterval(myCallbackTwo, 3000); //setInerval - funkcja nadrzędna, zaś myCallbackTwo - tutaj jest funkcją callback

//-----------------

// Przykład 3. callback - użycie w funkcjach stworzonych

function showResult(x, y) {
  // Funkcja showResult --- będzie callback'iem w funkcji poniżej

  return x + y;
}

function newFunctionToshowCallback(x, y, callbackFunctionExample) {
  console.log(
    `Wartość zmiennej x wynosi --- ${x}, zaś wartość zmiennej y wynosi --- ${y}.`
  );
  // console.log(``);
  return console.log(
    `Wynik dodawania zmiennych x i y to >>> ${callbackFunctionExample(
      x,
      y
    )} <<< czego dowiadujemy się z funkcji typu callback.`
  );
  //  ${callbackFunctionExample(x, y)}  --- Taka składnia pozwala nam zapisać wszystko bez konieczności użycia znaków plus, ---> poniżej starszy odpowiednik zapisu console.log.
  // return console.log(`Wynik dodawania zmiennych x i y to ` + callbackFunctionExample(x, y) + ` czego dowiadujemy się z funkcji typu callback.`);
}

newFunctionToshowCallback(10, 5, showResult);

console.log(``);

//----------------

// Przykład 4. callback - użycie z addEventListener

document
  .querySelector(`.callback-klik`)
  .addEventListener("click", clickFunction); //addEventListener to funkcja wyższego rzędu, zaś funkcja clickFunction jest tu naszym callbackiem

function clickFunction() {
  console.log(``);
  console.log(`Kliknięto przycisk!!!`);
  console.log(``);
  document.querySelector(
    `.callback-klik`
  ).style.backgroundColor = `rgba(255, 255, 0, 0.575)`;
}

//------------------

// Przykład 5. callback - z metodą wbudowaną

const arrayAge = [6, 10, 40, 4, 15, 20, 17];

console.log(
  arrayAge.sort(function(firstNumber, secondNumber) {
    // console.log(firstNumber + ` ` + secondNumber);
    return firstNumber - secondNumber; //UWAGA!!! jeżeli odejmiemy liczbę pierwszą od drugiej otrzymamy tablicę od najmniejszej liczby do największej, zaś jeżeli odejmiemy liczbę drugą od pierwszej otrzymamy liczby od największje do najmniejszej.
  })
); //Metoda sort jest tutaj funkcją wyższego rzędu zaś funkcja anonimowa, którą przekazujemy jako argument do metody sort jest naszym callback'iem

// Metodę sort() warto sprawdzić, bez funkcji callback (z zapisem pierwsza liczba - druga liczba), ta metoda działa inaczej - inaczej sortuje tablicę. Wystarczy odkomentować console.log poniżej, aby sprawdzić.
// console.log(arrayAge.sort());

console.log(``);

//-------------------

// Przykład 6. callback - inny przykład z metodą wbudowaną

const citiesArray = ["warszawa", "kraków", "poznań", "szczecin"];

// Co robi metoda map?
// Metoda map() ---> bierze każdy element tablicy i wykonuje na nim callback

const citiesToUpper = citiesArray.map(function(oneCity) {
  return oneCity.toUpperCase();
});

console.log(citiesToUpper);

console.log(``);

//Poniżej ta sama rzecz, tylko inaczej zapisana, aby sprawdzić wystarczy odkomentować

// function functionForCitiesToUpper(oneCityTwo) {

//     return oneCityTwo.toUpperCase();

// }

// const citiesToUpperTwo = citiesArray.map(functionForCitiesToUpper);

// console.log(citiesToUpperTwo);

// console.log(``);

//-------------------
