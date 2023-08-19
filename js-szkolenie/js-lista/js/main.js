"use strict";

// var o = {
//     a: "o object",
//     method: function() {
//         return console.log(this.a);
//     },
// };

// o.method(); // === o

// fetch("https://example.com/endpoint").then(o.method);

//=============

let inputElem = `<div><input class="input-element" type="text" placeholder="Write Your Value"><button class="button-element">Button</button></div>`;

document.getElementById("content-one").innerHTML = inputElem;

document.querySelector(".button-element").addEventListener("click", valueInfo);

let arrayVariable;

var addingElement = [];

function valueInfo(e) {
    e.preventDefault();
    e.stopPropagation();

    console.log(addingElement.length);
    for (let i = 0; i <= addingElement.length; i++) {
        arrayVariable = `<h1 class="value-info value-text${i}">${
      document.querySelector(".input-element").value
    }</h1>`;
    }
    document.getElementById("content-two").innerHTML += arrayVariable;
    document.querySelector(".input-element").value = "";

    addingElement.push(arrayVariable);
    console.log(addingElement);
}