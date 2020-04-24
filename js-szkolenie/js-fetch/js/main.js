console.log("JS - fetch");

console.log(``);

// Fetch (sprowadzić, wydobyć)

// Fetch to funkcja dostępna w przeglądarkach, która pozwala wykonywać zapytania HTTP. W przeciwieństwie do starszej alternatywy, XMLHttpRequest, fetch zwraca Promise.

// Fetch/JSON

// JavaScript Object Notation to format wymiany danych autorstwa Douglasa Crockforda, ustandaryzowany przez ECMA International w 2013 roku.

// {
//   "title" : "Ender's Game",
//   "pages" : 400,
//   "isNew" : false,
//   "tags" : ["computer", "fiction", "war"],
//   "reviews" : { "likes" 123 }
// }

// Fetch/ObiektJSON

// Obiekt JSON udostępnia dwie metody niezbędne do zmiany ciągu znaków na obiekt lub zamiany obiektu na ciąg znaków reprezentujący 'poprawny' JSON.

//Zwraca ciąg znaków "{"name" : "John", "age" "21", "active" : true}"

console.log(
  `JSON.stringify ---> ${JSON.stringify({
    name: "John",
    age: 21,
    active: true,
  })}`
);

console.log(``);

//----------

console.log(`Poniżej JSON.parse`);
//Zwraca obiekt { name: "John", age: 21, active: true }
console.log(JSON.parse('{"name" : "John", "age" : 21, "active" : true}'));

console.log(``);

//----------

// Fetch / Przykład:

fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (users) {
    console.log(users);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    console.log(``);
  });

//--------

// Ćwiczenie 12 / Integracja z API

// Napisz funkcję getPosts, która przy pomocy fetch wykonuje zapytanie HTTP pod adres "https://jsonplaceholder.typicode.com/posts", a następnie wypisuje wartość pola title pierwszych dwudziestu postów do konsoli.

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function (res) {
    console.log(res);
    return res.json();
  })
  // .then((response) => console.log(response[0].title))
  .then(function (getPosts) {
    //    20 elementów --- od 0 do `19`
    console.log(getPosts.splice(0, 20));
    return getPosts.splice(0, 20);
  })

  .then(function (gposts) {
    for (var i = 0; i < gposts.length; i++) {
      console.log(gposts[i].title);
    }
  })
  .then(() => console.log(``));

//---------

// Fetch API - nowy interfejs, a jak niektórzy piszą następca XMLHttpRequest, który podobnie do swego brata pozwala nawiązywać dynamiczne połączenia. Głównymi cechami odróżniającymi Fetch od starszego brata jest domyślna obsługa przez fetch obietnic, przez co praca z nim w wielu przypadkach jest przyjemniejsza.

// Podstawowa składnia fetch ma postać:

// fetch(url, [options]);

// Jeżeli pominiemy dodatkowe opcje, domyślnie będzie wykonywane połączenie typu GET, które będzie służyć tylko do pobrania danych. Po odpaleniu, fetch zwraca Promise, więc tak samo jak w tamtym rozdziale, możemy je obsłużyć za pomocą dostępnych metod - then(), all(), catch() itp.

fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
  console.log(response);
  console.log(``);
});

// Po zwróceniu odpowiedzi mamy dostęp do obiektu Response, który zawiera informacje o wykonanym requeście (prośba, żądanie):

// status 	status połączenia
// statusText 	status połączenia w formie tekstowej
// type 	typ połączenia (1)
// url 	adres na jaki się łączyliśmy
// body 	właściwe ciało odpowiedzi

fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
  console.log(response.status);
  console.log(response.statusText);
  console.log(response.type);
  console.log(response.url);
  console.log(response.body);
  console.log(``);
});

// Właściwa odpowiedź jest przetrzymywana pod właściwością body. W konsoli debugera odwołanie się do właściwości response.body wyświetli nam obiekt ReadableStream (readable stream - czytelny strumień/strumień możliwy do czytania).
// Aby zamienić go na odpowiedni format musimy zastosować odpowiednią metodę, która skonwertuje tą właściwość na dany format. W naszym przypadku oczekujemy formatu JSON, więc zastosujmy metodę response.json(). Dla innych typów danych trzeba by użyć innych metod:

//     response.text() – zwraca odpowiedź w formacie text,
//     response.json() – zwraca odpowiedź jako JSON,
//     response.formData() – zwraca odpowiedź jako FormData,
//     response.blob() – zwraca odpowiedź jako blob (dane binarne z tytułem),
//     response.arrayBuffer() - zwraca odpowiedź jako ArrayBuffer

