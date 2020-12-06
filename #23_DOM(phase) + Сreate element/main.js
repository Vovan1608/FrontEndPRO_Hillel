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
		const containersButton = [];
		buttons.forEach(item => {
			const buttn = createElem("button");
			buttn.innerText = item.button;
			containersButton.push(buttn);
		});
		return containersButton;
	}

	const createElemOfContainer = () => {
		// элемент текстовое поле
		const textarea = createElem("textarea");
		// блок с кнопками
		const [save, cancel] = createButtons(buttons);
		// общий контейнер для вставки
		const container = createElem("div");
		return {container, textarea, save, cancel};
	}

	const onListenerTable = () => {
		const table = getElement("table");
		table.addEventListener("click", (event) => {

			if(event.target.tagName === "TD") {
				const {container, textarea, save, cancel} = createElemOfContainer();
				// отрисовать в container элементы textarea, save, cancel
				container.append(textarea, save, cancel);
				// в кликнутом элементе вставить container
				event.target.append(container);
				// текст элемента по которому кликнули
				const textClickedElement = event.target.firstChild.nodeValue;
				// текстовое поле с текстом который был в ячейке(на которую нажали)
				textarea.value = textClickedElement;
				container.classList.add("show");

				document.querySelectorAll("button").forEach(item => {
					if(item.tagName === "BUTTON") {
						item.addEventListener("click", () => {
							if(item.innerText === "SAVE") {
								event.target.innerText = textarea.value;
								// удаляем класс show
								container.classList.remove("show");
							}
							if(item.innerText === "CANCEL") {
								event.target.innerText = textClickedElement;
								container.classList.remove("show");
							}
						});
					}
				});
			}
		});
	}

	onListenerTable();
}