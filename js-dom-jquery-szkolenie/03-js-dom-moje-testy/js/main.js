    'use strict';

    //Do Formularza w DOM --- Jeżeli używalibyśmy (nie wiem z jakiego powodu funkcji 'click') --- oczywiście to mój błąd bo z funkcją 'submit' - zadziała właściwie

    //FUNKCJA z 'CLICK' --- poniżej właściwa funkcja z 'SUBMIT'
//    function sendFormClick(e) {
//
//        var inputImie = document.getElementById('imie');
//        var inputNazwisko = document.getElementById('nazwisko');
//        var inputEmail = document.getElementById('email');
//
//        if (!inputImie.checkValidity()) {
//            //Metoda HTMLSelectElement.checkValidity () sprawdza, czy element ma jakieś ograniczenia i czy je spełnia. Jeśli element nie spełni swoich ograniczeń, przeglądarka uruchamia anulowane nieprawidłowe zdarzenie w elemencie, a następnie zwraca wartość false.
//            inputImie.innerHTML = inputImie.validationMessage;
//            //Właściwość validationMessage tylko do odczytu interfejsu HTMLObjectElement zwraca DOMString reprezentujący zlokalizowany komunikat opisujący (po sprawdzeniu) założenia, których formant nie spełnia.
//
//
//        } else if (!inputNazwisko.checkValidity()) { //w skrócie jeżeli (!input.checkValidaty) różny od założeń – prawda to zwróć we wskazanym inpucie (linijka poniżej) validationMessage (tak ja to rozumiem)
//
//            inputNazwisko.innerHTML = inputNazwisko.validationMessage;
//
//        } else if (!inputEmail.checkValidity()) {
//
//            inputEmail.innerHTML = inputEmail.validationMessage;
//
//        } else {
//
//            e.preventDefault(); //zapobiega przeładowaniu strony, ale wyłącza także zastrzeżenie atrybutu required z HTML, dlatego musimy zrobić powyższe założenia i użyć Metody checkValidity () i właściwości  validationMessage
//
//            document.querySelector('[type="submit"]').style.color = 'green';
//
//            document.querySelector('[type="submit"]').setAttribute('disabled', 'true');
//
//            document.querySelector('[type="reset"]').setAttribute('disabled', 'true');
//
//            var inputImie = document.querySelector('#imie').value;
//
//            var inputNazwisko = document.querySelector('#nazwisko').value;
//
//            var inputEmail = document.querySelector('#email').value;
//
//            console.log('W input Imię wpisano: ' + inputImie);
//
//            console.log('W input Nazwisko wpisano: ' + inputNazwisko);
//
//            console.log('W input E-mail wpisano: ' + inputEmail);
//
//            console.log('');
//
//        }
//    }
//
//    document.querySelector('[type="submit"]').addEventListener('click', sendFormClick);
//
    //=============

    //FUNKCJA z 'SUBMIT'
    function sendFormSubmit(e) {

        e.preventDefault(); //zapobiega przeładowaniu strony

        document.querySelector('[type="submit"]').style.color = 'green';

        document.querySelector('[type="submit"]').setAttribute('disabled', 'true');

        document.querySelector('[type="reset"]').setAttribute('disabled', 'true');

        var inputImie = document.querySelector('#imie').value;

        var inputNazwisko = document.querySelector('#nazwisko').value;

        var inputEmail = document.querySelector('#email').value;

        console.log('W input Imię wpisano: ' + inputImie);

        console.log('W input Nazwisko wpisano: ' + inputNazwisko);

        console.log('W input E-mail wpisano: ' + inputEmail);

        console.log('');

    }

    document.querySelector('form').addEventListener('submit', sendFormSubmit);