/*
Вывести n чисел из ряда Фибоначчи, где n - вводится с клавиатуры
*/

var num = +prompt("Enter number","");

var start = 1;
var second;

for( var i = 0; i < num; i++){
	if(i < 2){
		second = start;
	}else{
		var fibonachi = start + second;
		start = second;
		second = fibonachi;
	}
	console.log(second);
}
