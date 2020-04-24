console.log(`ES6(JS6) - domyślne wartości - szkolenie`);

console.log(``);

// Domyślne wartości
// Domyślne wartości to sposób na radzenie sobie z argumentami funkcji, elementami tablic lub polami obiektów, które nie zostały zdefiniowane. W tych przypadkach zostają im przypisane wybrane wartości domyślne.

// UWAGA!!! Wartości domyślne zadziałają tylko jeżeli będziemy mieli pierwotniewartość 'undefined'. Nie zadziałają w przypadku np. false, NaN, czy Null.

// Domyślne wartości / Przykłady
function greet(name = "Stranger") {
  return console.log("Hello, " + name + "!");
}
greet(); // 'Hello, Stranger!'
greet(undefined); // 'Hello, Stranger!'
greet(null); // 'Hello, null!'
greet(NaN); // 'Hello, NaN!'
greet("David"); // 'Hello, David!'

console.log(``);

// Domyślne wartości / Przykłady
// brakuje współrzędnej 'y'
const homeCoordinates = [0.123456, undefined];
const [x = 0, y = 0] = homeCoordinates;

console.log(y);

// brakuje współrzędnej 'x'
const officeCoordinates = { xTwo: undefined, yTwo: 0.987654 };
const { xTwo = 0, yTwo = 0 } = officeCoordinates;

console.log(xTwo);

console.log(``);

//----------

// W przeszłości, ogólną strategią na ustawianie domyślnych wartości było sprawdzanie parametrów w ciele funkcji – w sytuacji, w których były one równe undefined, przypisywano im konkretne wartości.Należało użyć czegoś takiego, jak w drugiej linijce, gdzie wartość b jest ustawiana na 1, jeśli funkcja pomnóż jest wywoływana tylko z jednym argumentem.
// Taki był stary zapis.

function pomnóż(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return console.log(a * b);
}

pomnóż(5, 2); // 10
pomnóż(5); // 5

console.log(``);

//----------

function funkMakeArray(x = 1, y) {
  return [x, y];
}

console.log(funkMakeArray()); // [1, undefined]
console.log(funkMakeArray(2)); // [2, undefined]

console.log(``);

//----------

const checkIt = { z: 7 };

function funkAdd([x, y] = [1, 2], { z: z } = { z: 3 }) {
  console.log(x);
  console.log(y);
  console.log(z);
  return x + y + z;
}

console.log(funkAdd()); //wszystkie wartości zostaną odczytane jako domyślne

console.log(``);

console.log(funkAdd([5, 6], checkIt)); //wszystkie wartości zostaną odczytane

console.log(``);

console.log(funkAdd(undefined, checkIt)); //'x' i 'y' zostaną odczytane jako wartości domyślne (tylko z jednym undefined zadziała prawidłowo), zaś 'z' `zostanie pobrana z obiektu

console.log(``);

console.log(funkAdd([5, 6])); //'x' i 'y' zostaną odczytane, zaś 'z' sostanie odczytana jako wartość domyślna

console.log(``);

//----------
