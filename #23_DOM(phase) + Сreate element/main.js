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
	
	function Field() {
		
	}
	
	// блок родитель, которому делегируем 
	const table = document.querySelector("table");
	
	// фрагмент для вставки блока с текстом и кнопками
	const fragment = document.createDocumentFragment();
	// блок с текстом и кнопками
	const container = document.createElement("div");
	container.classList.add(".container");
	// элементы блока
	const textarea = document.createElement("textarea");
	const buttonSave = document.createElement("button");
	const buttonCancel = document.createElement("button");
	buttonSave.innerText = "SAVE";
	buttonCancel.innerText = "CANCEL";
	// добавляем в контейнер элементы
	container.append(textarea, buttonSave, buttonCancel);
	// сам контейнер добавляем во фрагмент
	fragment.append(container);

	// функция-обработчик события
	const handlerEvent = function(event) {
		// элемент по которому кликнули
		const clickedElem = event.target;
		const textClickedElement = clickedElem.innerText;
		// если элемент по которому кликнули "TD"
		if(clickedElem.tagName === "TD") {
			// вставить фрагмент в элемент по которому кликнули
			clickedElem.append(fragment);
			// многострочное текстовое поле с текстом который был в ячейке
			textarea.innerText = textClickedElement;
			// вешаем слушатель на кнопку save
			buttonSave.addEventListener("click", function() {
				// сохраняем изменения
				clickedElem.innerText = textarea.value;
				// table.removeEventListener("click", handlerEvent);
			});
			buttonCancel.addEventListener("click", function() {
				// оставит все без изменений как было раньше
				clickedElem.innerText = textClickedElement;
				// table.removeEventListener("click", handlerEvent);
			});
		}
	}
	
	const clickTable = function(table) {
		table.addEventListener("click", handlerEvent);
	}
	// делегируем родителю
	clickTable(table);
}