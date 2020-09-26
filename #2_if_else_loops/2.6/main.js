/*
Ввести с клавиатуры 2 числа a и b (где a < b). 
Запустить цикл перебора от a до b. Вывести в 
консоль квадраты чётных чисел.
*/

do{
	var a = prompt("Введите число a", "");
}while ( isNaN(a) || a == null || a.trim() === "");

do{
	var b = prompt("Введите число b", "");
}while ( isNaN(b) || b == null || b.trim() === "" || a > b);

for (var i = +a; i <= b; i++){
	if(i % 2 == 0){
		console.log( i ** 2);
	}
}
