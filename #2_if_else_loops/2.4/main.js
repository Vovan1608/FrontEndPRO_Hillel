/*
Посчитать факториал n!, где n - ввести с клавиатуры.
Например: факториал числа 5! == 120, 
вычисляется так: 1 * 2 * 3 * 4 * 5 = 120
*/

do{
	var number = prompt("Введите целое число > 0","5");
}while ( isNaN(number) || number == null || number.trim() === "" || number == 0);

var factorialNum = 1;
for (var i = 2; i <= +number; i++){
	factorialNum *= i;
}
console.log(factorialNum);