"use strict";

//funkcja window.onload
//window.onload = function () {
//
//    console.log('Strona została wczytana!');
//
//}

//Poniżej dokładnie ten sam kod, napisany z wykorzystaniem biblioteki jQuery.
//$(document).ready(function () {
//
//    console.log('Strona została wczytana!');
//
//});

//Okazuje się, że ten kod można jeszcze bardziej skrócić (też przy pomocy jQuery).
$(function () {
  console.log("Biblioteka jQuery została wczytana!");
  console.log("");
});

console.log($(this));

console.log("");

console.log($("#test-id"));

console.log("");

//$('#test-id').css({'backgroundColor': 'green'}).hide(10000).show(5000);//można tak

//==================

//Cache’owanie elementów
//Cache’owanie to popularna technika programistyczna polegająca na
//zapisywaniu wyszukanych elementów w zmiennych.
//➔ Jeżeli korzystasz z elementu więcej niż raz, zapisz go w zmiennej.
//➔ Jeżeli w międzyczasie w DOM zajdą jakieś zmiany, np. pod wyszukany
//element zostanie dodany inny, będziesz musiał ponownie go wyszukać,
//aby uzyskać dostęp do nowo dodanego elementu.

//Przykład
//// Zapisz referencję do wyszukanego elementu w zmiennej
//var addressForm = $(‘.address’);
//// Wyszukaj element select w formularzu z klasą address
//addressForm.find(‘select’);

//OBIEKT JQUERY ZWRÓCONY PO WYWOŁANIU FUNKCJI DOLARA ZAWIERA SZEREG METOD:

//Metody służące do przechodznie po elementach obiektu

//    .next() - zwróci następny element,
//    .prev() - zwróci poprzedni element,
//    .siblings() - zwróci wszystkie rodzeństwo elementu,
//    .children() - zwróci wszystkie dzieci danego elementu,
//    .parent() - zwróci rodzica elementu,
//    .parents() zwróci listę wszystkich rodziców danego elementu tj. pierwszym elementem będzie element parent, kolejnym parent parent itd.,
//    .find(selektor) - zwróci wszystkie elementy pasujące do nowego selektora przekazanego jako argument które są dziećmi przedniego elementu,
//    .not(selektor) - zwróci elementy które nie należą dod danego selektora, np: $('div').not('.foo') zwróci elementy div które nie mają klasy foo,
//    .eq(indeks) - zwróci pojedynczy element o indeksie podanym jako argument, np jeśli w selektorze są dwa elementy to eq(1) zwróci drugi element.
//.first() - odnajduje pierwszy element, np. jeżeli jest kilka <div> z tą samą klasą to znajdzie pierwszy element
//.last() - odnajduje ostatni element, np. jeżeli jest kilka <div> z tą samą klasą to znajdzie ostatni element
//Np.
//$(’.text-area’).first().text(’<strong>Hello!</strong>!’);
//$(’.text-area’).last().html(’<strong>Hello!</strong>’);

//➔ html() wstawia ciąg znaków jako HTML
//➔ text() wstawia ciąg znaków jako tekst

//------

//Metody służące do manipulacji dom

//    append(string) - metoda doda zawartość przekazaną jako argument (może być kod html lub selektor) do danego elementu,
//    appendTo(selektor) - metoda doda obiekt jQuery do elementu o danym selektorze,

//Modyfikowanie elementów
//➔ show() pokazuje bieżący element
//➔ hide() ukrywa bieżący element
//➔ addClass() dodaje klasę/-y do elementu
//➔ removeClass() usuwa klasę/-y z element
//➔ toggleClass() dodaje lub usuwa klasę/-y z elementu
//➔ css() pozwala czytać i ustawiać style CSS na bieżącym elemencie
//attr() pozwala czytać i ustawiać atrybuty na bieżącym elemencie
//➔ removeAttr() pozwala usuwać atrybuty
//➔ val() pozwala czytać i ustawiać wartość na bieżącym elemencie
//➔ data() ustawia lub pobiera aktualną wartość atrybutu data