// Użycie tych metod także zwraca obietnicę, więc jak w poprzednim rozdziale możemy kontynuować naszą pracę za pomocą kolejnego then():

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    console.log(``);
  });

//-------

// Jeżeli chcemy ustawić jakiś nagłówek wysyłając dane, powinniśmy ustawić je w dodatkowych opcjach dla fetch, które podajemy jako obiekt:

// const url = "https://jsonplaceholder.typicode.com/users";
// fetch(url, {
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// W przeciwieństwie do XMLHttpRequest nagłówki takie możemy ustawić tak jak powyżej - ręcznie. Możemy też skorzystać z interfejsu Headers(), który udostępnia nam dodatkowe metody do manipulacji pojedynczymi nagłówkami:

// append(key, value)   Dodaje nową wartość o danym kluczu do zbioru nagłówków
// delete(key)          Usuwa wartość o danym kluczu
// entries() 	          Zwraca iterator, który umożliwia zrobienie pętli po   wszystkich parach klucz/wartość
// get(key) 	          Zwraca pierwszy nagłówek o danym kluczu
// getAll(key) 	        Zwraca tablicę wszystkich nagłówki o danym kluczu
// has(key) 	          Sprawdza czy w zbiorze istnieje wartość o danym kluczu
// set(key) 	          Ustawia nową wartość dla danego klucza
// keys() 	            Zwraca listę kluczy z danego FormData
// values() 	          Zwraca listę wartości z danego FormData

// const ourHeaders = new Headers();
// ourHeaders.append("Content-Type", "text/plain");
// ourHeaders.append("X-Auth", "123");
// ourHeaders.get("Content-Type"); //"text/plain"

// fetch(url, {
//   method: "post",
//   headers: ourHeaders,
//   body: JSON.stringify(ob),
// })
//   .then((res) => res.json())
//   .then((res) => {
//     console.log("Dodałem użytkownika:");
//     console.log(res);
//   });

// Możemy też skorzystać z bardziej skróconego zapisu:

// fetch(url, {
//   method: "post",
//   headers: new Headers(["Content-Type": "text/plain", "X-Auth": "123"]),
//   body: JSON.stringify(ob),
// })
//   .then((res) => res.json())
//   .then((res) => {
//     console.log("Dodałem użytkownika:");
//     console.log(res);
//   });

//     Nie wszystkie nagłówki będziemy mogli ustawić w ten sposób. W przeciwieństwie jednak do XMLHttpRequest powyższą metodą możemy usuwać dodane przez nas nagłówki.

// Do nagłówków, które przyszły wraz z odpowiedzią (response headers) mamy dostęp przez właściwość response.headers:

fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
  console.log(response.headers.get("Content-Type")); //application/json; charset=utf-8

  for (let [key, value] of response.headers) {
    console.log(`${key} = ${value}`);
  }
});

//----------

// Żeby wysłać dane musimy je ustawić we właściwości body dodatkowych opcji fetch.

// Działanie jest tutaj podobne jak w przypadku wysyłania danych za pomocą XMLHttpRequest.

// Ponownie format danych zależny jest od metody kodowania jaką wybierzemy. Jeżeli przy wysyłce nie ustawimy żadnego nagłówka, nasze dane musimy zakodować w postaci url:

// fetch(url, {
//   method: "post",
//   body: uriEncode("name=Marcin&surname=Nowak"),
// })
//   .then((res) => res.json())
//   .then((res) => {
//     console.log("Dodałem użytkownika:");
//     console.log(res);
//   });

// Ponownie tez jak w przypadku XMLHttpRequest możemy też skorzystać z FormData, która wysyła dane z nagłówkiem multipart/form-data:

// const formData = new FormData();
// formData.append("name", nameVal);
// formData.append("surname", surnameVal);

// fetch(url, {
//   method: "post",
//   body: formData,
// })
//   .then((res) => res.json())
//   .then((res) => {
//     console.log("Dodałem użytkownika:");
//     console.log(res);
//   });

// Jeżeli chcemy wysłać dane jako JSON, musimy ustawić odpowiedni nagłówek i zakodować dane za pomocą JSON.stringify():

// const ob = {
//   name: "Piotrek",
//   age: 10,
//   pet: {
//     type: "ultra dog",
//     speed: 1000,
//     power: 9001,
//   },
// };

