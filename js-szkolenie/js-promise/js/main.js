console.log("JS - Promise");

console.log(``);

// Promise - obietnica

// Promise to obiekt reprezentujący pewne działanie, które może zakończyć się sukcesem, zwracając pożądaną wartość, lub niepowodzeniem, zwracając komunikat błędu.

// Kiedy obietnica zostanie zrealizowana (czyli będzie miała status resolved lub rejected ---> może być jeszcze trzeci scenariusz, sytuacja kiedy obietnica nigdy nie zostaje rozwiązana) mówimy, że została ona ustalona. Kiedy obietnica zostanie ustalona, już nigdy nie może zmienić swojej wartości.

//--------

const promiseEmpty = new Promise(function executor(resolve, reject) {}); //w konsoli w PromiseStatus zobaczymy 'pending', a PromiseValue 'undefined'
// Wartości te zmienią się w zależności od tego czy funkcja executor wykona callback resolve czy reject (Uwaga! Nazwy parametrów są dowolne, pierwszy parametr odpowiada za callback sukcesu, drugi porażki).

console.log(promiseEmpty);

console.log(``);

// Promise jak zbudować ---> tworzymy nowy obiekt Promise, a do konstruktora przekazujemy funkcję executor, która ma dwa callback'i resolve oraz reject

// Wzór (tylko przykładowy)
const promiseRegularFunction = new Promise(function executor(resolve, reject) {
  return resolve(`
  działa ---> I przykład!
  `);
});

console.log(promiseRegularFunction); //wyświetlamy promise

console.log(``);

// Taki sam wzór tylko z użyciem funkcji strzałkowej

const promiseArrow = new Promise((resolve, reject) =>
  reject(
    new Error(`Ooops!(P.S. Ale to nasz kod o błędzie specjalnie uruchomiony)`)
  )
);

// console.log(promiseArrow); //wyświetlamy sobie informacje o błędzie w konsoli

// Warto pamiętać, że callback 'resolve' przyjmuje tylko jeden argument (można przekazać obiekt lub tablicę).
// Podobnie callback 'reject' przyjmuje jeden argument, ale tutaj dobrą praktyką jest przekazanie jako argumentu (zamiast wartości) obiektu błędu.

// Metoda then
// Metoda ta pozwala odczytać właściwości obiektu Promise

promiseRegularFunction.then(
  (success) => console.log(success),
  (error) => console.log(error)
); //podajemy dwa argumenty pierwszy to funkcja callback jeżeli mamy sukces, drugi to callback na wypadek błędu (uwaga nazwa callback'ów jest nie ważna można nazwać np. (result, reason) albo (powodzenie, niepowodzenie))

// Metoda catch pozwala zrezygnować w metodzie then z drugiego (tego odpowiadającego za błąd) callback'u
promiseArrow
  .then((powodzenie) => console.log(powodzenie))
  .catch((niepowodzenie) => console.log(niepowodzenie)); //catch wyłapie wartość właściwości w obiekcie w razie, gdy obietnica zostanie odrzucona

//--------

const promise = new Promise(executor);

const promisedPresent = getPresent();

function getPresent() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Oto prezent!");
      document.querySelector(".image").id = "abc"; //dodajemy do div'a na stronie id="abc"
    }, 2500);
  });
}

promisedPresent
  .then((present) =>
    console.log(`
  "Super prezent!", ${present}
  
  `)
  )
  .catch((error) => console.log("Nie ma prezentu :(", error));

//----------

function executor(resolve, reject) {
  resolve(`
  działa!
  `);
  reject(`
  nie działa
  `); //reject raczej już nie łapie, bo tylko pierwszą rzecz łapie
}

var promiseNextExample = new Promise(executor);

promiseNextExample
  .then((success) => console.log(success))
  .catch((error) => console.log(error));

// console.log(promiseNextExample);

//----------

const promiseAnotherExampleWithSetTimeout = new Promise((udanie, nieudanie) => {
  setTimeout(
    () =>
      udanie(`
  Udało się
  `),
    1500
  );
});

