console.log(("Hello World").toUpperCase());

let newVariable = new Array();

console.log(newVariable);

newVariable.push("add");

newVariable[5] = "add on five";

console.log(newVariable[5]);

const nameOne = "Józek";
const lastName = "Juraski";

console.log(nameOne);
console.log(lastName);

const infoArray = ["Józek", "Juraski", "pracownik"];

console.log(infoArray[2]);

let foo = 3;
let bar = 'jo';
[bar, foo] = [foo, bar];
// wypisuje "foo = 2, bar = 1" do konsoli
console.log("foo = %s, bar = %d", foo, bar);
console.log(`foo = ${foo}, bar = ${bar}`);

let fooBar = (typeof foo === 'number') ? 'liczba' : 'nie liczba'

console.log(fooBar);


let a = 8;

let b = 10;

let area = (aRan, bRan) => { return aRan * bRan };

console.log(area(a, b));

const aName = function(name) {
    return `Hi ${name} !!!`
}

console.log(aName('Henio'));

let toFaren = (cel) => { return cel * 9 / 5 + 32 };

console.log(toFaren(25));

var code = '0123456789';

var charact = code.substring(0, 4);

console.log(charact);

const word = 'At vero eos et accusamus';

const commas = ' ...';

function shortQuote(examp, dots) {

    (console.log(examp));

    console.log(examp.length);

    let newWord = examp.substring(0, examp.length / 2).concat(dots).concat('"');

    console.log('"'.concat(newWord));
}

shortQuote(word, commas);

var apollo = /Apollo\s\D?\d?$/;

var newApollo = apollo.test('Apollo t3');

console.log(newApollo);

// let checking = /\^(d{1}|d{2}):\d{2}\s(AM|PM)/;
let checking = /^(\d{1}|\d{2}):\d{2}\s(AM|PM)/;

let abc = '12:30 PM';

let def = ' 1:25 AM';

let ghi = '10:05 am';

// let checkIfTime = (checking) => {
//     return (checking.test(abc));
// }

checking.test(abc);

console.log(checking.test(abc));
console.log(checking.test(def));
console.log(checking.test(ghi));

// console.log(checkIfTime('11:30 PM'));
// console.log(checkIfTime(abc));
let anothChanging = /\s?[cat]\s?/;

let sentNew = 'Cat catcat cat Cat cattt tcat cat';

console.log(anothChanging.test(sentNew));

let counter = 0;

let newArrayCount = sentNew.split(' ');

console.log(newArrayCount);

let varInfo = (textSentence) => {
    console.log(textSentence);
    // newArrayCount = textSentence.match('/\s?[cat]\s?');
    // console.log(newArrayCount);
    // // return newArrayCount.length;
    for (i = 0; textSentence.length > i; i++) {
        if (textSentence[i].match(/^(cat|Cat)$/)) {
            ++counter;
            console.log(textSentence[i]);
        } else {
            // console.log(textSentence[i]);
        }

    }
    return counter;

}

console.log(varInfo(newArrayCount));

let isAdult = function(age) {
    if (age >= 18) {
        console.log('oki');
    } else if (age < 18) {
        console.log('no!!!')
    } else {
        console.log('eeerrror!!!')
    }
}

isAdult('iii');

const ages = [32, 33, 16, 40];

// console.log(ages.filter(checkAdult));

// function checkAdult(age) {
//     return age;
// }

const agesFilter = ages.filter(el => el < 33);

console.log(agesFilter);

const agesMap = ages.map(el => el + 2);

console.log(agesMap);

const agesMapFilter = ages.map(el => el + 5).filter(el => el > 35);

console.log(agesMapFilter);

const array = ['J', 'U', 'S', 'T', 'J', 'O', 'I', 'N', '.', 'I', 'T'];

const newText = array.reduce((prev, next, index, arrayOrgin) => `${prev}${next}`, 'We are ');

console.log(newText);

const arrayToSkip = [10, 20, 30, 40, 50];

const arrayToString = ['ala', 'ma', 'kota', '!!!'];

const arraySkip = arrayToSkip.filter(el => el).slice(2);

console.log(arraySkip);

function skip(n, m, arrayXY) {
    let skipping = arrayXY.filter(el => el).slice(n, m);
    return skipping;
}

console.log(skip(2, arrayToSkip.length, arrayToSkip));
console.log(skip(0, arrayToString.length, arrayToString));

let arrXY = [1, 2, 3, 4, 5];

for (var i in arrXY) {
    console.log(arrXY[i] + i);
}

var j = 0;

while (j < 3) {
    console.log(arrXY[j]);
    ++j;
}

var i = 0;

while (arrayToString[i] !== '!!!') {
    console.log(`${arrayToString[i]} jest pod index'em nr - ${i}`);
    ++i;
}

function addAll(arrayToSkip) {
    return arrayToSkip.reduce((a, b) => a + b);
}

console.log(addAll(arrayToSkip));
console.log(addAll([2, 4, 4]));

var mathis = Math.pow(2, 2);

console.log(mathis);

console.log(Math.sqrt(99, 3));

let obj = {
    a: 1,
    b: 2,
    c: 3
};

function toPairs(obj) {
    //   for (var key in obj) {}
    var resultt = Object.entries(obj);
    // resultt.map(x => Object.assign(x));
    return resultt;
}


console.log(toPairs(obj));

var person = {
    name: "John",
    // greet: function() {
    //     console.log(`Hello, I'm ` + this.name);
    // }
    greet() { //to samo co powyżej zakomentowane (czyli tak też możemy wywoływać metodę/funkcję w obiekcie)
        console.log(`Hello, I'm ` + this.name);
    }
}

person.greet();