//Tworzenie elmentów HTML przy pomocy jQuery jest bardzo proste.
//Pamiętaj, że podobnie jak w przypadku metody createElement() nasz
//nowo utworzony element nie zostanie automatycznie podpięty do
//dokumentu.
//Np.
//var newHeading = $(’<h2>Title</h2>’, { class: ‘hidden’ });
//var newParagraph = $(’<p id=”introduction”></p>’);
//newParagraph.text(’Hello World!’);
//newParagraph.css(’color’, ’blue’);
//newParagraph.addClass(’text-center’);

$('<div id="welcome-info">Hello World!</div>').appendTo("body"); //kod utworzy nowy element div z tekstem Hello World! i doda go do elementu body strony.

//Metody dodające nową treść:
//append() - wstaw zawartość na końcu wybranego selektora
//prepend() - wstaw zawartość na początku wybranego selektora
//after() - wstaw zawartość za wybranym selektorem
//before() - wstaw zawartość przed wybranym selektorem
//np.
$(".test-class-two .p-class1").append("<span>One, Two, Three!</span>"); //dodajemy element <span> wraz z tekstem w środku

//Metody usuwające treść i elementy:
//remove() - usuwa wybrany element i elementy znajdujące się wewnątrz
//tego elementu (usuwa bieżący element wraz z jego zawartością)
//empty() - usuwa elementy znajdujące się wewnątrz wybranego
//elementu (usuwa wszystkie dzieci bieżącego elementu, w tym tekst)
//np.
$(".p-class2").empty(); //usuniemy zawartość z <p class="p-class2">

//==============

//Użycie .data()
console.log($("#data-div").data("lastValue")); // => 27 ||| wieloczłonowy atrybut, np. last-value, jest odczytywany jako lastValue, tj. $(‘div’).data(‘lastValue’)
console.log($("#data-div").data("hidden")); // => false

//=============

//Przykład
//$(‘.side-nav’).show();
//$(‘.side-nav’).hide();
//$(‘ul’).find(‘li’).addClass(‘list-item’);
//$(‘.post’).children().removeClass(‘content’);
//$(‘#power-switch’).toggleClass(‘hidden’);
//$(‘input[type="submit"]’).addClass(‘foo’).removeClass(‘bar’);

//Poniżej przykład z użyciem m.in. --- dblclick i val()
var animalsSelect = $("#animals");

$("#animals").on({
  dblclick: function () {
    // ---> To ten sam zapis  "dblclick": po prostu VSC sam to zmienia (czyli usuwa cudzysłów w zdarzeniach)
    $("#animal-result").val($(this).val().toUpperCase()); //wybieramy cat lub dog, zmieniamy litery na duże i wstawiamy w input
    //w krokach wybieramy pusty input i potem z pomocą val wstawiamy zwierzę wybrane z pomocą dblclick - aby był to wybór, który nas interesuje także używamy metody val i na koniec to co chcemy wstawić (jeszcze przed wstawieniem) zmieniamy na pismo dużymi literami
  },
});

console.log("");

//------

$("#test-id")
  .css({
    backgroundColor: "green",
  })
  .hide("slow")
  .show(2500); //albo np. tak

console.log($(".test-class"));

console.log("");

console.log($("p:first-child"));

console.log("");

$("#test-id .test-class p:last-child").text("Hello i Ello!!!"); //dodajemy tekst w w ostatnim elemencie <p>

console.log($("#test-id .test-class p:last-child").text()); //wyświetlamy tekst w danym elemencie

console.log("");

$("#test-id .test-class p:empty").html("Hello <b>This</b> World!!!"); //dodajemy kod do pustego elementu <p>

console.log($("#test-id .test-class p:nth-last-child(2)").html()); //wyświetlamy zawartość danego elementu