promiseAnotherExampleWithSetTimeout
  .then((success) => console.log(success))
  .catch((error) => console.log(error));

//----------

// Przykład z YT ---> JavaScript Promise #2 - Promise Constructor

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener("load", (event) => resolve(img));
    img.addEventListener("error", (error) =>
      reject(new Error()(`Failed to load ${url}`))
    );
    img.src = url; //dodajemy do img ścieżkę src i przypisujemy jej wartość url czyli nasz adres strony poniżej
  });
}

// DO POWYŻSZEGO new Image() --->  // możemy stworzyć obrazek za pomocą np. konstruktora Image().

// const newImage = new Image(200, 300); //przy tworzeniu Image możemy podać jego rozmiary
// newImage.src = "obrazek_on.jpg" //podajemy jego src

// document.querySelector("body").appendChild(newImage);

loadImage("http://thecatapi.com/api/images/get?format=src&type=jpg&size=small")
  .then((img) => document.querySelector(".image").appendChild(img))
  .catch((error) => console.log(error));

//----------

// Ten sam przykład co wyżej tylko jeszcze dodałem setTimeout (aby zadziałał, należy zakomentować przykład powyżej)

// function loadImageAsync(url) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const img = new Image();
//       img.addEventListener("load", (event) => resolve(img));
//       img.addEventListener("error", (error) =>
//         reject(new Error()(`Failed to load ${url}`))
//       );
//       img.src = url; //dodajemy do img ścieżkę src i przypisujemy jej wartość url czyli nasz adres strony poniżej
//     }, 5000);
//   });
// }

// loadImageAsync(
//   "http://thecatapi.com/api/images/get?format=src&type=jpg&size=small"
// )
//   .then((img) => document.querySelector(".image").appendChild(img))
//   .catch((error) => console.log(error));

// console.log(``);

//----------

// CHAINING ---> to łączenie ze sobą kilku metod (np. then() poniżej)

// Wykorzystujemy chaining ---> aby połączyć ze sobą kilka obietnic (Promise)

// Łączenie ze sobą obietnic możliwe jest dzięki temu, że metoda (funckcja) then zwraca obietnicę

const chainingVariable = new Promise((resolve, reject) => {
  resolve(`
  ${5}
  `);
});

chainingVariable
  .then((result) => {
    console.log(result);
    return result * 2;
  })
  .then((result) => {
    console.log(`
  ${result}
  `);
    return result + 5;
  })
  .then((result) =>
    console.log(`
  ${result}
  `)
  )
  .then((result) => new Promise((resolve, reject) => resolve(25))) //Tutaj zwracamy kolejną obietnicę
  .then((result) =>
    console.log(`
  ${result}
  `)
  )
  .then((result) => dataError) //brak dataError więc wywali nam błąd w konsoli
  // .then((result) => Promise.reject(Error(`Oops!`)))//tutaj też tworzymy błąd
  .then((result) => console.log(result))
  .catch((reason) => console.log(reason))
  // METODA (funkcja) finally - ta funkcja zostanie wykonana za każdym razem, niezależnie od tego co stanie się wcześniej - może być przydatna np. do wyłączenia ikonki wczytywania
  .finally(() =>
    console.log(`
  All finished!
  `)
  );

// METODA FINALLY() ---> powyżej

//-----------

// Chaining Przykład

const movies = [{ id: 1, category_id: 1, title: "Alita: Battle Angel" }];

const categories = [{ id: 1, name: "Sci-fi" }];

//movie_id
function fetchMovie(id) {
  return new Promise((resolve, reject) => {
    const movie = movies.find((movie) => movie.id === id);
    movie ? resolve(movie) : reject(Error(`No movie was found`)); //operator warunkowy
  });
}

function populateCategory(movie) {
  return new Promise((resolve, reject) => {
    const category = categories.find(
      (category) => category.id === movie.category_id
    );
    if (category) {
      movie.category = category;
      resolve(movie);
    }
    reject(Error(`No category was found`));
  });
}

