console.log(`JS - Promise (kursjs.pl)`);

console.log(``);

// http://kursjs.pl/kurs/ajax/promise.php

//---------

// Co gdybyśmy chcieli, by nasza funkcja random() była bardzo uniwersalna i mogła wypisywać, a w zasadzie wykonywać dowolną czynność z wylosowaną liczbą? Właśnie tutaj przychodzą nam z pomocą funkcje zwrotne. Skoro możemy do funkcji przekazywać dowolną wartość, to także i inne funkcje, które następnie wywołujemy:

function random(min, max, cb) {
  const nr = Math.floor(Math.random() * (max - min + 1) + min);
  cb(nr);
}

random(10, 20, function (res) {
  console.log(`Losowa liczba to ${res}`);
});

random(10, 20, function (abc) {
  for (let i = 0; i <= abc; i++) {
    console.log(i);
  }
  console.log(`Losowa liczba tutaj to ${abc}`);
});

console.log(``);

//----------

// PROMISE

// Obiekty typu Promise (obietnice) - dzięki nim możemy wykonać jakiś kod, a następnie odpowiednio zareagować na jego wykonanie. Coś jak w zdaniu:

// "Gdy tylko dostanę wypłatę, zabiorę cię do kina"

// Praca z obietnicami w zasadzie zawsze składa się z 2 etapów. Po pierwsze tworzymy obiekt Promise, w którym wykonujemy jakieś asynchroniczne operacje i zwracamy za pomocą jednej z dwóch funkcji.Po drugie reagujemy na zwrócone przez ten obiekt dane - konsumujemy je.

// I Etap
const newPromise = new Promise(function (resolve, reject) {
  if (1) {
    resolve("Wszystko ok 😁");
  } else {
    reject("Nie jest ok 😥");
  }
});

// II Etap
newPromise
  .then((success) => {
    console.log(`
    ${success}
    `);
    return success;
  })
  .then((success) =>
    console.log(`
  Tu też 😁 ${success}!
  `)
  )
  .catch((error) => console.log(error));

//---------

// Po rozwiązaniu (zakończeniu) Promise możemy zareagować na jego wynik. Służą do tego dodatkowe metody. Pierwszą z tych metod jest then().

// then()

// Pozwala ona reagować zarówno na pozytywne rozwiązanie obietnicy, negatywne jak i oba na raz:

// const load = new Promise((resolve, reject) => {
//   const xhr = new XMLHttpRequest();
//   xhr.addEventListener("load", () => resolve(xhr.response));
//   xhr.open("GET", `https://jsonplaceholder.typicode.com/posts`, true);
//   xhr.send();
// });

// load.then((result) => {
//   //Promise zakończyło się pozytywnie
//   console.log(result);
// });

// console.log(``);

//----------

// Prawdopodobnie w większości przypadków będziesz chciał tworzyć funkcje wczytujące, które będą przyjmować jakieś parametry, a w odpowiedzi będą zwracać obietnice:

const loadCountry = function (name) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => resolve(xhr.responseText));
    xhr.addEventListener("error", () => reject(new Error(xhr.statusText)));
    xhr.open("GET", `https://restcountries.eu/rest/v2/name/${name}`, true);
    xhr.send();
  });
};

loadCountry("Polska").then((result) => console.log(result));

//---------

// catch()

// Promise może zwracać odpowiedź pozytywną (resolve) lub negatywną (reject). Do reakcji na negatywną odpowiedź możemy albo użyć tak jak powyżej drugiego parametru funkcji then(), albo metody catch() (stosowane częściej). Patrząc po filmach na youtube metoda ta jest stosowana nawet częściej niż pokazana powyżej.

const loadData = function (name) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const responseText = "Hej";
    xhr.addEventListener("load", () => resolve(xhr.responseText));
    xhr.addEventListener("error", () => reject(new Error(xhr.statusText)));
    xhr.open("GET", `https://arestcountries.eu/rest/v2/name/${name}`, true);
    xhr.send();
  });
};

//lub
// loadData().then(
//   (result) => {
//     console.log(result);
//   },
//   (error) => console.error(error)
// );

//lub
loadData()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
    // console.log(`Oj! Coś nie pykło!`);
  });

//---------

// all()

// Podobnych funkcji asynchronicznych jak powyższa loadData() może być w naszym kodzie więcej. Bardzo często nasze czynności chcielibyśmy zacząć wykonywać dopiero po zakończeniu wszystkich asynchronicznych operacji (np. pobrania danych z wszystkich źródeł). Aby poczekać na zakończenie wszystkich obietnic użyjemy metody Promise.all() do której przekażemy tablicę zawierającą nasze promisy:

function checkData1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("OK1");
    }, 2500);
  });
}

function checkData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("OK2");
    }, 1000);
  });
}

const checkData3 = () => {
  return new Promise((resolve, reject) => resolve(`OK3`));
};

Promise.all([checkData1(), checkData2(), checkData3()])
  .then((resp) => {
    console.log(resp); //["OK1", "OK2", "OK3"]
    console.log(resp[0]); //OK1
    console.log(resp[1]); //OK2
  })
  .then(() => console.log(``));

// Innym ciekawym zastosowaniem Promise.all() jest wykorzystanie go z map.
// W poniższym przykładzie map zwraca nam nową tablicę z funkcjami getUserData, które zwracają obietnice. Pasuje więc idealnie:

