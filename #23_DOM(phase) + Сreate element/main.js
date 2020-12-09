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

	const buttons = [{data_name: "save"}, {data_name: "cancel"}];

	const getElement = (selector) => document.querySelector(selector);

	const createElem = (selector) => document.createElement(selector);

	const createContainerButtons = (buttons) => {
		const containersButton = [];
		buttons.forEach(item => {
			const buttn = createElem("button");
			buttn.innerText = item.data_name;
			buttn.setAttribute("data_name", item.data_name);
			containersButton.push(buttn);
		});
		return containersButton;
	}

	const createElemContainer = () => {
		// элемент текстовое поле
		const textarea = createElem("textarea");
		// блок с кнопками
		const [save, cancel] = createContainerButtons(buttons);
		// общий контейнер для вставки
		const container = createElem("div");
		return {container, textarea, save, cancel};
	}

	const getEvent = (event) => {
		return event.target;
	}

	const handlerTD = (event) => {
		const clickedElem = getEvent(event);

		if(clickedElem.tagName === "TD") {
			const {container, textarea, save, cancel} = createElemContainer();
			// отрисовать в container элементы textarea, save, cancel
			container.append(textarea, save, cancel);
			// в кликнутом элементе вставить container
			clickedElem.append(container);
			// кликая на container, рисуем его один раз (остальные клики не рисуем)
			container.className = (clickedElem.childElementCount === 1) ? "show" : "hidden";
			// текст элемента по которому кликнули
			const textClickedElement = clickedElem.firstChild.nodeValue;
			// текстовое поле с текстом который был в ячейке(на которую нажали)
			textarea.value = textClickedElement;

			document.querySelectorAll("button").forEach(item => {
				item.addEventListener("click", (e) => {
					// содержимое кликнутого элемента меняется в зависимости от нажатой кнопки
					clickedElem.innerText = (getEvent(e).getAttribute("data_name") === "save") ? 
						textarea.value : textClickedElement;
					
					container.className = "hidden";
				});
			});
		}
	}

	const onListenerTable = () => {
		const table = getElement("table");
		table.addEventListener("click", handlerTD);
	}

	onListenerTable();
}