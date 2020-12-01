"use strict";

/*
Сверстать таблицу 5х5 с любым текстовых содержимым заранее заполненным.
При клике на любую ячейку таблицы появляется внутри ячейке многострочное 
текстовое поле с текстом который был в ячейке(на которую нажали) и две 
кнопки save, cancel save -- сохранить в текущей ячейке введенные данные, 
cancel -- оставит все без изменений как было раньше.
P.S. обязательно использовать делегирование события.
*/

window.onload = function() {
	const table = document.querySelector("table");
	
	table.addEventListener("click", function(event) {
		const textarea = document.createElement("textarea");
		const elemClicked = event.target;
		if(elemClicked.tagName === "TD") {
			elemClicked.append(textarea);
			textarea.innerText = elemClicked.innerText;
		}
	});
}