const usersId = [1, 2, 3, 4, 5, 6];

function getUserData(el) {
  //fetch zwraca nam Promise
  return fetch(`https://jsonplaceholder.typicode.com/users/${el}`).then((res) =>
    res.json()
  );
}

Promise.all(usersId.map(getUserData))
  .then((res) => {
    console.log(res);
    return res;
  })
  .then((res) => {
    for (let i = 0; i < usersId.length; i++) {
      console.log(res[i].name); //dostaliśmy się do wszystkich name (mój sposób)
    }
  })
  .then(() => console.log(``));

//-----------

// Jeżeli powyższa metoda Promise.all() czekała na zakończenie wszystkich obietnic, tak metoda race() zwróci pierwszą zakończoną obietnicę:

function checkDataRace1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("OKRace1");
    }, 2000);
  });
}

function checkDataRace2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("OKRace2"); //wykona się to bo jest szybciej
    }, 1000);
  });
}

Promise.race([checkDataRace1(), checkDataRace2()])
  .then((resp) => {
    console.log(resp);
  }) //OK2
  .then(() => console.log(``));

//---------

// Jeżeli interesowałeś się rozdziałem związanym z AJAX w jQuery, pewnie pamiętasz funkcja .done(), .fail() i .always().
// I tak funkcja done() odpalana jest po pozytywnym zakończeniu połączenia, metoda fail() odpalana jest w momencie błędu, a metoda always() odpalana jest po zakończeniu połączenia - nieważne czy zakończyło się pozytywnie czy negatywnie.

// Porównując to do powyższych kodów, done() to taki nasz then(), fail() to catch(), ale gdzie podział się always()?
// W wersji ECMAScript 2018 wprowadzono nową funkcję finally(), która jest odpowiednikiem właśnie funkcji always() w jQuerowym Ajax, co oznacza, że odpalana jest po zakończeniu Promise, bez względu czy zakończyło się powodzeniem czy nie.

// btnLoadMore.classList.add("loading"); //pokazujemy loading
// btnLoadMore.disabled = true; //i wyłączamy button

// fetch("....")
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((err) => alert(err))
//   .finally(() => {
//     btnLoadMore.classList.remove("loading");
//     btnLoadMore.disabled = false;
//   });

//---------

// Jeżeli dana funkcja zwróci nam nową obietnicę, możemy na niej wykonać jedną z powyższych metod czyli then, catch itp.

// Rozważmy powyższy przykład. Każda z funkcji zwraca nowy Promise, więc możemy na niej wykonać then(). Jeżeli w takim then() znowu zwrócimy Promise, możemy znowu wykonać kolejne then().

function checkNewData1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("OK1-Chaining"), 2000);
  });
}

function checkNewData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("OK2-Chaining"), 2000);
  });
}

function checkNewData3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("OK3-Chaining"), 2000);
  });
}

checkNewData1()
  .then((res) => {
    checkNewData2();
    // console.log(res);
  })
  .then((res) => checkNewData3())
  .then((resp) => console.log(resp))
  .then(() => console.log(``)); //OK3

//---------

// Co ciekawe samo then() zwraca nam obietnicę, więc możemy je łączyć w łańcuchy bez potrzeby tworzenia specjalnych funkcji jak powyżej:

new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve(10);
  }, 2000)
)
  .then((num) => {
    console.log("first then: ", num);
    return num * 2;
  })
  .then((num) => {
    console.log("second then: ", num);
    return num * 2;
  })
  .then((num) => {
    console.log("last then: ", num);
  })
  .then(() => console.log(``));

console.log(``);

//----------

// Jeżeli któraś z powyższych funkcji then() zwróci normalną wartość (string, numer, boolean itp), zostanie ona potraktowana jako resolve tej funkcji.

// Jeżeli jednak któraś z tych funkcji wyrzuci taką wartość za pomocą throw, wtedy zostanie to potraktowane jako reject:

new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve(10);
  }, 2000)
)
  .then((num) => {
    console.log("first then: ", num);
    return num * 2;
  })
  .then((num) => {
    console.log("second then: ", num);
    throw num * 2;
  })
  .then((num) => {
    //to się nie wykona, bo powyżej został zwrócony reject
    console.log("last then: ", num);
  })
  .catch((error) => {
    //to się wykona bo reagujemy na reject
    console.warn("Błąd", error);
  })
  .then(() => console.log(``));

//---------

// Powyższe łączenie then() będziesz często stosował przy np. ściąganiu danych za pomocą fetch, które samo w sobie zwraca obietnicę:

// fetch("....")
//   .then((res) => res.json())
//   .then((res) => {
//     console.log(res);
//   });

//---------

// Przy zwracaniu obietnic, możemy pisać kod tak jak powyżej, ale także skorzystać z 2 metod, które zwracają rozwiązanie lub odmowę obietnicy, czyli Promise.resolve() i Promise.reject().

Promise.resolve("oki!!!").then((res) => {
  console.log(`
  ${res}
  `); //ok
});

// W przypadku Promise.resolve(), jeżeli zwracana jest zwykła wartość, zostanie ona zwrócona. Jeżeli w nawiasach podamy wyrażenie będące inną obietnicą, możemy je obsłużyć za pomocą then.

const getPosts = function () {
  return fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) =>
    res.json()
  );
};

Promise.resolve(getPosts())
  .then((res) => {
    console.log(res);
  })
  .then(() => console.log(``));

//---------
