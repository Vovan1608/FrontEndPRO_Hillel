/*
Ввести с клавиатуры 2 числа a и b (где a < b). 
Запустить цикл перебора от a до b. Вывести в 
консоль квадраты чётных чисел.
*/

var a = +prompt("Enter a", "");
var b = +prompt("Enter b > a","");

if (a > b){
	console.log("Incorrect.");
}

for (var i = a; i <= b; i++){
	if(i % 2 == 0){
		console.log( i * i);
	}
}
