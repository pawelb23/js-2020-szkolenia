"use strict";

//Przykład funkcji callback()

function doItWhenReady() {
  console.log("Hello from callback!");
}

function process(callback) {
  if (typeof callback !== "function") {
    callback = false;
  }

  if (callback) {
    callback();
  }
}

process(doItWhenReady);

//>> DOM <<

var myButton = document.createElement("button");

document.body.prepend(myButton);

//var addClassToButton = document.createAttribute('class');
//myButton.setAttributeNode(addClassToButton);//dzięki dwóm powyższym linijkom możemy dodać klasę, lub też tak jak poniżej szybciej

myButton.classList.add("btn-primary"); //czyli tak, gdzie oprócz nazwy (czyli class) dodaje się także jej wartość (tutaj 'btn-primary')

myButton.setAttribute("disabled", "false"); //ustawiamy nazwę (disabled) i jej wartość (false), dokońca to tutaj nie zadziała odpowiednio, bo czy jest true czy false cały czas button jest wyłączony czyli disabled

//myButton.removeAttribute('disabled');//aby usunąć wyłączenie buttona, możemy np. usunąć Atrybut disabled

myButton.innerText = "Hello there! Click to enable button - Hej!!!";

var divToManipulation = document.querySelector("div");

// divToManipulation jest obiektem odwołującym się do elementu <div> o klasie ='foo bar'
divToManipulation.classList.remove("foo"); //usuwamy klasę foo
divToManipulation.classList.add("anotherclass"); //dodajemy klasę
//
//// jeśli ustawiona jest klasa -- visible usuwa ją, w przeciwnym wypadku dodaje
divToManipulation.classList.toggle("visible"); //czyli dodaje lub usuwa klasę
//
//// dodaj/usuń (add/remove) jest widoczne, w zależności od warunku testowego, i mniejsze od 10

var i = 50; // i przykładowo wynosi 50
//var i = 7;// i przykładowo wynosi 7

divToManipulation.classList.toggle("visible", i < 10); // w tym wypadku jeżeli i jest mniejsze od 10 (czyli true) to visible nie zniknie, jeżeli i jest większe od 10 (czyli false) --- visible zniknie

divToManipulation.classList.toggle("visible"); //usunie lub doda daną klasę

console.log("");

var searchingClass = divToManipulation.classList.contains("foo");

function checkClass(checkThisClass) {
  if (checkThisClass) {
    console.log("klasa istnieje");
  } else {
    console.log("klasa nie istnieje");
  }
}

checkClass(searchingClass);

// dodaj lub usuń złożone klasy
divToManipulation.classList.add("foo", "bar"); //zadziała tylko jeżeli obydwie klasy nie istnieją --- jeżeli istnieje tylko jedna z klas nie zadziała

divToManipulation.classList.remove("foo", "bar"); //zadziała tylko jeżeli obydwie klasy istnieją i można je usunąć - jeżeli istnieje tylko jedna z klas nie zadziała

console.log("");

console.log(divToManipulation.classList.item(1)); //zwraca klasę o wybranym indeksie

console.log("");

console.log(divToManipulation.classList[0]); //również zwraca klasę o wybranym indeksie

console.log("");

console.log(divToManipulation.className); //zwraca wartości klasy jako ciąg znaków, czyli po prostu wypisuje wszystkie wartości klasy

divToManipulation.classList.add("one-old-class"); //dodajemy kolejną wartość dla klasy

divToManipulation.classList.replace("one-old-class", "totally-new-class"); //zastępujemy starą klasę nową

console.log("");

var myButtonTwo = document.createElement("button");

myButtonTwo.classList.add("second-btn");

myButtonTwo.textContent = "Hej!!! Push to enable button - Hello there!";

var classFromDivWeNeed = document.querySelector("div.anotherclass"); //odnajdujemy <div.anotherclass>

document.body.insertBefore(myButtonTwo, classFromDivWeNeed);

var myButtonThree = document.createElement("button");

//document.getElementsByClassName('anotherclass')[0].before(myButtonThree);//Gdybyśmy chcieli wstawić jeszcze kolejny <Button> --- tutaj wstawiamy trzeci button przed <div.anotherclass>

console.log(document.getElementsByClassName("anotherclass")[0]); //Podglądamy <div.anotherclass> w konsoli

//---

var heading = document.createElement("h1");

heading.innerText = "My Document Fragment";

var text = document.createTextNode("This is fun."); //tworzy nowy węzeł tekstowy

//---

