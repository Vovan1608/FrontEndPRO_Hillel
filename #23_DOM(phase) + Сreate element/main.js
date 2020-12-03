"use strict";

/*
Сверстать таблицу 5х5 с любым текстовым содержимым заранее заполненным.
При клике на любую ячейку таблицы появляется внутри ячейки многострочное 
текстовое поле с текстом который был в ячейке(на которую нажали) и две 
кнопки save, cancel save -- сохранить в текущей ячейке введенные данные, 
cancel -- оставит все без изменений как было раньше.
P.S. обязательно использовать делегирование события.
*/

window.onload = function() {

	const buttons = [{button: "SAVE"}, {button: "CANCEL"}];
	
	const getElement = (selector) => document.querySelector(selector);

	const createElem = (selector) => document.createElement(selector);

	const createButtons = (buttons) => {
		const saveCancelButton = [];
		buttons.forEach(item => {
			const buttn = createElem("button");
			buttn.innerText = item.button;
			saveCancelButton.push(buttn);
		});
		return saveCancelButton;
	}

	const handler = (event) => {
		// элемент по которому кликнули
		const clickedElem = event.target;
		// текст элемента по которому кликнули
		const textClickedElement = clickedElem.innerText;

		if(clickedElem.tagName === "TD") {
			// общий контейнер для вставки
			const container = createElem("div");
			container.classList.add("container");
			
			// элемент текстовое поле
			const textarea = createElem("textarea");
			// содержание текстового поля как у элемента, на который кликнули
			textarea.innerText = textClickedElement;

			// блок с кнопками
			const [save, cancel] = createButtons(buttons);

			// общий контейнер 
			container.append(textarea, save, cancel);

			// фрагмент вставляется в элемент по которому кликнули
			clickedElem.append(container);

			save.addEventListener("click", () => {
				clickedElem.innerText = textarea.value;
				table.removeEventListener("click", handler);
			});
			cancel.addEventListener("click", () => {
				clickedElem.innerText = textClickedElement;
				table.removeEventListener("click", handler);
			});
		}
	}

	const onListenerTable = () => {
		const table = getElement("table");
		table.addEventListener("click", handler);
	}

	onListenerTable();
}