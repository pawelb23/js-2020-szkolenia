'use strict';

//1>>>SPOSÓB<<<

function tableAverage(arrJeden) {
    var sum = 0;
    for (var i=0; i<arrJeden.length; i++) {
//arrJeden.length --- pokaże w console.log ilość elementów (ogółem --- czyli cyfrę 9), zaś arrJeden[i] pokaże w console.log kolejne cyfry z tabeli (czyli --- 1,2,3,4,5,6,7,8,9).  
        
//        console.log(arrJeden[i]);
        sum += arrJeden[i];
//        console.log(sum);
    }
    var result = (sum / arrJeden.length);
       
    console.log('Ilość elementów w tabeli --- ' + arrJeden.length);
    
//     console.log(result);
    
    return result;  
}

var tableNumbers = [1,2,3,4,5,6,7,8,9];

//console.log(tableNumbers[2]);

console.log('Wynik --- ' + tableAverage(tableNumbers));

console.log('==========================');
//==========================================

//2>>>SPOSÓB<<<

function tableAverageDwa(arrDwa) {
    var sum = 0;
    for (var j=0; j<arrDwa.length; j++) {
//arrDwa.length --- pokaże w console.log ilość elementów (ogółem --- czyli cyfrę 8), zaś arrDwa[j] pokaże w console.log kolejne cyfry z tabeli (czyli --- 1,2,3,4,5,6,7,8).  
        
//        console.log(arrDwa[j]);
        sum += arrDwa[j];
//        console.log(sum);
        
        var inter = arrDwa[j];//aby system odczytał arrDwa[j] (jako cyfrę 8 --- czyli 8 elementów) musimy arrDwa[j] przyrównać do zmiennej
//        console.log (inter);
    }
    var resultDwa = (sum / inter);
    
       console.log('Ilość elementów w tabeli --- ' + inter);
    
//     console.log(resultDwa);
    
    return resultDwa;  
}

var arrDwa = [1,2,3,4,5,6,7,8];// nazwa taka sama jak parametru w funkcji (na kursie uczyli mnie zdecydowanie pierwszego sposobu)

console.log('Wynik --- ' + tableAverageDwa(arrDwa));

console.log('==========================');