fetchMovie(1)
  .then((movie) => populateCategory(movie))
  .then((result) => console.log(result))
  .catch((reason) => console.log(reason));

//-----------

//    //Ćwiczenie 11 / Chaining

// Napisz dwie funkcje wykorzystujące Promise tak, aby można było wykorzystać chaining.
// Funkcja upperCaseAll przyjmuje tablicę wyrazów i zamienia wszystkie ich litery na
// wielkie. Funkcja alphabetize przyjmuje tablicę wyrazów i sortuje je alfabetycznie:
// var words = ['c', 'a', 'b'];
// upperCaseAll(words)
// .then(alphabetize)
// .then(console.log); → ['A', 'B', 'C']

var arrayPromise = ["c", "a", "b"];

function upperCaseAll(words) {
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].toUpperCase();
  }

  return Promise.resolve(words);
}

console.log(upperCaseAll(arrayPromise));

console.log(``);

function alphabetize(words) {
  var alphabetizedWords = words.sort();

  return Promise.resolve(alphabetizedWords);
}

upperCaseAll(arrayPromise).then(alphabetize).then(console.log); // === odpowiedź bez adresu linii w console.log(3) ["A", "B", "C"]
// .then((result) => console.log(result)); //to samo co wyżej tylko console.log jest numer linii, aby zadziałało należy zakomentować powyższy przykład

//-----------

const newPromiseVariable = Promise.resolve(`Wyświetlimy to w konsoli`);

console.log(newPromiseVariable); //Wyświetlimy w konsoli ---> 'Wyświetlimy to w konsoli'

console.log(``);

//---------

function burger(resolve, reject) {
  resolve(`
  BigMac
  `);
}

var ticket = new Promise(burger);

ticket
  .then(function (result) {
    console.log(result); //w konsoli zobaczymy 'BigMaC'
  })
  .catch((reason) => console.log(reason));

//---------

// STATYCZNE METODY KLASY PROMISE ---> (all(), race(), resolve(), reject())

// Ze względu, że są to metody statyczne, można je wysoływać bezpośrednio odwołując się do klasy Promise

// Np.

const promiseResolve = Promise.resolve(`Resolve`);

console.log(promiseResolve);

console.log(``);

//----------

// Poniżej dwa wyjątki kiedy nie otrzymamy obietnicy

const promiseResolveWithRejectPromise = Promise.resolve(
  Promise.reject(Error(`Oops!!!`))
); //UWAGA!!! w takim wypadku nie otrzymamy obietnicy, która jest rozwiązana, gdyż jeżeli do metody resolve przekażemy obiektnicę - zostanie ona zwrócona w orginale

console.log(promiseResolveWithRejectPromise);

//---------

// UWAGA!!! Podobnie jak powyżej nie otrzymamy obietnicy

const thenable = {
  //obiekt, który posiada metodę then odrzucającą obietnicę
  then: function (resolved, rejected) {
    rejected(`Thenable Oops!`);
  },
};

const promiseThenable = Promise.resolve(thenable); //efekt taki sam jak wyżej (w poprzednim przykładzie)

console.log(promiseThenable);

//---------

// Promise współpracuje z dowolnym „thenable”

// Thenable to po prostu zwykły obiekt, który ma funkcję then. Jakie są tego konsekwencje? Przede wszystkim: Bardzo łatwo zamienić dowolny obietnico-podobny obiekt na prawdziwy Promise/A+! Przykładowo, Promise z jQuery zamieniamy na prawdziwy Promise wywołując na nim po prostu Promise.resolve(…). Bum!

const thenableWork = {
  then(onResolved, onRejected) {
    //Metoda dla obiektu zdefiniowana w skrócony sposób
    //then: function(onResolved,onRejected) {} ---> to ten sam zapis co powyżej
    onResolved(`
    thenable ---> współpracuje z Promise
    `);
  },
};

Promise.resolve(thenableWork).then((val) => console.log(val));

