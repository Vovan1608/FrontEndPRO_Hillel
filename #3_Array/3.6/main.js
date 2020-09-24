/*
Вывести в порядке возрастания цифры, из которых состоит число 
например: 95824 - в консоли должен увидеть 2 4 5 8 9
*/

var num = 95824;
var arrComponents = [];

var divider = 10;

while( (num / divider) > 0) {
    numComponents = num % divider;
    num = parseInt( num / divider );
}