console.log("");

//console.log($('#test-id').html());//np. wyświetli całą zawartość <section id="test-id"> w konsoli
//
//console.log('');

//Metoda css():
//$( selektor ).css( "wlasnoscCSS" ); // zwraca określoną własność CSS z pierwszego dopasowanego selektora
//$( selektor ).css( "wlasnoscCSS", "wartosc" ); // ustawia własność CSS we wszystkich dopasowanych selektorach
//np.
//$( "p" ).css( "color" ); // zwróci kolor tekstu pierwszego elementu p
//$( "p" ).css( "color", "red" ); // ustawi kolor tekstu wszystkim elementom p

$(".test-class-two .p-class1").css("color", "blue"); //zmienimy kolor tekstu w <p class="p-class1"> na niebieski

//Metody dodające i usuwające klasy:
//addClass(); // dodaje jedną lub więcej klas do wybranego elementu
//removeClass(); // usuwa jedną lub więcej klas z wybranego elementu
//np.
//$( "div" ).addClass( "important" );
//$( "p" ).removeClass( "green important" );//WAŻNE!!! W notatkach z Akademia108 jest błąd, aby usunąć więcej niż jedną klasę nie wolno między nimi wstawiać przecinka musi być tak jak w html --- czyli tylko spacja i razem klasy w pazurkach

$(".test-class-two p:last-child").removeClass("class-to-remove also-to-remove"); //usuwamy dwie klasy z ostatniego elementu <p>
-$(".test-class-two p:last-child").addClass("we-add-new-class"); //do ostatniego elementu <p> dodajemy nową klasę

//Metoda val():
//$(selektor).val(); // zwraca wartość z pierwszego dopasowanego pola formularza
//$(selektor).val( "tekst" ); // ustawia wartość do wszystkich dopasowanych pól formularza
//np.
//$("input#name").val();
//$("input#email").val("name@gmail.com");

//======================

//Sposoby Stylowania w jQuery
//$('.classPrzykładowa').css('color', 'blue');//zmienimy kolor tekstu na niebieski

//$('.classPrzykładowa').css({'backgroundColor': 'green'});//zmieniamy kolor tła na zielony

//=============

//Biblioteka jQuery oferuje również metody pozwalające się z łatwością
//poruszać po drzewie HTML.
//Do takich metod należą metoda each() oraz metoda find().

//METODA FIND()
//Metoda find() zwraca elementy potomne wybranego elementu. Metoda
//przechodzi całe drzewo HTML od góry do dołu i wyszukuje
//odpowiednich elementów.
//Metoda posiada wymagany parametr, który mówi jakich potomków
//danego elementu wyszukać.
//Ogólna konstrukcja:
//$( selector ).find( filter );

//$( "div" ).find( ".first" ).css( { "color": "red", "border-color": "red" } );
//Znajdź potomków elementu <div> o class= "first" i nadaj im kolor tekstu i
//kolor obramowania czerwony.

$("div").find(".change-with-find").css({
  color: "rgba(89, 51, 132, 0.9)",
  border: "2px solid black",
  backgroundColor: "rgba(223, 234, 244, 0.3)",
}); //zmienimy kolor czcionki, wstawiamy obwódkę i jej kolor --- (uwaga w przypadku border trzeba podać parametr odpowiadający za rodzaj obwódki u nas solid - czyli jednolita)

//---

//METODA EACH()
//Metoda each() określa funkcję, która ma być uruchomiona dla
//wszystkich znalezionych elementów.
//Funkcja wymaga parametru w postaci funkcji, która ma być
//uruchomiona dla znalezionych elementów.
//Ogólna konstrukcja:
//    $(selector).each(function () {
//        // kod do wykonania
//    })

