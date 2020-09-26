/*
Проверить число на простоту. Число вводить с клавиатуры.
(Простым числом называются числа имеющие два делителя: 
единицу и само число)
*/

do {
	var number = prompt("Введите число", "");
} while (isNaN(number) || number == null || number.trim() === "" || number < 2);

var count = 0;

for (var i = 2; i < Math.sqrt(number); i++) {
	if (number % i == 0) {
		count++;
		break;
	}
}

if (count != 0) {
	console.log(`Число ${number} составное.`);
} else {
	console.log(`Число ${number} простое.`);

}