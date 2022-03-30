console.log(
  `IIFE(Immediately-invoked Function Expression) ---> czyli "Natychmiastowo wywołująca (samowywołująca) się funkcja"`
);

// Ciekawostka!!! kiedy przed czymś (zmienna, funkcja itp.) postawimy znak plus "+" (można też użyć minus "-"), to JavaScript stara się odczytać to jako liczbę ---> widać to na poniższym przykładzie:

// (P.S. Podobno można także użyć tu funkcji z wykrzyknikiem na początku (też powinno zadziałać)).

const testPlusFunction = +(function () {
  console.log(
    "Funkcja z plusem na początku sama się wywoła bo JS sprawdza czy jest to liczba (taka ciekawostka)!!!"
  );
})();

console.log(testPlusFunction);
console.log(typeof testPlusFunction);
console.log("");

//=============

(() => {
  console.log(
    `IIFE - natychmiastowo wywołująca (samowywołująca) się funkcja (z wykorzystaniem funkcji strzałkowej!!!`
  );
})();

console.log("");

// IIFE - natychmiastowo wywołująca (samowywołująca) się funkcja (z wykorzystaniem funkcji strzałkowej i użyciem danych (tutaj liczbowych)!!!

((...args) => {
  let sum = 0;

  for (let value of args) {
    sum += value;
  }

  console.log(sum);
})(15, 30, 45);

console.log("");

//==============