//$( "button" ).click( function() {
//$( "li" ).each( function() {
//console.log( $( this ).text() );
//} );
//} );
//Po kliknięciu na element <button> uruchamiana jest funkcja dla
//wszystkich elementów <li>, która wypisuje w konsoli tekst znajdujący
//się w elementach <li>.

$(".move-p-text").click(function () {
  $(".move-p-text").css({
    color: "green",
    backgroundColor: "rgba(148, 197, 242, 0.4)",
  }); //dodajemy trochę stylowania
  $(".move-p-text").attr("disabled", "disabled"); //dodajemy atrybut blokujący buttona - wymaga dwóch danych w nawiasie

  $(".button-and-p-div p").each(function () {
    console.log($(this).text()); //this sprawi, że w konsoli zostaną wypisane jeden pod drugim(w osobnych liniach konsoli) wszystkie teksty z elementów <p>, zawartych w <div class="button-and-p-div>
    //        console.log($('.button-and-p-div p').text());
  });

  console.log(this);

  console.log("");
});

//================

//jQuery Events
//jQuery pozwala automatycznie przypisywać eventy nowo wstawionym elementom.
//Wystarczy skorzystać z alternatywnej sygnatury metody on():
//on(event, selector, function)

//Metodę należy wywołać na rodzicu, który już istnieje!

//Zdarzenia w jQuery
//Większość zdarzeń DOM ma równoważną metodę jQuery.
//Aby skorzystać ze zdarzenia w jQuery wystarczy przypiąć
//zdarzenie do pobranego obiektu korzystając z metody będącej
//nazwą danego zdarzenia.

//Odpowiedniki metod addEventListener() i removeEventListener() w jQuery to:
//➔ on() pozwala dodawać eventy do bieżącego elementu
//➔ off() pozwala usuwać eventy z bieżącego elementu
//Np.
function hello() {
  console.log("Hello World!");
}
var alertButton = $(".alert-btn");
alertButton.on("click", hello); //Najpierw trzeba sprawdzić co się stanie po kliknięciu (sprawdzić w console.log), a potem odkomentować linijkę poniżej
//alertButton.off('click', hello);//Hello World! nie pojawi się w console.log

//preventDefault() (przy kliknięciu - click, submit, itp.) zapobiega przeładowaniu dokumentu

//Wybrane zdarzenia jQuery:
//click() - gdy użytkownik kliknie na wskazany element
//dblclick() - gdy użytkownik dwukrotnie kliknie na wskazany element
//mouseenter() - gdy wskaźnik myszy wejdzie na wskazany element
//mouseleave() - gdy wskaźnik myszy opuści wskazany element
//resize() - gdy zmieniany jest rozmiar wskazanego elementu
//load() - gdy wybrany element jest ładowany
//scroll() - gdy użytkownik skroluje wskazany element
//submit() - gdy formularz jest wysyłany

//Najczęściej wykorzystywane eventy to:
//➔ Mysz
//click dblclick mouseenter mouseleave
//➔ Klawiatura
//keypress keydown keyup
//➔ Form
//submit change focus blur
//➔ Document/Window
//load unload resize scroll

//$( 'a.guzik' ).click( function() {
//console.log( 'Guzik został naciśnięty.' );
//} );
//lub
//$( 'a.guzik' ).on( 'click', function() {
//console.log( 'Guzik został naciśnięty.' );
//} );

//Pierwszy sposób
//$('form').submit(function (e) {
//
//    e.preventDefault();
//    console.log('Imię: ' + $('#imie').val());
//    console.log('Nazwisko: ' + $('#nazwisko').val());
//    console.log('E-mail: ' + $('#email').val());
//    console.log('');
//
//})