monster = {
    name: 'Zorg'
}


person.greet.call(monster);
// person.greet.apply(monster);//działa podobnie jak wyżej

function num() {
    return this;
}

var num = num.bind(5);

console.log(num());

var total = 20 + num();

console.log(total);

const objectNumbers = { a: 1, b: 2, c: 3 };

let propArray = [];

for (const property in objectNumbers) {
    //   console.log(`${property}: ${object[property]}`);

    propArray.push([property, objectNumbers[property]]);

}

console.log(propArray);

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 300);
});

promise1.then((value) => {
    console.log(value);
    // expected output: "foo"
});

console.log(promise1);
// expected output: [object Promise]

function burger(resolve, reject) {
    resolve('Big Mac');
    reject('error');
}

var ticket = new Promise(burger);

ticket.then(function(result) {
    console.log(result);
});

var words = ['b', 'd', 'a', 'c', 'e'];

var wordsS = [];

for (var i = 0; i < words.length; ++i) {

    wordsS.push(words[i].toUpperCase());
    wordsS.sort();
    console.log(words[i]);
}

console.log(wordsS);

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('working...');
        resolve('process finished!!!')
    }, 500)
}).then((response) => {
    console.log('load...');
    setTimeout(() => {
        console.log(response)
    }, 500)
})



let upperCaseAll = (paramDesign) => {
        let upperWords = [];
        // new Promise((resolve, reject) => {
        for (var i = 0; i < paramDesign.length; ++i) {
            upperWords.push((paramDesign[i]).toUpperCase());
        }
        console.log(upperWords);
        // })
        return Promise.resolve(upperWords);
    }
    // console.log(upperWords);

// upperCaseAll(words);

let alphabetize = (upperWords) => {
    upperWords.sort();
    // console.log(upperWords);
    return Promise.resolve(upperWords);
}

upperCaseAll(words)
    // .then((upperWords) => { console.log(upperWords); })
    .then(alphabetize)
    // .then(() => console.log(upperWords))
    // .then((upperWords) => {
    //     console.log(upperWords);
    // });
    .then(console.log);

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(function(res) {
//         return res.json();
//     })

// .then(function(users) {
//     console.log(users);
//     // console.log(users[0].name);
// })

// .catch(function(err) {
//     console.error(err);
// });

// console.log(fetch("https://jsonplaceholder.typicode.com/users"));

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
    // .then(response => console.log(response))
    .then((users) => { return users })
    .then((users) => {
        for (var i = 0; users.length > i; ++i) { //bez interacji nie zadziała prawidłowo

            if (i < 9) {
                console.log(' ' + (i + 1) + ' ' + users[i].name)
            } else {
                console.log(i + 1 + ' ' + users[i].name)

            }
        }
    })

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(function(res) {
//         return res.json();

//     })

// .then(function(posts) {
//     //    20 elementów --- od 0 do `19`

//     return posts.splice(0, 20);
// })

// .then(function(posts) {
//     for (var i = 0; i < posts.length; i++) {
//         console.log(i + 1 + " " + posts[i].title);
//     }
// });

var helpButton = document.querySelector('.help-btn');

let backColor = true;

function onClick(event) {
    event.preventDefault();
    console.log('Help!')
    if (backColor) {
        document.querySelector(
            ".help-btn").style.backgroundColor = 'gray';
        backColor = false;
    } else {
        document.querySelector(
            ".help-btn").style.backgroundColor = 'rgb(167, 84, 84)';
        backColor = true;
    }
}

helpButton.addEventListener('click', onClick);
// helpButton.addEventListener('click', function onClick() { console.log('help') });

$(function() {
    //alert('test');
    console.log('test JQuery!!!');
    // var helpButton = $('.help-btn');
    // helpButton.css({ color: 'green' });
});

let veryNewPromise = new Promise((resolve, reject) => {
    console.log($('div').data('lastValue'));
    console.log('Promise-resolve-działa!!!');
    return resolve('nie działa');
})

veryNewPromise.then((response) => {
    console.log('musi!!!');
    return response;
});

let isItTrueOrFalse = true;

function helloJQ(event) {
    event.preventDefault();
    console.log('Hello jQuery');
    if (isItTrueOrFalse) {
        $('div').attr('data-hidden', false); //zmieniamy wartość (także w HTML)
        $('div').data('hidden', true); //data zmienia wartość (tylko js nie w HTML)
        console.log($('div').data('hidden'));
        isItTrueOrFalse = false;
    } else {
        $('div').attr('data-hidden', true); //zmieniamy wartość (także w HTML)
        $('div').data('hidden', false); //data zmienia wartość (tylko js nie w HTML)
        console.log($('div').data('hidden'));
        isItTrueOrFalse = true;
    }
}

const jqueryButton = $('.jquery-btn');

jqueryButton.on('click', helloJQ);

//================

function great(info) {
    console.log(`Hello ${info}`);
}

const greatVarFun = function(info) {
    console.log(`Hello ${info}`);
}

const greatArrFun = (info) => {
    console.log(`Hello ${info}`);
}

const infoParam = 'everyone';

console.log('');

great(infoParam);

greatVarFun(infoParam);

greatArrFun(infoParam);

console.log('');

//==============

// Pętla "for in" vs "for of"

//==============

var today = new Date();

var yesterday = new Date();

var yestDat = yesterday.setDate(today.getDate() - 1);

// console.log(today.getDate() - 1);

console.log(yesterday); //przy takim zestawieniu tu i powyżej otrzymamy tutaj wczorajszą datę

//==============

let dateParams = [2020, 0, 1];
let date = new Date(...dateParams);

console.log(date); //tworzy obiekt daty ---> 1 stycznia 2020

//==============