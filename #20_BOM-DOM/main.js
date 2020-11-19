// "use strict";

/*
Есть 3 input. Выводить в textarea содержимое всех
полей ввода через запятую. Использовать setInterval.
*/

setInterval( () => {
	let inputs = document.getElementsByTagName('input'),// коллекция input
		  textArea = document.getElementById('text'),
			arrInputs = [],//массив для значений input
			i = 0,
			size = inputs.length;
	for(i; i < size; i += 1) {
		arrInputs.push(inputs[i].value);
	}
	textArea.innerText = arrInputs.join(", ")
}, 3000);