//Drugi sposób - ciekawszy bo tak możemy podpiąć kilka zdarzeń do jednego elementu
$("form").on({
  submit: function (e) {
    e.preventDefault();
    $('input[type="submit"]').attr("class", "disabled-on");
    $('input[type="submit"]').attr("disabled", "disabled");
    $('input[type="reset"]').attr("disabled", "disabled");
    $("form").css("backgroundColor", "rgba(98, 82, 62, 0.3)");
    console.log("Imię: " + $("#imie").val());
    console.log("Nazwisko: " + $("#nazwisko").val());
    console.log("E-mail: " + $("#email").val());
    console.log("");
  },
  mouseover: function () {
    if ($('input[type="submit"]').hasClass("disabled-on")) {
      $("form").css({
        backgroundColor: "rgba(98, 82, 62, 0.3)",
      });
    } else {
      $("form").css({
        backgroundColor: "rgba(98, 82, 62, 0.5)",
      });
    }
  },
  mouseout: function () {
    $("form").css({
      backgroundColor: "rgba(98, 82, 62, 0.3)",
    });
  },
});

//===================

//ANIMACJE JQUERY
//Za pomocą jQuery można wykonywać animacje na
//elementach.
//Można korzystać z metod zdefiniowanych w jQuery, ale również
//można tworzyć własne animacje.

//Za pomocą metod hide() i show() można ukrywać i pokazywać
//elementy. Metoda hide() służy do ukrywania elementów,
//natomiast metoda show() do ich pokazywania.
//Obie metody mogą przyjmować dwa parametry. Pierwszym z
//nich jest prędkość ukrywania/pojawiania się elementu.
//Drugim jest funkcja, która jest wykonywana gdy metody się
//zakończyły.

//$( "#hide" ).click( function() {
//$( "p" ).hide( "slow" );
//} );
//$( "#show" ).click( function() {
//$( "p" ).show( "fast" );
//} );

//Za pomocą metody fadeIn() i fadeOut() można płynnie pokazywać
//i ukrywać elementy na stronie. Metody te przyjmują takie same
//parametry jak metody show() i hide().

//$( "#hide" ).click( function() {
//$( "p" ).fadeOut( "slow" );
//} );
//$( "#show" ).click( function() {
//$( "p" ).fadeIn( "fast" );
//} );

$(".p-class1 span").on({
  mouseover: function (e) {
    $(".p-class1").find("span").eq(0).fadeOut(2500);
    e.stopPropagation();
  },
  mouseout: function (e) {
    $(".p-class1").find("span").eq(0).fadeIn(2500);
    e.stopPropagation();
  },
});

//Za pomocą metody slideUp() i slideDown() można płynnie zwijać
//elementy w górę i rozwijać w dół. Metody te przyjmują takie
//same parametry ja metody wymienione wcześniej.
//$( "#hide" ).click( function() {
//$( "p" ).slideDown( "slow" );
//} );
//$( "#show" ).click( function() {
//$( "p" ).slideUp( "fast" );
//} );

//W jQuery można tworzyć niestandardowe animacje.
//Ogólna konstrukcja:
//$( selector ).animate( { params }, speed, callback );
//params - właściwości CSS, które mają być animowane
//speed - szybkość animacji
//callback - funkcja która wykona się po zakończeniu animacji

//$( "button" ).click( function() {
//$( "div" ).animate( { left: '250px' } );
//} );
//$( "button" ).click( function() {
//$( "div" ).animate( {
//left: '250px',
//opacity: '0.5',
//height: '150px'
//} );
//} );
//$( "button" ).click( function() {
//$( "div" ).animate( { left: '100px' }, "slow" );
//$( "div" ).animate( { fontSize: '3em' }, "slow" );
//} );

//--------------------

// http://kursjs.pl/kurs/jquery/jquery.php

// Jeżeli chcemy do elementu podpiąć event, który wykona się tylko jeden raz (a zaraz potem zostanie usunięty), skorzystamy z metody .one()

// Aby odpiąć dane zdarzenie, skorzystamy z metody off(). Działa ona praktycznie tak samo jak removeEventListener, czyli jeżeli chcemy odpiąć jakąś funkcję, powinniśmy przekazać ją jako parametr
