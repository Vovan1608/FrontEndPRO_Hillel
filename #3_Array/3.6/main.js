/*
Вывести в порядке возрастания цифры, из которых состоит число 
например: 95824 - в консоли должен увидеть 2 4 5 8 9
*/

var num = 95824;
var arrComponents = [];

var divider = 10;

for (var i = 0; (num / divider) > 0; i++){
    arrComponents[i] = num % divider;
    num = parseInt( num / divider );
}

var arrSize = arrComponents.length;

for(var i = arrSize - 1; i >= 1; i--){
    for(var j = 0; j < i; j++){
        if(arrComponents[j] > arrComponents[j + 1]){
            var temp = arrComponents[j];
            arrComponents[j] = arrComponents[j + 1];
            arrComponents[j + 1] = temp;
        }
    }
}

console.log(arrComponents);