/*
Вывести n чисел из ряда Фибоначчи, где n - вводится с клавиатуры
*/

do{
	var number = prompt("Введите число", "");
}while ( isNaN(number) || number == null || number.trim() === "" || number <= 0);

var start = 1;
var second;

for( var i = 0; i < number; i++){
	if(i < 2){
		second = start;
	}else{
		var fibonachi = start + second;
		start = second;
		second = fibonachi;
	}
	console.log(second);
}