// console.log(thenableWork.then);

//-------------

// W jakiej sytuacji chcemy bezpośrednio wykonywać metodę resolve
// Np.
//Funkcja pobierająca dane o użytkowniku
// Funkcja ta może odczytywać informacje z localStorage lub pobierać z Servera

// YT - JavaScript Promise #4 - Promise API

// Tylko przykład nie zadziała - brak danych
// function fetchUser(id) {
//   const user = localStorage.getItem(`user-${id}`);

//   return user
//     ? Promise.resolve(user)
//     : User.find((user) => {
//         localStorage.setItem(`user-${id}`, user);
//         return user;
//       });
// }

// fetchUser(id).then();

//---------

// Metoda reject() - zwraca odrzuconą obietnicę

//---------

// Metoda all() - jako parametr przyjmuje obiekt, po którym można iterować. Zwykle jest to tablica obietnic.

// W Metodzie all() wyniki obietnic zostaną zwrócone w takiej kolejności jakiej je przekazaliśmy

Promise.all([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 2500)),
  new Promise((resolve, reject) => setTimeout(() => resolve(2), 1500)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 500)),
])
  .then((responses) => {
    console.log(responses);
  })
  // jeżeli chociaż jedna z powyższych obietnic zostanie odrzucona wykona się tutaj metoda catch()

  .catch((error) => console.log(error));

console.log(``);

//----------

// Metoda race() - działa podobnie jak metoda all(), z tym, że zostanie zwrócony ten wynik obietnicy, która wykona się najszybciej

Promise.race([
  new Promise((resolve, reject) =>
    setTimeout(() => resolve("Race - najwolniej"), 2500)
  ),
  new Promise((resolve, reject) =>
    setTimeout(() => resolve("Race - jeszcze za wolno"), 1500)
  ),
  new Promise((resolve, reject) =>
    setTimeout(
      () =>
        resolve(
          "Race - Metoda ta zwraca wynik, który wykona się najszybciej (wynik zobaczymy w konsoli)"
        ),
      500
    )
  ),
]).then((responses) => {
  console.log(responses);
});

//---------

//typeofweb.com/kilka-faktow-na-temat-promise/

// Przykład z callback'iem

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Gotowe!"), 5000);
});

setTimeout(() => {
  myPromise.then((val) =>
    console.log(`
  Wczytuję, wczytuję i ${val}
  `)
  ); //Pod val podstawiony zostanie wynik z funkcji myPromise
}, 6000);

//---------

// Async/Await ---> dwa słowa kluczowe, które wykoszystujemy podczas pracy z obietnicami

// Warto pamiętać, że async/await zastępue generatory ---> YT JavaScript Generators - Jak działają generatory

// Async
// Słowo kluczowe async umieszczamy przed deklaracją funkcji ---> taki zapis oznacza jedną rzecz, za każdym razem funkcja zwróci obietnicę, więc możemy przy jej wywołaniu wykorzystać metodę then()

async function fooAsync() {
  return `
  Async
  `;
}

fooAsync().then((result) => console.log(result));

//---

// Powyższy zapis jest równoznaczny z poniższym

function fooPromise() {
  return Promise.resolve(`
  Async
  `);
}

fooPromise().then((result) => console.log(result));

//---------

// Await
//Dzięki await można od razu odczytać wartość obietnicy bez konieczności wykorzystania metody then() ---> oczywiście musimy wywołać funkcję fooAwait
// Słowo kluczowe await wymaga również słowa async przed funkcją

async function fooAwait() {
  const promise = await new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve(`
  Completed!
  `),
      1000
    );
  });
  console.log(promise); //słowo kluczowe await sprawia, że JS zatrzymuje się i czeka aż obietnica zostanie spełniona. Nie jest tu natomiast przekazywana sama obietnica tylko jej wartość ---> dlatego możemy ją odczytać
}

fooAwait();

// Await świeenie sprawdza się z metodą all(), którą opisywałem wyżej

//----------

//try…catch