var headingTwo = document.createElement("h2");

headingTwo.innerText = "My Second Document Fragment";

var textTwo = document.createTextNode("More fun, than above."); //tworzy nowy węzeł tekstowy

// >>> DOCUMENT FRAGMENT <<<
//DocumentFragment umożliwia budowanie DOM bez naruszania bieżącego dokumentu.

// Pierwszy sposób tworzenia fragmentu
var fragment = new DocumentFragment();

// Drugi sposób tworzenia fragmentu
var fragmentTwo = document.createDocumentFragment();

//---

fragment.append(heading);

fragment.append(text);

document.body.querySelector("#div-to-add-fragment").append(fragment);

//---

fragmentTwo.append(headingTwo);

fragmentTwo.append(textTwo);

document.body.querySelector("#div-to-add-fragment-two").append(fragmentTwo);

//---

console.log("");

console.log(document.querySelector("script"));

console.log("");

//Events

//First example

function onClick() {
  console.log("Help!");
  console.log("");
}

//Second example

var helpButton = document.querySelector(".second-help-btn");

function onClickSecond() {
  console.log("Second Help!");
  console.log("");
}

helpButton.addEventListener("click", onClickSecond);

//Obsługa zdarzeń / Callback
// Funkcja ‘obsługująca’ zdarzenie to, tzw. callback
//function onClick() {
//alert('Help!');
//}

// Do callbacka zawsze przekazywany jest obiekt Event
//function onChange(event) {
//console.log(event.target);
//}

//-----

//Form

function onSubmit(e) {
  var textInInput = document.querySelector('[type="text"]');
  var submitInputBtn = document.querySelector('[type="submit"]');
  //    if (!e) var e = window.event;//do końca nie wiem do czego to może być przydatne

  e.preventDefault();
  console.log("W input wpisano: " + textInInput.value);
  console.log("Submit prevented!");
  textInInput.setAttribute("disabled", "true");
  submitInputBtn.setAttribute("disabled", "true");
  textInInput.style.cursor = "default";
  submitInputBtn.style.cursor = "default";
  console.log("Rodzaj zdarzenia --- " + e.type); //sprawdzamy zdarzenie
  console.log("");
}

document.querySelector("form").addEventListener("submit", onSubmit);

//---

//Sprawdzenie jakiego typu to zdarzenie
document.getElementById("link").addEventListener("click", function(e) {
  if (!e) var e = window.event; // dla IE
  console.log(e.type);
});

//====================

function runButtonHello() {
  document.querySelector(".btn-primary").removeAttribute("disabled", "false");
  document.querySelector(".btn-primary").style.backgroundColor =
    "rgba(235, 202, 62, 0.7)";
  document.querySelector(".btn-primary").style.cursor = "pointer";
  document.querySelector(".second-btn").style.backgroundColor = "blue";
  document.querySelector(".second-btn").setAttribute("disabled", "true");
  document.querySelector(".second-btn").style.cursor = "no-drop";
}

document.querySelector(".second-btn").addEventListener("click", runButtonHello);

function runSecondButton() {
  document.querySelector(".second-btn").removeAttribute("disabled", "true");
  document.querySelector(".second-btn").style.backgroundColor = "green";
  document.querySelector(".second-btn").style.cursor = "pointer";
  document.querySelector(".btn-primary").setAttribute("disabled", "false");
  document.querySelector(".btn-primary").style.backgroundColor = "#87afd1";
  document.querySelector(".btn-primary").style.cursor = "no-drop";
  //   console.log(this);//Wyświetli w konsoli .btn-primary
}

document
  .querySelector(".btn-primary")
  .addEventListener("click", runSecondButton);

//====================

//DOMContentLoaded

function runProgram() {
  console.info("Teraz można pracować z DOM");
  console.log("");
}

// readyState przyjmuje też wartość “interactive” lub “complete”
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", runProgram);
} else {
  doSomething();
}

//Żeby móc pobierać elementy ze strony, powinny być one już dostępne dla skryptu, czyli powinny być już wczytane przez przeglądarkę. Aby mieć pewność, że kod, który odwołuje się do elementów w kodzie HTML poczeka na ich wczytanie, powinniśmy użyć zdarzenia DOMContentLoaded. Wszystkie skrypty operujące na elementach DOM powinny korzystać z tego eventu.

//Przykład trochę prostszy z innego miejsca
document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM został wczytany");
  console.log("Tutaj dopiero wyłapujemy elementy");
  console.log("");
});
