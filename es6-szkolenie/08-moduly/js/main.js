console.log(`ES6(JS6) - Moduły - szkolenie`);

// Moduły w JavaScript - ECMAScript 2015 (ES6) --- YT

// JavaScript Modules with Import/Export Syntax (ES6) - JavaScript Tutorial  --- YT

console.log(``);

// Moduły
// JavaScript już od dawna wykorzystywał moduły. Były implementowane przez zewnętrzne biblioteki, np. CommonJS czy RequireJS, a nie wbudowane w język. Pierwsza rodzima specyfikacja modułów pojawiła się wraz z EcmaScript 2015. Moduły są powiązane z plikami — jeden plik to jeden moduł i vice versa.

// Moduły / Przykłady
/**
 * other.js
 */
// export const secretCode = "1280347856120134";
// export function randomizeNumber() {
//   return Math.random();
// }

//---------------

/**
 * main.js
 */
import { secretCode, randomizeNumber } from "./other";
// Wypisuje '1280347856120134' do konsoli
console.log(secretCode);
let luckyNumber = randomizeNumber();

console.log(luckyNumber);
