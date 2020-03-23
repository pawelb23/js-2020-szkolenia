"use strict";

import "../css/style";

import { sum } from "./sum";

import { generateSecret } from "./secret.js.js"; //pojedyńcze funkcje

import * as allFile from "./secret.js"; //wszystko importujemy --- nazwa po * as (tutaj allFile) jest nieistotna, ważne, abyśmy później wywołując jakieś dane ze wskazengo pliku posługiwali się tą właśnie nazwą i po kropce szukną daną ---> np. allFile.PINumber

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

appDiv.innerHTML = generateSecret();

const appDivTwo = document.getElementById("appTwo");
appDivTwo.innerHTML = allFile.PINumber;

// appDiv.innerHTML = `<h1>`allFile.PI`<h1>`;

// appDiv.innerHTML = PI();

console.log("Hello World!");

console.log(allFile.PINumber);

console.log(allFile.generateSecret());

document.querySelector("div.sum-result").innerText = sum(2, 3);

console.log(sum(2, 3));

//---------------

//CSS

//https://webpack.js.org/loaders/css-loader/

//Moduły

//https://stackblitz.com/edit/js-mzw5rs?file=index.js

//http://webnotatnik.pl/webpack-instalacja/

//http://kursjs.pl/kurs/es6/moduly.php

//http://kursjs.pl/kurs/es6/webpack.php

//https://www.youtube.com/watch?v=cRHQNNcYf6s

//Moduły w JavaScript - ECMAScript 2015 (ES6)
//https://www.youtube.com/watch?v=rHE_lOv2ug0

//JavaScript Modules with Import/Export Syntax (ES6) - JavaScript Tutorial
//https://www.youtube.com/watch?v=s9kNndJLOjg
