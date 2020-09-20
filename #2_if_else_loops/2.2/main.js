/*
2.1 Ораганизовать перебор чисел от 1 до 150.
2.2 Посчитать сумму всех чисел
2.3 Посчитать сумму чётных чисел. 
*/

var sum = 0;
var sumEven = 0;
for (var i = 1; i < 151; i++){
	sum += i;
	if(i % 2 == 0){
		sumEven += i;
	}
}

console.log(sum);
console.log(sumEven);