// fetch(url, {
//   method: "post",
//   headers: {
//     "Content-Type": "application/json", //lub używając powyższej opisanego Headers()
//   },
//   body: JSON.stringify(ob),
// })
//   .then((res) => res.json())
//   .then((res) => {
//     console.log("Dodałem użytkownika:");
//     console.log(res);
//   });

//Sprawdźmy to w praktyce. Po wejściu na stronę https://jsonplaceholder.typicode.com/posts, widzimy, że każdy post składa się z id, title, userId i body. ID jest automatycznie zwiększane, więc by dodać nowego użytkownika musimy wysłać tylko pozostałe właściwości:

const formData = new FormData();
formData.append("title", "Przykładowy tytuł");
formData.append("body", "Przykładowa treść wpisu najlepszej jakości");
formData.append("userId", 1);

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "post",
  body: formData,
})
  .then((res) => res.json())
  .then((res) => {
    console.log(``);
    console.log("Dodałem użytkownika:");
    console.log(res);
    console.log(``);
  });

// Api do którego się łączymy nie zapisuje realnie użytkowników, a tylko symuluje. W odpowiedzi dostaliśmy użytkownika o id:101, co oznacza, że nasz użytkownik został dodany do bazy (wcześniej było ich 100).

// Spróbujmy połączyć się na błędny adres:

fetch("https://jsonplaceholder.typicode.com/kaszanka")
  .then((resp) => {
    console.log("Odpowiedź:");
    console.dir(resp);
  })
  .catch((error) => console.log("Błąd: ", error))
  .then(() => console.log(``));

// Teoretycznie wystąpił błąd, więc powinien się odpalić catch. Nic takiego jednak się nie stało, bo w konsoli debuggera otrzymaliśmy odpowiedź prawie taką samą jak przy naszym pierwszym połączeniu. Różnice są w niektórych właściwościach:

// Jak widzimy, status zmienił się na 404, statusText na "Not Found", a właściwość ok zmieniła się na false.

// Wynika to z tego, że Promise zwracany przez Fetch nie zwraca reject gdy status połączenia jest niewłaściwy (404, 500 itp).

// Aby obsłużyć błędne zapytania, musimy w then() obsłużyć więc powyższe właściwości:

fetch("https://jsonplaceholder.typicode.com/kaszanka")
  .then((response) => {
    if (response.ok) {
      return resp.json();
    } else {
      throw new Error("Wystąpił błąd połączenia!");
    }
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => console.dir("Błąd: ", error))
  .then(() => console.log(``));

// Żeby jeszcze dokładniej poinformować użytkownika o wynikłym błędzie, możemy skorzystać z Promise, który po zwróceniu reject przeskoczy do catch:

fetch("https://jsonplaceholder.typicode.com/kaszanka")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(response);
    }
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    if (error.status === 404) {
      console.log("Błąd: żądany adres nie istnieje");
    }
  })
  .then(() => console.log(``));

//-------

// Fetch sam w sobie zwraca Promise, stąd w bardzo prosty sposób możemy używać przy nim wszystkich metod takich jak then() i catch(). W przypadku XMLHttpRequest aby używać obiednic, musieliśmy cały obiekt obudować w Promise:

const loadDataExample = function (name) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => resolve(xhr.response));
    xhr.addEventListener("error", () => reject(xhr.statusText));
    xhr.open("GET", `https://restcountries.eu/rest/v2/name/${name}`, true);
    xhr.send();
  });
};

loadDataExample().then((response) => {
  {
    console.log(``);
    console.log(response);
    console.log(``);
  }
});

// Dzięki temu, że promise zwraca promise, nasz kod mocno się uprości:

const loadDataAnotherExample = function (name) {
  return fetch(`https://restcountries.eu/rest/v2/name/${name}`);
};

loadDataAnotherExample().then((response) => {
  {
    console.log(``);
    console.log(response);
    console.log(``);
  }
});

//-------------

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((json) => {
    console.log(``);
    console.log(json);
    console.log(``);
  });

//------------

const data = {
  title: "Test title",
  body: "Test body",
  userId: 42,
};

const options = {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json",
  },
};

fetch("https://jsonplaceholder.typicode.com/posts", options)
  .then((response) => response.json())
  // .then(() => {console.log(``); return response.json()})
  .then((json) => {
    console.log(``);
    return json;
  })
  .then((json) => console.log(json));

//---------

async function fetchUsers(url) {
  const response = await fetch(url);
  const json = await response.json();
  const listOfusernames = json.map((user) => user.username);

  console.log(``);
  console.log(listOfusernames);
  console.log(``);
}

fetchUsers("https://jsonplaceholder.typicode.com/users");

//---------
