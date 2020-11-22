// "use strict";

/*
Есть 3 input. Выводить в textarea содержимое всех
полей ввода через запятую. Использовать setInterval.
*/

setInterval( () => {
	let inputs = document.querySelectorAll('input'), // || inputs = document.getElementsByTagName('input') коллекция input
			textArea = document.querySelector('#text'), //  || textArea = document.getElementById('text')
			arrInputs = [];//массив для значений input
	for(let inp of inputs) {
		arrInputs.push(inp.value);
	}
	textArea.innerText = arrInputs.join(", "); // || textArea.innerHTML = arrInputs.join(", ");
}, 3000);