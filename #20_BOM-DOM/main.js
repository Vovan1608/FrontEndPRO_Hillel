// "use strict";

/*
Есть 3 input. Выводить в textarea содержимое всех
полей ввода через запятую. Использовать setInterval.
*/

setInterval( () => {
	const inputs = document.querySelectorAll('.input'); // коллекция input
	// одалживание метода slice для коллекции inputs и применеие метода map
	let arrayOfInputs = [].slice.call(inputs).map( (item) => item.value );
	// Выводим в textarea содержимое всех полей ввода через запятую
	inputs[3].innerText = `${arrayOfInputs[0]}, ${arrayOfInputs[1]}, ${arrayOfInputs[2]}`;
}, 3000);