// YT ---> JavaScript Promise #5 - Async / Await

//----------

// function loadImageAsync(url) {
//   return new Promise((resolve, reject) => {
//     const img = new Image();
//     img.addEventListener("load", (event) => resolve(img));
//     img.addEventListener("error", (error) =>
//       reject(new Error()(`Failed to load ${url}`))
//     );
//     img.src = url; //dodajemy do img ścieżkę src i przypisujemy jej wartość url czyli nasz adres strony poniżej
//   });
// }

// // DO POWYŻSZEGO new Image() --->  // możemy stworzyć obrazek za pomocą np. konstruktora Image().

// // const newImage = new Image(200, 300); //przy tworzeniu Image możemy podać jego rozmiary
// // newImage.src = "obrazek_on.jpg" //podajemy jego src

// // document.querySelector("body").appendChild(newImage);

// const url =
//   "http://tthecatapi.com/api/images/get?format=src&type=jpg&size=small";

// async function loadImages() {
//   try {
//     const image = await loadImageAsync(url);
//     document.body.appendChild(image);
//   } catch (error) {
//     (error) => console.log(Error(error));
//   }
// }

// loadImages();

//W powyższym przykładzie coś do końca dobrze nie działa w catch(error)

//-------------

promiseWithError = new Promise((resolve, reject) => {
  reject(new Error("To może być błąd!"));
});

Promise.resolve(1)
  .then((val) => {
    console.log(val);
    return val + 1;
  })
  .then((val) => promiseWithError)
  .then((val) => console.log(val)) // to się nie wykona gdyż błąd w `promiseWithError` przerywa ciąg wywołań
  .catch((error) => console.error(error));
//   .then((val) => console.log(val));

//-----------

Promise.resolve(1)
  .then((val) => {
    return Promise.resolve(val + 1).then((newVal) => {
      doSth(newVal); // funkcja nie istnieje, wyjatek!
    });
  })
  .catch((err) => {
    // tutaj zostaną złapane wszelkie błędy, które nie zostały złapane wcześniej
    // zarówno synchroniczne (throw) jak i asynchroniczne (Promise.reject itp.)
    console.log(err);
  });

//----------

// catch()

// wewnątrz catch również może zostać zwrócona wartość. Jeśli zwrócisz inny odrzucony Promise albo rzucisz wyjątek, to catch zwróci kolejny odrzucony Promise. Ale jeśli zwrócisz dowolną inną wartość, to catch zwróci Promise, który nie jest odrzucony. Oznacza to, że błąd został przez Ciebie obsłużony.

Promise.reject(new Error())
  .catch((err) => {
    console.log(err);
    return "jest ok"; // obsluguję blad
  }) //Tutaj błąd jest obsłużony, więc następnie wywoła się then
  .then((val) => console.log(val)); // 'jest ok'

//----

Promise.reject(new Error())
  .catch((err) => {
    console.log(err);
    return Promise.reject("jest ok"); // nie obsługuję błędu
  })
  .then((val) => console.log(val)) // nie wywoła się
  .catch((err) => console.log("tutaj jestem!")) // wywoła się, bo błąd nie był obsłuzony poprzednio
  .then((val) => console.log(val)); //w konsoli zobaczymy 'undefined'

//----

//  UWAGA!!! Bardzo ważne jest, aby zawsze zwracać coś wewnątrz then i catch. Najlepiej niech wejdzie Ci to w nawyk. Jeśli nie zwrócisz nic wewnątrz catch to automatycznie zwrócone zostaje undefined, a to oznacza, że błąd został obsłużony.

// Przykład:
Promise.reject(new Error())
  .catch((err) => {
    console.log(err); // ups! przypadkiem nic nie zwróciłem, błąd obsłuzony
  })
  .then((val) => console.log(val)); // wywoła się!
// Ostatni then wywoła się, gdyż wewnątrz catch przypadkiem niczego nie zwróciliśmy – czyli został zwrócony undefined i błąd został „obsłużony”.

//----------
